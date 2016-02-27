import Dispatcher from '../dispatcher/dispatcher';
import BaseStore from './base.store';

import {
    PHOTOS_UPDATED,
    PHOTOS_GET_SUCCES,
    PHOTOS_GET_ERROR
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
           store.setAll(action.photos);
           break;

       case PHOTOS_GET_ERROR:
           throw new Error(action.error);
           break;

       default: return;
   }
});

export default store;
