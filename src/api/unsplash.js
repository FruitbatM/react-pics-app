import axios from 'axios';

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID L232a86XF4_zbvHcP0Pnc8QBpe-Yp-bz9SypyyGZA1I'
  }
});