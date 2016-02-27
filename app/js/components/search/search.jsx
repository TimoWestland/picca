import React, { Component } from 'react';

import './search.scss';


class Search extends Component {
    updateValue(e) {
        this.setState = {
            value: e.currentTarget.value
        };
    }

    render() {
        return (
            <label className="search">
                <input className="search__query"
                       name="searchQuery"
                       onChange={this.updateValue.bind(this)}
                       type="search"
                       title="Search for photos"
                       placeholder="Search"/>
            </label>
        );
    }
}

export default Search;
