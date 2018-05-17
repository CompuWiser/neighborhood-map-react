import React, { Component } from 'react'

class NavSearch extends Component {

    showList() {
        let listFilter = document.getElementsByTagName('aside');
        listFilter[0].classList.add('open')
    }

    handleQuery(query) {
        console.log(query);
        
    }

    render() {
        return (
            <nav className="navbar">
                <div className="navbar-header">
                    <div className="site-name">My Neighborhood Tips</div>
                    <div className="navbar-form navbar-left" role="search">
                        <div className="form-group">
                            <input 
                                className="form-control" 
                                id="search-input" 
                                type="text"  
                                placeholder="Filter" 
                                onChange={(event) => this.handleQuery(event.target.value)}
                                onFocus={() => this.showList()}
                                />
                        </div>
                    </div>
                </div>
            </nav>
        )
    }
}

export default NavSearch;