import { Component } from 'react';
import PropTypes from 'prop-types'

class Marker extends Component {


  componentDidUpdate(prevProps) {
 
    if ((this.props.map !== prevProps.map) ||
        (this.props.position !== prevProps.position)) {
        this.renderMarker();
    }
  }
  renderMarker() {
    if (this.marker) {
      this.marker.setMap(null);
    }

    let { map, google, position, bounds, largeInfowindow, onChangeMarker } = this.props;


      let defaultIcon = this.makeMarkerIcon('0091ff');
      
      let pos = position;
      position = new google.maps.LatLng(pos.lat, pos.lng);

      const pref = {
        map: map,
        position: position,
        icon: defaultIcon
      };
      this.marker = new google.maps.Marker(pref);
      const marker = this.marker;
      
      // Create an onclick event to open the large infowindow at each marker.
      let self = this;
      marker.addListener('click', function() {
        self.populateInfoWindow(this, largeInfowindow);
      });

      onChangeMarker(this);

      bounds.extend(marker.position);
      map.fitBounds(bounds);


      
  }

  populateInfoWindow(marker, infowindow) {

    // Check to make sure the infowindow is not already opened on this marker.
    if (infowindow.marker !== marker) {
      let { map, google, bounds, title } = this.props;
      //set some Animation when MArker has cliked
      marker.setAnimation(google.maps.Animation.BOUNCE);
        setTimeout(function() {
          marker.setAnimation(null);
        }, 700);

        //Request related TIPs by Foursquare API
        fetch(`https://api.foursquare.com/v2/tips/search?v=20161016&ll=-3.738977%2C-38.539653&query=${title}&limit=4&intent=match&client_id=AHDCBP0X3W1DX4IFXXXLDNFGWEOVFQVN1ZA4FMSX44YHO4X5&client_secret=44OKE3QF1REUWL5GB4V222BXW3CHRMO3OY4WQZJMIIHP1GRK`)
            .then(response => response.json())
            .then(addTips)
            .catch(err => requestError(err, 'Foursquare'));

            //if sucess in Request
            function addTips(data) {
              let htmlResult = '';
              if (data && data.response.tips) {
                  const tipsData = data.response.tips;
                  htmlResult = '<h4>' + title + '</h4><h6> Some Tips </h6><ul id="tips-places">';
                  tipsData.forEach( tip => {
                    htmlResult += '<li>' + tip.text + ' - ♥ ' + tip.likes.count + ' </li>';
                  })
                  htmlResult += '<ul>';
              } else {
                  htmlResult = '<p class="network-warning">Unfortunately, no <i>TIPs</i> was returned for your search.</p>';
              }
              infowindow.setContent(htmlResult);
            }
            //if Error in Request
            function requestError(err, part) {
              console.log(err);
              infowindow.setContent(`<p class="network-warning">Oh no! There was an error making a request for the ${part}.</p>`);
            }            
      infowindow.marker = marker;
  
      // Make sure the marker property is cleared if the infowindow is closed.
      infowindow.addListener('closeclick', function() {
        infowindow.marker = null;
      });
  
      // Open the infowindow on the correct marker.
      infowindow.open(map, marker);
      map.fitBounds(bounds);
      map.panTo(marker.getPosition());
    }
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
    map: PropTypes.object
}