import axios from 'axios';

export const fetcher = (url, params) => {
    return axios.post(url, params).then((r) => r.data);
  };