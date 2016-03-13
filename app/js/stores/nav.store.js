import { EventEmitter } from 'events';
import Dispatcher from '../dispatcher/dispatcher';
import BaseStore from './base.store';

import {
    FEATURE_UPDATED,
    DEFAULT_FEATURE
} from '../constants/constants';


class NavStore extends EventEmitter {
    constructor() {
        super();
        this.feature = DEFAULT_FEATURE;
    }

    set(feature) {
        this.feature = feature;
        this.emitChange();
    }

    get() {
        if(!this.feature) {
            return;
        }

        return this.feature;
    }

    emitChange() {
        this.emit(FEATURE_UPDATED);
    }

    addChangeListener(callback) {
        this.on(FEATURE_UPDATED, callback);
    }
}

let store = new NavStore();

Dispatcher.register((action) => {
    switch(action.type) {
        case FEATURE_UPDATED:
            store.set(action.feature);
            break;

        default:
            return;
    }
});

export default store;
