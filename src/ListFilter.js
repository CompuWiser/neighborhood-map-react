import React, { Component } from 'react'

class ListFilter extends Component {

    closeList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.remove('open')
    }

    setMarker(place) {
        console.log(place);
        place.marker.setVisible(false);
    }

    render() {
        const { locationsGoogle } = this.props;
        console.log(locationsGoogle);
        
        return (
            <aside className="list-box" >
                <button id="close-btn" className="close-list-box-btn" onClick={() => this.closeList()}>
                    X
                </button>
                <div className="list-box-content">
                    <ul id="list-of-places">
                        {locationsGoogle.map((location, index) => (
                            <li key={index} onClick={(e) => this.setMarker(location)}> {location.props.title} </li>
                        ))}
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListFilter;