import React, { useState } from 'react';
import '../assets/css/navbar.css';
import logoImage from '../assets/images/1-removebg-preview .png';
import { useNavigate } from 'react-router';
import { CgProfile } from "react-icons/cg";
import ProfileDialog from '../pages/user/ProfileDialog';

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

const Navbar = () => {
  const navigate = useNavigate();
  const [dropdownVisible, setDropdownVisible] = useState(false);
  const [showProfileModal, setShowProfileModal] = useState(false);
  const [showLogoutModal, setShowLogoutModal] = useState(false);
  const [signUpData, setSignUpData] = useState(JSON.parse(localStorage.getItem('signupData')) || {});

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  const handleDropdownItemClick = (action) => {
    switch (action) {
      case 'profile':
        setShowProfileModal(true);
        break;
      case 'status':
        break;
      case 'logout':
        setShowLogoutModal(true);
        break;
      default:
        break;
    }
  };

  const handleLogout = () => {
    setShowLogoutModal(false);
    localStorage.clear();
    navigate("/user/login");
  };

  const handleCancelLogout = () => {
    setShowLogoutModal(false);
  };

  const handleCloseProfileDialog = () => {
    setShowProfileModal(false);
  };

  const handleUpdateProfile = () => {
    navigate("/user/update");
  };
  const handleHome = () => {
    navigate("/user/home");
  };
  const handleStudent = () => {
    navigate("/user/student");
  };
  const handleInstitute = () => {
    navigate("/user/institutes");
  };
  const handleCourse = () => {
    navigate("/user/courses");
  };

  return (
    <nav className="navbar">
      <div className="navbar-left">
        <img src={logoImage} alt="Image" />
        <p><b>.  MSD ONLINE ADMISSIONS</b></p>
      </div>
      <div className="navbar-right">
        <button className="btnh" onClick={handleHome}>Home</button>
        <button className="btnh" onClick={handleStudent}>Student</button>
        <button className="btnh" onClick={handleInstitute}>Institutions</button>
        <button className="btnh" onClick={handleCourse}>Courses</button>
        <div className="btn1" onClick={toggleDropdown}>
          <CgProfile />
          {dropdownVisible && (
            <div className="dropdown-menu">
              <button className="dropdown-item" onClick={() => handleDropdownItemClick('profile')}>Profile</button>
              <button className="dropdown-item" onClick={() => handleDropdownItemClick('logout')}>Logout</button>
            </div>
          )}
        </div>
      </div>
      {showProfileModal && <ProfileDialog signUpData={signUpData} onClose={handleCloseProfileDialog} onUpdate={handleUpdateProfile} />}
      {showLogoutModal && <LogoutModal handleConfirmLogout={handleLogout} handleCancelLogout={handleCancelLogout} />}
    </nav>
  );
};

export default Navbar;