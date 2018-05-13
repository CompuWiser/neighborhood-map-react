import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import mapConfig from './mapConfig'
import * as constants from './constants'

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
            // console.log(mapObj);
            
            this.map = new maps.Map(divMapElement, mapObj);
             
        }
    }

    renderChildren() {
        const {children} = this.props;

        if (!children) return;

        return React.Children.map(children, c => {
            return React.cloneElement(c, {
              map: this.map,
              google: this.props.google
            });
          })
    }

    render() {
        const style = {
            width: '100vw',
            height: '100vh'
          }
        return (
            <div ref='map' className="map-container" style={style}>
                Loading map...
                {this.renderChildren()}
            </div>
        )
    }
}

export default Map;