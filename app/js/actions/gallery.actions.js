import Dispatcher from '../dispatcher/dispatcher';
import API from '../lib/api';

import {
    PHOTOS_GET_SUCCES,
    PHOTOS_GET_ERROR,
    PHOTOS_SEARCH_SUCCES,
    PHOTOS_SEARCH_ERROR,
    PHOTOS_DELETED,
    FEATURE_UPDATED
} from '../constants/constants';


function getPhotos(params) {
    API.getItems(params)
       .then((response) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_SUCCES,
               data: response.data.photos,
               max: response.data.total_items
           });
       })
       .catch((error) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_ERROR,
               error: error
           });
       });
}

function searchPhotos(params) {
    API.searchItems(params)
       .then((response) => {
           Dispatcher.dispatch({
               type: PHOTOS_SEARCH_SUCCES,
               data: response.data.photos,
               max: response.data.total_items
           });
       })
       .catch((error) => {
           Dispatcher.dispatch({
               type: PHOTOS_SEARCH_ERROR,
               error: error
           });
       });
}

function clearPhotos() {
    Dispatcher.dispatch({
        type: PHOTOS_DELETED
    });
}

function setFeature(feature) {
    Dispatcher.dispatch({
        type: FEATURE_UPDATED,
        feature: feature
    });
}

export default {
    getPhotos,
    searchPhotos,
    clearPhotos,
    setFeature
};

