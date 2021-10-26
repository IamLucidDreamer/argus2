const { default: axios } = require('axios');

const axiosInstance = axios.create({
  baseURL: 'http://ec2-52-66-157-112.ap-south-1.compute.amazonaws.com:8000/api',
});

export default axiosInstance;
