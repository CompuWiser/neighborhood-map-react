import React, { Component } from 'react';
import './App.css';
// import the Google Maps API Wrapper from google-maps-react
import { GoogleApiWrapper } from 'google-maps-react' 
// import child component
import MapContainer from './MapContainer'
import NavSearch from './NavSearch'
import * as constants from './constants'
// import ReactGoogleMapLoader from "react-google-maps-loader"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationsGoogle: []
    }
    this.markersGoogle = [];
    this.onChangeMarker = this.onChangeMarker.bind(this);
    this.handleQuery = this.handleQuery.bind(this);
  }

  onChangeMarker(marker) {
   
    this.markersGoogle.push(marker);

    if(this.markersGoogle.length === constants.locations.length) {
     this.setState({locationsGoogle: this.markersGoogle})
    }
  }

  handleQuery(query) {
    let result = this.state.locationsGoogle.map( location => {
      let matched = location.props.title.toLowerCase().indexOf(query) >= 0;
      if (location.marker) {
        location.marker.setVisible(matched);
      }
      return location;
    })

    this.setState({ locationsGoogle: result });   
  }

  render() {    
    return (
      <div className="App">
        <NavSearch handleQuery={this.handleQuery} />

        <MapContainer 
          google={this.props.google}
          onChangeMarker={this.onChangeMarker}
          locationsGoogle={this.state.locationsGoogle} />
      </div>
    );
  }
}

// OTHER MOST IMPORTANT: Here we are exporting the App component WITH the GoogleApiWrapper. You pass it down with an object containing your API key
export default GoogleApiWrapper({
  apiKey: 'AIzaSyARC-a63vxOWRRAgpjnDYOndn_2fFLYhAo',
})(App)
