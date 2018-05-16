import React, { Component } from 'react';
import Map from './Map'
import ListFilter from './ListFilter'
import * as constants from './constants'

export default class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locations: []
    }
    this.locationsGoogle = [];
    this.onChangeMarker = this.onChangeMarker.bind(this);
  }

  onChangeMarker(marker) {
   
    this.locationsGoogle.push(marker);

    if(this.locationsGoogle.length === constants.locations.length) {
     this.setState({locations: this.locationsGoogle})
    }
  }

  render() {

    console.log(this.state.locations);
    

    return (
      <div className="map-container">
        <ListFilter />
        <main className="main-container">
          <Map 
            google={this.props.google}
            onChangeMarker={this.onChangeMarker} 
            />
        </main>
      </div>
    )
  }
}