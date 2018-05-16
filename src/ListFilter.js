import React, { Component } from 'react'

class ListFilter extends Component {

    closeList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.remove('open')
    }

    render() {
        return (
            <aside className="list-box" >
                <button id="close-btn" className="close-list-box-btn" onClick={() => this.closeList()}>
                    X
                </button>
                <div className="list-box-content">
                    <ul id="list-of-places">
                        <li> teste </li>
                        <li> teste </li>
                    </ul>
                </div>
            </aside>
        )
    }
}

export default ListFilter;