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


const PAGE_START = 1;

const MASONRY_OPTIONS = {
    transitionDuration: 0
};

const STATIC_PARAMS = {
    rrp: 25,
    image_size: 4
};

function getGalleryState() {
    return {
        photos: GalleryStore.getAll()
    };
}

class Gallery extends Component {

    constructor(props) {
        super(props);
        this.state = getGalleryState();

        this.params = Object.assign({}, STATIC_PARAMS, {
            feature: NavStore.get(),
            page: PAGE_START
        });

        setTimeout(() => {
            window.addEventListener('scroll', this.onScroll.bind(this));
        }, 15);
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
        setTimeout(() => {
            this.params.feature = NavStore.get();
            Actions.clearPhotos();
        }, 300);
    };

    onChange = () => {
        this.setState(getGalleryState());
    };

    onScroll = () => {
        const scrollTop = window.pageYOffset;
        const windowHeight = window.innerHeight;

        const body = document.body;
        const html = document.documentElement;

        const documentHeight = Math.max(body.scrollHeight, body.offsetHeight,
            html.clientHeight, html.scrollHeight, html.offsetHeight);

        if(scrollTop !== (documentHeight - windowHeight)) {
            return false;
        } else {
            this.onDocumentEnd();
        }
    };

    onDocumentEnd() {
        let nextPage = this.params.page + 1;

        // TODO: replace the hardcoded 1000 with max from API response
        if(nextPage < 1000) {
            Actions.getPhotos(this.params);
            this.params.page = nextPage;
        }
    }

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
