import axios from 'axios';
import { API_URL, API_KEY } from '../constants/constants';


function getItems(params) {
    return axios(API_URL, {
        params: Object.assign({}, params, { api_key: API_KEY })
    });
}

export default { getItems };
