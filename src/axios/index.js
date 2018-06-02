import axios from 'axios';

const baseURL = process.env.APIHOST || 'http://localhost:4000/api/v1/';

const instance = axios.create({
  baseURL,
  headers: {
    Accept: 'application-json',
    'Content-Type': 'application-json',
  },
});

export default instance;
