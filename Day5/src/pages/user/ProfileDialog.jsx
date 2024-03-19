// import React, { useState, useEffect } from 'react';
// import '../../assets/css/navbar.css';
// import amritaImage from '../../assets/images/profile.png';
// import { useNavigate } from 'react-router';

// const ProfileDialog = ({ onClose }) => {
//   const [signupData, setSignupData] = useState({
//     name: '',
//     email: '',
//     number: ''
//   });
//   const [profileData, setProfileData] = useState(null);

//   useEffect(() => {
//     const userData = JSON.parse(localStorage.getItem('profileData'));
//     if (userData) {
//       setProfileData(userData);
//     }

//     const storedSignupData = {
//       name: localStorage.getItem('signupdata.name'),
//       email: localStorage.getItem('signupdata.email'),
//       number: localStorage.getItem('signupdata.mobile')
//     };
//     setSignupData(storedSignupData);
//   }, []);

//   const navigate = useNavigate();

//   const handleUpdate = () => {
//     navigate("/user/profileupdate");
//   };

//   return (
//     <div className="profile-modal">
//       <div className="profile-modal-content">
//         <h2>Profile</h2>
//         <div className="profile-modal-container">
//           <img src={amritaImage} alt="Image 6" />
//         </div>
//         <p><strong>Name:</strong> {signupData.name}</p>
//         <p><strong>Email:</strong> {signupData.email}</p>
//         <p><strong>Mobile Number:</strong> {signupData.number}</p>
//         {profileData && (
//           <div>
//               <p><strong>Father's Name:</strong> {profileData.fatherName}</p>
//               <p><strong>Mother's Name:</strong> {profileData.motherName}</p>
//               <p><strong>Gender:</strong> {profileData.gender}</p>
//               <p><strong>Nationality:</strong> {profileData.nationality}</p>
//               <p><strong>Date of Birth:</strong> {profileData.dateOfBirth}</p>
//               <p><strong>Degree:</strong> {profileData.role}</p>
//               <p><strong>Address:</strong> {profileData.address}</p>
//               <p><strong>Mark SSLC:</strong> {profileData.markSSLC}</p>
//               <p><strong>Mark HSC:</strong> {profileData.markHSC}</p>
//               <p><strong>Mark Diploma:</strong> {profileData.markDiploma}</p>
//           </div>
//         )}
//         <div className='Profile-Model-buttoon'>
//         <button className="close" onClick={onClose}>&times; close</button>
//         <button onClick={handleUpdate}>Update</button>
//       </div></div>
//     </div>
//   );
// };

// // export default ProfileDialog;

// // ProfileDialog.jsx

// // import React from 'react';
// // import { useSelector } from 'react-redux';
// // import '../../assets/css/navbar.css';
// // import amritaImage from '../../assets/images/profile.png';
// // import { useNavigate } from 'react-router';

// // const ProfileDialog = ({ onClose }) => {
// //   const signupData = useSelector(state => state.signupData); // Retrieve signup data from Redux store
// //   const navigate = useNavigate();

// //   const handleUpdate = () => {
// //     navigate("/user/profileupdate");
// //   };

// //   return (
// //     <div className="profile-modal">
// //       <div className="profile-modal-content">
// //         <h2>Profile</h2>
// //         <div className="profile-modal-container">
// //           <img src={amritaImage} alt="Image 6" />
// //         </div>
// //         <p><strong>Name:</strong> {signupData.name}</p>
// //         <p><strong>Email:</strong> {signupData.email}</p>
// //         <p><strong>Mobile Number:</strong> {signupData.number}</p>
// //         <button className="close" onClick={onClose}>&times; close</button>
// //         <button onClick={handleUpdate}>Update</button>
// //       </div>
// //     </div>
// //   );
// // };

// export default ProfileDialog;

import React from 'react';
import { useSelector } from 'react-redux';
import '../../assets/css/navbar.css';
import amritaImage from '../../assets/images/profile.png';
import { useNavigate } from 'react-router';

const ProfileDialog = ({ onClose }) => {
  // Retrieve user details from Redux state
  const { name, email, number } = useSelector(state => state.auth);
  const navigate = useNavigate();

  const handleUpdate = () => {
    navigate("/profileupdate");
  };

  return (
    <div className="profile-modal">
      <div className="profile-modal-content">
        <h2>Profile</h2>
        <div className="profile-model-container">
          <img src={amritaImage} alt="Image 6" />
        </div>
        <p><strong>Name:</strong> {name}</p>
        <p><strong>Email:</strong> {email}</p>
        <p><strong>Mobile Number:</strong> {number}</p>
        {/* You can add more profile information here */}
        <button className="close" onClick={onClose}>&times; close</button>
        <button onClick={handleUpdate}>Update</button>
      </div>
    </div>
  );
};

export default ProfileDialog;