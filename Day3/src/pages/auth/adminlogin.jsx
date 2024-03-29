import React, { useState } from 'react';
import '../../assets/css/login.css';
import NavbarA from '../navbara';
import { useNavigate } from 'react-router';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();
  
  const handleLogin = () => {
    e.preventDefault();
  };
  const handleregister = () => {
    navigate('/user/register'); 
  };
  const handleforget = () => {
    navigate('/user/forgetpassword'); 
  };
  const handlehome = () => {
    navigate('/admin/home'); 
  };

  return (
    <div className='login'>
      <div className='login1'>
        <NavbarA/>
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleLogin}>
        <input
          type="text"
          placeholder="Username or Email"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onClick={handlehome}>Login</button>
      </form>
    </div>
    </div>
    </div>
  );
}

export default Login;




