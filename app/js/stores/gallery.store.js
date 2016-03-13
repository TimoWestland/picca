import Dispatcher from '../dispatcher/dispatcher';
import BaseStore from './base.store';

import {
    PHOTOS_UPDATED,
    PHOTOS_GET_SUCCES,
    PHOTOS_GET_ERROR,
    PHOTOS_SEARCH_SUCCES,
    PHOTOS_SEARCH_ERROR,
    PHOTOS_DELETED,
    FEATURE_UPDATED
} from '../constants/constants';


class GalleryStore extends BaseStore {
    emitChange() {
        this.emit(PHOTOS_UPDATED);
    }

    addChangeListener(callback) {
        this.on(PHOTOS_UPDATED, callback);
    }

    removeChangeListener(callback) {
        this.removeListener(PHOTOS_UPDATED, callback);
    }
}

let store = new GalleryStore();

Dispatcher.register((action) => {
    switch(action.type) {

        case PHOTOS_GET_SUCCES:
        case PHOTOS_SEARCH_SUCCES:
            action.data.forEach((item) => {
                store.set(item);
            });
            break;

        case PHOTOS_GET_ERROR:
        case PHOTOS_SEARCH_ERROR:
            throw new Error(action.error);
            break;

        case PHOTOS_DELETED:
            store.removeAll();
            break;

        default:
            return;
    }
});

export default store;
