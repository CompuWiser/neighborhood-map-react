import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapConfig from './mapConfig'
import * as constants from './constants'
import Marker from './Marker'

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
            const { lat, lng } = constants.neighborhood;
            const center = new maps.LatLng(lat, lng);
            const mapObj = Object.assign({}, {
              center: center,
              zoom: mapConfig.zoom,
              styles: mapConfig.styles,
              mapTypeControl: mapConfig.mapTypeControl
            })
            
            //inst. the map            
            this.map = new maps.Map(divMapElement, mapObj);
            //unique instance of Bounds
            this.bounds = new google.maps.LatLngBounds();
            //unique instance of infoWindow
            this.largeInfowindow = new google.maps.InfoWindow();
            //force the update here to get this.map filled
            this.forceUpdate();
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
                {constants.locations.map( (location, index) => (
                    <Marker   key={index} 
                        google={this.props.google}
                        map={this.map}
                        title={location.title}
                        position={location.location} 
                        bounds={this.bounds}
                        largeInfowindow={this.largeInfowindow}
                        />
                ))}
            </div>
        )
    }
}

export default Map;