import AxiosInstance from 'axios';

const ISSERVER = typeof window === "undefined";

let jwtToken = null;

if(!ISSERVER) {
  const { jwt } = JSON.parse(localStorage.getItem('jwt')) || '';
  jwtToken = jwt;
}

export default AxiosInstance.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { Authorization: jwtToken }
});
