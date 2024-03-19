import React, { useState } from 'react';
import '../../assets/css/login.css';
import Navbarl from '../navbarl';
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
    navigate('/user/home'); 
  };

  return (
    <div className='login'>
      <div className='login1'>
        <Navbarl/>
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
      <div className='forgot' onClick={handleforget} style={{cursor:'pointer'}}>Forgot Password?</div>
      <p>Don't have an account? <span className='register-here' onClick={handleregister} style={{cursor:'pointer'}}>Register here</span></p>
    </div>
    </div>
    </div>
  );
}

export default Login;




