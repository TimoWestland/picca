import React, { Component, PropTypes } from 'react';

class Photo extends Component {

    static propTypes = {
        data: PropTypes.object.isRequired
    };

    componentWillMount() {
        const { farm, server, id, secret } = this.props.data;
        this.url = `https://farm${farm}.staticflickr.com/${server}/${id}_${secret}.jpg`;
    }

    render() {
        const { title } = this.props.data;

        return(
            <li className="gallery__item">
                <img src={this.url} alt={title}/>
            </li>
        );
    }
}

export default Photo;
