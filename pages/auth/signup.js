import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../api/auth';
import { login } from '../../redux/reducers/auth/authSlice';
import useAuth from '../../utils/useAuth';

export default function Signup() {
  const data = {first_name: '', last_name: '', email: '', password: ''};
  const [credentials, setCredentials] = useState(data);
  const [, setIsAuthenticated] = useAuth();
  const dispatch = useDispatch();
  const [error, setError] = useState('');

  const {first_name, last_name, email, password} = credentials;

  const submit = (e) => {
    e.preventDefault();
    setError('');
    signup(credentials).then((res) => {
      const {user, jwt} = res;

      if (user && jwt) {
        dispatch(login({user, jwt}));
        setCredentials(data);
        setIsAuthenticated(true);
      } else {
        if (res.response) setError(res.response.data.error);
      }
    });
  };

  const inputHandler = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };


  return (
    <>
      <div className="card w-1/3 mx-auto">
        <h1 className="text-xl text-center mb-9">Signup</h1>
        <form onSubmit={submit}>
          <label htmlFor="first_name" className="label">
            Firstname
            <input type="text" name="first_name" placeholder="Enter your firstname" className="input" value={first_name} onChange={inputHandler} required />
          </label>
          <label htmlFor="last_name" className="label">
            Lastname
            <input type="text" name="last_name" placeholder="Enter your lastname" className="input" value={last_name} onChange={inputHandler} required />
          </label>
          <label htmlFor="email" className="label">
            Email
            <input type="email" name="email" placeholder="Enter your email" className="input" value={email} onChange={inputHandler} required />
          </label>
          <label htmlFor="password" className="label my-4">
            Password
            <input type="password" name="password" placeholder="Enter your password" className="input" value={password} onChange={inputHandler} required />
          </label>
          {error && <div className="py-2 text-white px-4 bg-red-700 my-4">{error}</div>}
          <div className="flex justify-between items-center">
            <button className="btn btn-success" type="submit">Register</button>
            <Link href={'/auth/login'}>Login</Link>
          </div>
        </form>
      </div>
    </>
  )
}
