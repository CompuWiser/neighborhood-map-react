import React, { Component } from 'react';

class Marker extends Component {

    componentDidMount() {
        this.renderMarker();
        
        // if ((this.props.position !== prevProps.position)) {
        //     // The relevant props have changed
        //     this.renderMarker();
        // }
      }
      renderMarker() {
        let {
            map, google, position, mapCenter
          } = this.props;
          console.log(map);
          
          let defaultIcon = this.makeMarkerIcon('0091ff');
          
          let pos = position;
         position = new google.maps.LatLng(pos.lat, pos.lng);

         const pref = {
            
            position: position,
            icon: defaultIcon
          };
          this.marker = new google.maps.Marker(pref);
      }
      makeMarkerIcon(markerColor) {
        var markerImage = new this.props.google.maps.MarkerImage(
          'http://chart.googleapis.com/chart?chst=d_map_spin&chld=1.15|0|'+ markerColor +
          '|40|_|%E2%80%A2',
          new this.props.google.maps.Size(21, 34),
          new this.props.google.maps.Point(0, 0),
          new this.props.google.maps.Point(10, 34),
          new this.props.google.maps.Size(21,34));
        return markerImage;
      }

  render() {
    return null;
   
  }
}

export default Marker;

Marker.propTypes = {
    map: React.PropTypes.object
}