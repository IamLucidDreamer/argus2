const { default: axios } = require('axios');

const axiosInstance = axios.create({
  baseURL: 'https://argus-backendzedd.herokuapp.com/api',
});

export default axiosInstance;
