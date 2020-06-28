import axios from 'axios';

const api = axios.create({ baseURL: 'http://192.163.5.28:3333' });

export default api;
