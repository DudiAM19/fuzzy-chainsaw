import axios from 'axios';
const link = 'https://doa-doa-api-ahmadramadhan.fly.dev/api';

export const getData = payload => {
  return axios.get(link, payload);
};
