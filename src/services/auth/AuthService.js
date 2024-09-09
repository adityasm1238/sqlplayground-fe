import axios from 'axios';
import { apiConfig } from '../../config/config';

const login = (payload) => axios.post(`${apiConfig.baseUrl}/auth/signin`, payload);
const register = (payload) => axios.post(`${apiConfig.baseUrl}/auth/signup`, payload);
const getUser = (payload) => axios.get(`${apiConfig.baseUrl}/auth/getuser`, payload);

export const authService = {
  login,
  register,
  getUser
};
