import axios from 'axios';

export default axios.create({
  baseURL: 'https://connections-api.herokuapp.com',
});
