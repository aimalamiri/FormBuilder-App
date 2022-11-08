import Link from 'next/link';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginApi } from '../../api/auth';
import Input from '../../components/application/input';
import { login } from '../../redux/reducers/auth/authSlice';
import useAuth from '../../utils/useAuth';

export default function Login() {
  const data = {email: '', password: ''};
  const [credentials, setCredentials] = useState(data);
  const [, setIsAuthenticated] = useAuth();
  const dispatch = useDispatch();

  const {email, password} = credentials;

  const submit = (e) => {
    e.preventDefault();
    loginApi(email, password).then((res) => {
      const {user, jwt} = res;
      dispatch(login({user, jwt}));
      setIsAuthenticated(true);
    });
    setCredentials(data);
  };

  const inputHandler = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };


  return (
    <>
      <div className="card w-1/3 mx-auto">
        <h1 className="text-xl text-center mb-9">Login</h1>
        <form onSubmit={submit}>
          <Input type="email" name="email" value={email} onChange={inputHandler} placeholder="Enter your email" className="mb-4" required={true} />
          <Input type="password" name="password" value={password} onChange={inputHandler} placeholder="Enter your password" className="mb-4" required={true} />
          <div className="flex justify-between items-center">
            <button className="btn btn-success" type="submit">Login</button>
            <Link href={'/auth/signup'}>Signup</Link>
          </div>
        </form>
      </div>
    </>
  )
}
