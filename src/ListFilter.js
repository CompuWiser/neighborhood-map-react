import React, { Component } from 'react'

class ListFilter extends Component {

    closeList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.remove('open')
    }

    setMarker(place) {
        place.populateInfoWindow(place.marker, place.props.largeInfowindow)
    }

    render() {
        const { locationsGoogle } = this.props;

        return (
            <aside className="list-box" >
                <button id="close-btn" className="close-list-box-btn" onClick={() => this.closeList()}>
                    X
                </button>
                <div className="list-box-content">
                    <ul id="list-of-places">
                        {locationsGoogle.filter( location => location.marker.visible === true).map((location, index) => (
                            <li key={index} onClick={(e) => this.setMarker(location)}> {location.props.title} </li>
                        ))}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListFilter;