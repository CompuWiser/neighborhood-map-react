import React, { Component } from 'react';

class Marker extends Component {

    componentDidUpdate(prevProps) {
        if ((this.props.map !== prevProps.map)) {
            // The relevant props have changed
        }
      }
      renderMarker() {
        let {
            map, google, mapCenter
          } = this.props;

         let position = new google.maps.LatLng(mapCenter.lat, mapCenter.lng);

         const pref = {
            map: map
          };
          this.marker = new google.maps.Marker(pref);
      }


  render() {
    return null;
   
  }
}

export default Marker;

Marker.propTypes = {
    map: React.PropTypes.object
}