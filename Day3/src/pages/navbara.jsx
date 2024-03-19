import React from 'react';
import '../assets/css/navbarl.css';
import { useNavigate } from 'react-router';
import logiImage from '../assets/images/2-removebg-preview.png';

const LogoutModal = ({ handleConfirmLogout, handleCancelLogout }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <p>Are you sure you want to logout?</p>
        <div className="modal-buttons">
          <button onClick={handleConfirmLogout}>Yes</button>
          <button onClick={handleCancelLogout}>Cancel</button>
        </div>
      </div>
    </div>
  );
};
function NavbarA() {
    const navigate=useNavigate();
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
        <button className="btnl" onClick={handlelogin}>User</button>
      </div>
    </nav>
  );
};

export default NavbarA;