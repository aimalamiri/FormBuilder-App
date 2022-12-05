import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signup } from '../../api/auth';
import { login } from '../../redux/reducers/auth/authSlice';
import useAuth from '../../utils/useAuth';
import Input from '../../components/application/Input';

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
          <Input name="last_name" value={last_name} onChange={inputHandler} placeholder="Enter your lastname" className="mb-4" label="Firstname" required={true} />
          <Input name="first_name" value={first_name} onChange={inputHandler} placeholder="Enter your firstname" className="mb-4" label="Lastname" required={true} />
          <Input type="email" name="email" value={email} onChange={inputHandler} placeholder="Enter your email" className="mb-4" required={true} />
          <Input type="password" name="password" value={password} onChange={inputHandler} placeholder="Enter your password" className="mb-4" required={true} />
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
