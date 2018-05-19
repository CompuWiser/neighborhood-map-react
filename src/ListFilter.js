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
                <h2 tabIndex="0" className="offscreen">List of favorites places</h2>
                <button role="presentation" aria-roledescription="Close button of list of places"  id="close-btn" className="close-list-box-btn" onClick={() => this.closeList()}>
                    X
                </button>
                <div className="list-box-content">
                    <ul tabIndex="0" role="tablist" id="list-of-places">
                        {locationsGoogle.filter( location => location.marker.visible === true).map((location, index) => (
                            <li tabIndex="0" role="presentation" key={index} onClick={(e) => this.setMarker(location)}> {location.props.title} </li>
                        ))}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListFilter;