import React, { Component, PropTypes } from 'react';
import Masonry from 'react-masonry-component';
import GalleryStore from '../../stores/gallery.store';
import NavStore from '../../stores/nav.store';
import Actions from '../../actions/gallery.actions';
import Photo from '../photo/photo';

import './gallery.scss';

import {
    PHOTOS_UPDATED,
    PHOTOS_GET_SUCCES
} from '../../constants/constants';


const MASONRY_OPTIONS = {
    transitionDuration: 0
};

function getGalleryState() {
    return {
        photos: GalleryStore.getAll(),
        params: {
            feature: NavStore.get(),
            page: 1,
            rrp: 25,
            image_size: 4
        }
    };
}

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = getGalleryState();

        //window.addEventListener('scroll', this.onScrollEnd.bind(this));
    }

    componentWillMount() {
        Actions.getPhotos(this.params);
    }

    componentDidMount() {
        NavStore.addChangeListener(this.onFeatureChange);
        GalleryStore.addChangeListener(this.onChange);
    }

    componentWillUnmount() {
        NavStore.removeChangeListener(this.onFeatureChange);
        GalleryStore.removeChangeListener(this.onChange);
    }

    onFeatureChange = () => {
        this.setState(getGalleryState());

        Actions.getPhotos(this.params);
    };

    onChange = () => {
        this.setState(getGalleryState());
    };

    get params() {
        return this.state.params;
    }

    //onScrollEnd() {
    //    //$(window).scrollTop() == $(document).height() - $(window).height()
    //
    //    setTimeout(() => {
    //        let scrollTop = window.pageYOffset;
    //        let windowHeight = window.innerHeight;
    //
    //        let body = document.body;
    //        let html = document.documentElement;
    //
    //        let documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
    //            html.clientHeight, html.scrollHeight, html.offsetHeight);
    //
    //        if(scrollTop !== documentHeight - windowHeight) {
    //            return false;
    //        }
    //    }, 50);
    //}

    render() {
        const { photos } = this.state;

        const galleryItems = photos.map((photo, index) => {
            return (
                <Photo key={index}
                       url={photo.image_url}
                       title={photo.name}
                       user={photo.user.username}
                       data={photo}
                />
            );
        });

        return (
            <section>
                <Masonry className={'gallery'}
                         elementType={'ul'}
                         options={MASONRY_OPTIONS}
                         disableImagesLoaded={false}>

                    {galleryItems}
                </Masonry>
            </section>
        );
    }

}


export default Gallery;
