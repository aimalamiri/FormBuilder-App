import { useRouter } from 'next/router';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/reducers/auth/authSlice';

export default function Logout() {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    if (typeof window !== "undefined") {
      document.cookie = `authorization=; path=/;`;
      localStorage.removeItem('user');
      router.push('/');
      dispatch(login({user: {}, jwt: ''}));
    }
  }, []);

  return (
    <div>
      <h1>Logout</h1>
    </div>
  );
}
