const { default: axios } = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://argus-backend-zedd.herokuapp.com/api',
});

export default axiosInstance;
