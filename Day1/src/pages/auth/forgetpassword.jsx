import React, { useState } from 'react';
import '../../assets/css/forgetpassword.css'; 
import { useNavigate } from 'react-router';

function Forgetpassword() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate=useNavigate();

  const handleForgotPassword = () => {
    alert('Password reset successful!');
    setEmail('');
    setPassword('');
    // Logic for handling forgot password
  };
  const handlelogin = () => {
    navigate('/user/login'); 
  };

  return (
    <div className='forget'>
      <div className='forget1'>
    <div className="container">
      <h2>Forgot Password</h2>
      <form onSubmit={handleForgotPassword}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="New Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" onSubmit={handleForgotPassword} onClick={handlelogin}>Reset Password</button>
      </form>
      <p>Remember your password? <span className='login-here' onClick={handlelogin} style={{cursor:'pointer'}}>Login here</span></p>
    </div>
    </div>
    </div>
  );
}

export default Forgetpassword;
