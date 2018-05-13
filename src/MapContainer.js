import React, { Component } from 'react';
import Map from './Map'
import Marker from './Marker'

export default class MapContainer extends Component {



  render() {


    return (
      <main className="main-container">
        <Map google={this.props.google}>
          <Marker />
        </Map>
      </main>
    )
  }
}