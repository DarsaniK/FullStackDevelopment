import React from 'react';
import '../assets/css/navbarl.css';
import { useNavigate } from 'react-router';
import logiImage from '../assets/images/2-removebg-preview.png';

function Navbarl() {
    const navigate=useNavigate();
    const handleregister = () => {
        navigate('/user/register'); 
      };
      const handlelogin = () => {
        navigate('/user/login'); 
      };
      const handleadmin = () => {
        navigate('/admin/login'); 
      };
  return (
    <nav className="navbarl">
      <div className="navbarl-left">
        <img src={logiImage} alt="Image" />
      </div>
      <div className="navbarl-right">
        <button className="btnl" onClick={handleadmin}>Admin</button>
        <button className="btnl" onClick={handlelogin}>Login</button>
        <button className="btnl" onClick={handleregister}>Register</button>
      </div>
    </nav>
  );
};

export default Navbarl;