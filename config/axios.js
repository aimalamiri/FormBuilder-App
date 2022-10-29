import AxiosInstance from 'axios';

let jwtToken = null;

if (typeof window === "undefined") {
  const { jwt } = JSON.parse(localStorage.getItem('jwt')) || '';
  jwtToken = jwt;
}

export default AxiosInstance.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
  headers: { Authorization: jwtToken }
});
