const { default: axios } = require("axios");

const axiosInstance = axios.create({
<<<<<<< HEAD
  // baseURL: 'https://argus-backendzedd.herokuapp.com/api',
  baseURL: 'http://localhost:8000/api',
=======
  baseURL: "https://argus-backendzedd.herokuapp.com/api",
>>>>>>> 143211b2c9c1d157db92a2a1467b8dd2ab20c8cd
});

export default axiosInstance;
