import { useState } from 'react';
import axios from '../../config/axios';

export default function Login() {
  const data = {email: '', password: ''};
  const [credentials, setCredentials] = useState(data);

  const submit = (e) => {
    e.preventDefault();
    axios.post('/login', credentials).then((res) => {
      console.log(res.data);
    });
  };

  const inputHandler = (e) => {
    setCredentials({...credentials, [e.target.name]: e.target.value});
  };

  const {email, password} = credentials;

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
