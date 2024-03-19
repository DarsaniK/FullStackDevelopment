import React, { useState } from 'react';
import '../../assets/css/register.css'; 
import Navbarl from '../navbarl';
import { useNavigate } from 'react-router';
import { useDispatch } from 'react-redux';
import { setUserDetails } from '../../redux/Userslice';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setMobileNumber] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch(); // Initialize useDispatch hook

  const handleRegister = () => {
    // Dispatch action to update Redux store with user details
    dispatch(setUserDetails({ name: username, email, number }));
    
    // Store data in localStorage (if needed)
    localStorage.setItem('signupdata.email', email);
    localStorage.setItem('signupdata.name', username);
    localStorage.setItem('signupdata.mobile', number);
    
    alert("Registered Successfully");
    navigate("/user/home"); // Redirect to home page after registration
  };

  const handleLogin = () => {
    navigate("/user/login");
  };

  return (
    <div className='register'>
        <Navbarl/>
      <div className='register1'>
        <div className="container">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Mobile number"
              value={number}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <span className="loginhere" onClick={handleLogin} style={{cursor:'pointer'}}>Login here</span></p>
        </div>
      </div>
    </div>
  );
}

export default Register;
