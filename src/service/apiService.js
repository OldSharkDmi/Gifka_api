import { from } from 'rxjs';
import axios from 'axios';


const api_key = 'h8cw7zZCBdRG6tKfd5bnYNtDPvUr4UQO';
const baseURL = 'https://api.giphy.com/v1/gifs';

export const fetchRandomGif = () => {
    return from(axios.get(`${baseURL}/random`, {
        params: { api_key }
    }));
};

export const fetchGifsByQuery = (query) => {
    return from(axios.get(`${baseURL}/search`, {
        params: {
            api_key,
            q: query,
            limit: 10
        }
    }));
};

export const fetchTrendingGifs = () => {
    return from(axios.get(`${baseURL}/trending`, {
        params: {
            api_key,
            limit: 10
        }
    }));
};
