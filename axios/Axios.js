import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://booking-app-em2n.onrender.com'
  });

  export default instance