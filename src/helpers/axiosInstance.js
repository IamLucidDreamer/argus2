const { default: axios } = require('axios');

const axiosInstance = axios.create({
  // baseURL: "https://argus-backendzedd.herokuapp.com/api",
  baseURL: 'http://localhost:8000/api',
});

export default axiosInstance;
