import React, { Component } from 'react';
import Map from './Map'
import ListFilter from './ListFilter'
import * as constants from './constants'

export default class MapContainer extends Component {

  constructor(props) {
    super(props);
    this.state = {
      locationsGoogle: []
    }
    this.markersGoogle = [];
    this.onChangeMarker = this.onChangeMarker.bind(this);
  }

  onChangeMarker(marker) {
   
    this.markersGoogle.push(marker);

    if(this.markersGoogle.length === constants.locations.length) {
     this.setState({locationsGoogle: this.markersGoogle})
    }
  }

  render() {

    return (
      <div className="map-container">
        <ListFilter locationsGoogle={this.state.locationsGoogle} />
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