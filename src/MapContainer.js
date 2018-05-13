import React, { Component } from 'react';
// import Map from './Map'
// import Marker from './Marker'
import {Map, InfoWindow, Marker} from 'google-maps-react';
import { neighborhood, locations } from './constants'

export default class MapContainer extends Component {



  render() {

    return (
      <main className="main-container">
        <Map google={this.props.google}
          initialCenter={neighborhood}
          zoom={15}
        >
          {locations.map( (location, index) => (
            
                    <Marker key={index}
                    title={'The marker`s title will appear as a tooltip.'}
                    name={'SOMA'}
                    position={location.location} />
                
          
          ))}
        </Map>
      </main>
    )
  }
}