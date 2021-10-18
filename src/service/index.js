import axios from 'axios';

export const Api = axios.create({
  baseURL: 'https://api.github.com',
  Headers: {
    Accept: 'application/vnd.github.v3+json'
  }
});

export default Api;