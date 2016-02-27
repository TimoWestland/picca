import fetch from 'node-fetch';
import { API_URL, API_KEY } from '../constants/constants';

function getItems(params) {
    return fetch(API_URL, {
        params: Object.assign({}, params, { api_key: API_KEY })
    });
}

export default { getItems };
