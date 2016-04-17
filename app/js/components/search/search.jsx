import React, { Component } from 'react';
import Actions from '../../actions/gallery.actions';

import './search.scss';

const STATIC_PARAMS = {
    rrp: 25,
    image_size: 4,
    exclude: 'Nude'
};


class Search extends Component {
    constructor(props) {
        super(props);
        this.params = STATIC_PARAMS;
    }

    // TODO: fix a 'search mode' for gallery view to have infinite scroll within search results
    updateValue = (e) => {
        let query = e.currentTarget.value;
        if(query.length < 2) {
            return;
        }
        this.params.term = query;

        Actions.clearPhotos();
        Actions.searchPhotos(this.params);
    };

    render() {
        return (
            <label className="search">
                <input className="search__query"
                       name="searchQuery"
                       onChange={this.updateValue}
                       type="search"
                       title="Search for photos"
                       placeholder="Search"/>
            </label>
        );
    }
}

export default Search;
