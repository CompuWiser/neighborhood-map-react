import React, { Component } from 'react';
import Map from './Map'

// import { InfoWindow, Marker} from 'google-maps-react';
// import { neighborhood, locations } from './constants'

export default class MapContainer extends Component {



  render() {

    return (
      <main className="main-container">
        <Map google={this.props.google} />
      </main>
    )
  }
}