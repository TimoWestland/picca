import Dispatcher from '../dispatcher/dispatcher';
import API from '../lib/api';

import {
    PHOTOS_GET_SUCCES,
    PHOTOS_GET_ERROR
} from '../constants/constants';


function getPhotos(params) {
    API.getItems(params)
       .then((response) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_SUCCES,
               photos: response.data.photos.photo
           });
       })
       .catch((error) => {
           Dispatcher.dispatch({
               type: PHOTOS_GET_ERROR,
               error: error
           });
       });
}

export default { getPhotos };

