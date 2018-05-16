import React, { Component } from 'react';
import Map from './Map'
import ListFilter from './ListFilter'

// import { InfoWindow, Marker} from 'google-maps-react';
// import { neighborhood, locations } from './constants'

export default class MapContainer extends Component {



  render() {

    return (
      <div className="map-container">
        <ListFilter />
        <main className="main-container">
          <Map google={this.props.google} />
        </main>
      </div>
    )
  }
}