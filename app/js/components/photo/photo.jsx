import React, { Component, PropTypes } from 'react';

import './photo.scss';


const COLORS = ['#50E3C2', '#FFC43D', '#EF476F'];

class Photo extends Component {

    static propTypes = {
        url: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        user: PropTypes.string.isRequired,
        data: PropTypes.object
    };

    static getColorStyle() {
        // return a random number between 1 and 3
        let colorId = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

        return { color: COLORS[colorId - 1] };
    }

    componentWillMount() {

    }

    render() {
        let {
            url,
            title,
            user
            } = this.props;

        let colorStyle = Photo.getColorStyle();

        if(title.length > 20) {
            title = title.substr(0, 20) + '...';
        }

        return (
            <li className="gallery__item">
                <figure className="photo">
                    <img src={url} alt={title}/>

                    <figcaption className="photo__info">
                        <span className="photo__title">{title}</span>
                        photo by <span style={colorStyle}>{user}</span>
                    </figcaption>
                </figure>
            </li>
        );
    }
}

export default Photo;
