const { default: axios } = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8000/api',
});

export default axiosInstance;
