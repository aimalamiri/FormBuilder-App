import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { login as loginApi } from '../../api/auth';
import { login } from '../../redux/reducers/auth/authSlice';
import useAuth from '../../utils/useAuth';

export default function Login() {
  const data = {email: '', password: ''};
  const [credentials, setCredentials] = useState(data);
  const [auth, setIsAuthenticated] = useAuth();
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
          <label htmlFor="email" className="label">
            Email
            <input type="email" name="email" placeholder="Enter your email" className="input" value={email} onChange={inputHandler} />
          </label>
          <label htmlFor="password" className="label my-4">
            Password
            <input type="password" name="password" placeholder="Enter your password" className="input" value={password} onChange={inputHandler} />
          </label>
          <button className="btn btn-success" type="submit">Submit</button>
        </form>
      </div>
    </>
  )
}
