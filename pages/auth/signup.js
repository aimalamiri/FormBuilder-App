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

  const {first_name, last_name, email, password} = credentials;

  const submit = (e) => {
    e.preventDefault();
    signup(credentials).then((res) => {
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
        <h1 className="text-xl text-center mb-9">Signup</h1>
        <form onSubmit={submit}>
          <label htmlFor="first_name" className="label">
            Firstname
            <input type="text" name="first_name" placeholder="Enter your firstname" className="input" value={first_name} onChange={inputHandler} />
          </label>
          <label htmlFor="last_name" className="label">
            Lastname
            <input type="text" name="last_name" placeholder="Enter your lastname" className="input" value={last_name} onChange={inputHandler} />
          </label>
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
