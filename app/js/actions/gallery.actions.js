import Dispatcher from '../dispatcher/dispatcher';
import API from '../lib/api';

import {
    PHOTOS_GET_SUCCES,
    PHOTOS_GET_ERROR,
    FEATURE_UPDATED
} from '../constants/constants';


function getPhotos(params) {
    API.getItems(params)
       .then((response) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_SUCCES,
               data: response.data.photos
           });
       })
       .catch((error) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_ERROR,
               error: error
           });
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
    setFeature
};

