import axios from 'axios';

axios.defaults.baseURL = 'https://dummyapi.io/data/api/';

axios.interceptors.request.use(config => {
  config.headers = {'app-id': '60e6e5325039f2465f3514b4'};
  return config;
});

export default axios;
