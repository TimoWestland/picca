import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import GalleryStore from '../../stores/gallery.store';
import Actions from '../../actions/gallery.actions';
import Photo from '../photo/photo';

import './gallery.scss';

import {
    PHOTOS_UPDATED,
    PHOTOS_GET_SUCCES
} from '../../constants/constants';


const masonryOptions = {
    transitionDuration: 500
};

function getGalleryState() {
    return {
        photos: GalleryStore.getAll(),
        params: {
            method: 'flickr.photos.getRecent',
            format: 'json',
            per_page: 16,
            nojsoncallback: 1
        }
    };
}

class Gallery extends Component {

    state = getGalleryState();

    componentWillMount() {
        const { params } = this.state;
        Actions.getPhotos(params);
    }

    componentDidMount() {
        GalleryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        GalleryStore.removeChangeListener(this.onChange);
    }

    onChange = () => {
      this.setState(getGalleryState());
    };

    render() {
        const { photos } = this.state;

        const galleryItems = photos.map((photo) => {
            return <Photo key={photo.id} data={photo}/>;
        });

        return (
            <Masonry className={'gallery'}
                     elementType={'ul'}
                     options={masonryOptions}
                     disableImagesLoaded={false}>

                {galleryItems}
            </Masonry>
        );
    }
}

export default Gallery;
