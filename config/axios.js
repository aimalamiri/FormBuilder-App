import AxiosInstance from 'axios';

const ISSERVER = typeof window === "undefined";

let jwtToken = null;

if(!ISSERVER) {
  const { jwt } = JSON.parse(localStorage.getItem('jwt')) || '';
  jwtToken = jwt;
}


const axios = AxiosInstance.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: { Authorization: jwtToken }
});

export default axios;
