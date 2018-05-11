import React, { Component } from 'react';
import ReactDOM from 'react-dom';

class Map extends Component {
    componentDidMount() {
        this.loadMap();
    }

    componentDidUpdate(prevProps, prevState) {
        if (prevProps.google !== this.props.google) {
          this.loadMap();
        }
    }
    
    loadMap() {
        if (this.props && this.props.google) {
            const {google} = this.props;
            const maps = google.maps;

            const mapRef = this.refs.map;
            const divMapElement = ReactDOM.findDOMNode(mapRef);

            //setup the Map
            let zoom = 15;
            let lat = 37.774929;
            let lng = -122.419416;
            const center = new maps.LatLng(lat, lng);
            const mapConfig = Object.assign({}, {
              center: center,
              zoom: zoom
            })
            //inst. the map
            console.log(mapConfig);
            
            this.map = new maps.Map(divMapElement, mapConfig);
             
        }
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }
        return (
            <div ref='map' className="map-container" style={style}>
                Loading map...
            </div>
        )
    }
}

export default Map;