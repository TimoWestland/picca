import axios from 'axios';
import { API_URL, API_KEY } from '../constants/constants';


function getItems(params) {
    return axios(`${API_URL}/photos`, {
        params: Object.assign({}, params, { consumer_key: API_KEY })
    });
}

export default { getItems };
