import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/auth/authSlice';
import openRoutes from '../config/openRoutes';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const userData = JSON.parse(localStorage.getItem('user')) || {};
      const cookie = document.cookie.split('=');
      const jwt = '';
      if (cookie[cookie.indexOf('Authorization')] && cookie[cookie.indexOf('Authroization') + 1]) {
        jwt = cookie[cookie.indexOf('Authorization') + 1];
      }

      if (jwt && userData) {
        if (router.pathname === '/auth/login' || router.pathname === '/auth/signup') {
          router.push('/');
        }

        setIsAuthenticated(true);
        dispatch(login({ user: userData, jwt }));
      } else {
        if (openRoutes.indexOf(router.pathname) === -1) {
          router.push('/auth/login');
        }
      }
    }
  }, [isAuthenticated]);

  return [auth, setIsAuthenticated];
};

export default useAuth;
