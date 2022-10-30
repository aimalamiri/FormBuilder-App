import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { login } from '../redux/reducers/auth/authSlice';

const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const auth = useSelector(state => state.auth);
  const dispatch = useDispatch();

  const router = useRouter();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const jwt = JSON.parse(localStorage.getItem('jwt')) || '';
      const userData = JSON.parse(localStorage.getItem('user')) || {};

      if (jwt && userData) {
        if (router.pathname === '/auth/login') {
          router.push('/');
        }

        setIsAuthenticated(true);
        dispatch(login({user: userData, jwt}));
      } else {
        if (router.pathname !== '/auth/login') {
          router.push('/auth/login');
        }
      }
    }
  }, [isAuthenticated]);

  return [auth, setIsAuthenticated];
}

export default useAuth;
