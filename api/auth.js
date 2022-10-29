import axios from '../config/axios';

export const login = async (email, password) => {
  return await axios.post('/login', {email, password}).then((res) => {
    console.log(res.data);
    localStorage.setItem('user', JSON.stringify(res.data.user));
    localStorage.setItem('jwt', JSON.stringify(res.data.jwt));
  }).catch(error => error);
};
