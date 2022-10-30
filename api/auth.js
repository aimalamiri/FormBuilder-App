import axios from '../config/axios';

export const login = async (email, password) => {
  return await axios.post('/login', {email, password}).then((res) => {
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('jwt', JSON.stringify(res.data.jwt));
    return res.data;
  }).catch(error => error);
};

export const signup = async ({first_name, last_name, email, password}) => {
  return await axios.post('/signup', {first_name, last_name, email, password}).then((res) => {
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('jwt', JSON.stringify(res.data.jwt));
    return res.data;
  }).catch(error => error);
};
