import React, { useState, useEffect } from 'react';
import '../../assets/css/profileupdate.css';
import Navbar from '../navbar';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

// const ProfileUpdate = () => {
//   const [name, setName] = useState('');
//   const [fatherName, setFatherName] = useState('');
//   const [motherName, setMotherName] = useState('');
//   const [gender, setGender] = useState('');
//   const [nationality, setNationality] = useState('');
//   const [dateOfBirth, setDateOfBirth] = useState('');
//   const [role, setRole] = useState('');
//   const [address, setAddress] = useState('');
//   const [mobileNo, setMobileNo] = useState('');
//   const [markSSLC, setMarkSSLC] = useState('');
//   const [markHSC, setMarkHSC] = useState('');
//   const [markDiploma, setMarkDiploma] = useState('');
//   const navigate = useNavigate();

//   useEffect(() => {
//     fetchDataFromLocalStorage();
//   }, []);

//   const fetchDataFromLocalStorage = () => {
//     const userData = JSON.parse(localStorage.getItem('profileData'));
//     if (userData) {
//       setName(userData.name);
//       setFatherName(userData.fatherName);
//       setMotherName(userData.motherName);
//       setGender(userData.gender);
//       setNationality(userData.nationality);
//       setDateOfBirth(userData.dateOfBirth);
//       setRole(userData.role);
//       setAddress(userData.address);
//       setMobileNo(userData.mobileNo);
//       setMarkSSLC(userData.markSSLC);
//       setMarkHSC(userData.markHSC);
//       setMarkDiploma(userData.markDiploma);
//     }
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();

//     // Check that names are at least 3 characters long
//     if (name.length < 3) {
//       alert("Name must be at least 3 characters long.");
//       return;
//     }
//     if (fatherName.length < 3) {
//       alert("Father's name must be at least 3 characters long.");
//       return;
//     }
//     if (motherName.length < 3) {
//       alert("Mother's name must be at least 3 characters long.");
//       return;
//     }

//     // Check that SSLC marks are between 0 and 500
//     if (markSSLC < 0 || markSSLC > 500) {
//       alert("SSLC marks must be between 0 and 500.");
//       return;
//     }

//     // Check that HSC marks are between 0 and 600
//     if (markHSC < 0 || markHSC > 600) {
//       alert("HSC marks must be between 0 and 600.");
//       return;
//     }

//     // Check that Diploma percentage is between 0 and 100
//     if (markDiploma < 0 || markDiploma > 100) {
//       alert("Diploma percentage must be between 0 and 100.");
//       return;
//     }

//     // Check that either HSC or Diploma is filled, but not both
//     // if (markHSC && markDiploma) {
//     //   alert("Either HSC or Diploma should be filled, but not both.");
//     //   return;
//     // }

//     // Validate that all mandatory fields are filled
//     if (
//       !name ||
//       !fatherName ||
//       !motherName ||
//       !gender ||
//       !nationality ||
//       !dateOfBirth ||
//       !role ||
//       !address ||
//       !mobileNo ||
//       !markSSLC
//     ) {
//       alert("Please fill in all required fields.");
//       return;
//     }

//     // Save form data to local storage
//     const formData = {
//       name,
//       fatherName,
//       motherName,
//       gender,
//       nationality,
//       dateOfBirth,
//       role,
//       address,
//       mobileNo,
//       markSSLC,
//       markHSC,
//       markDiploma,
//     };

//     localStorage.setItem('profileData', JSON.stringify(formData));
//     alert('Profile Updated Successfully!');
//     navigate("/user/student");
//   };

//   return (
//     <div className="profile-update-container">
//       <Navbar />
//       <h2>ADD Profile</h2>
//       <form onSubmit={handleSubmit}>
//         <label>
//           Name:
//           <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
//         </label>
//         <label>
//           Father's Name:
//           <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
//         </label>
//         <label>
//           Mother's Name:
//           <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
//         </label>
//         <label>
//           Gender:
//           <select value={gender} onChange={(e) => setGender(e.target.value)}>
//             <option value="">Select Gender</option>
//             <option value="Male">Male</option>
//             <option value="Female">Female</option>
//           </select>
//         </label>
//         <label>
//           Nationality:
//           <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
//             <option value="">Select Nationality</option>
//             <option value="Indian">Indian</option>
//             <option value="Other">Other</option>
//           </select>
//         </label>
//         <label>
//           Date of Birth:
//           <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
//         </label>
//         <label>
//           Degree:
//           <select value={role} onChange={(e) => setRole(e.target.value)}>
//             <option value="UG">UG</option>
//             <option value="PG">PG</option>
//           </select>
//         </label>
//         <label>
//           Address:
//           <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
//         </label>
//         <label>
//           Mobile Number:
//           <input type="number" value={mobileNo} onChange={(e) => setMobileNo(e.target.value)} />
//         </label>
//         <label>
//           Mark SSLC:
//           <input type="number" value={markSSLC} onChange={(e) => setMarkSSLC(e.target.value)} />
//         </label>
//         <label>
//           Mark HSC (Optional):
//           <input type="number" value={markHSC} onChange={(e) => setMarkHSC(e.target.value)} />
//         </label>
//         <label>
//           Mark Diploma (Optional):
//           <input type="number" value={markDiploma} onChange={(e) => setMarkDiploma(e.target.value)} />
//         </label>
//         <button type="submit">Add</button>
//       </form>
//       <Footer />
//     </div>
//   );
// };

// export default ProfileUpdate;


function ProfileUpdate({ signUpData }) {
  const [name, setName] = useState('');
  const [fatherName, setFatherName] = useState('');
  const [motherName, setMotherName] = useState('');
  const [gender, setGender] = useState('');
  const [nationality, setNationality] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [srole, setSrole] = useState('');
  const [address, setAddress] = useState('');
  const [number, setMobileNo] = useState('');
  const [markSSLC, setMarkSSLC] = useState('');
  const [markHSC, setMarkHSC] = useState('');
  const [markDiploma, setMarkDiploma] = useState('');
  const [cutOffMark, setCutOffMark] = useState('');
  const [cgpa, setCgpa] = useState('');

  const validateInputs = () => {
    if (name.length < 3 || fatherName.length < 3 || motherName.length < 3) {
      alert('Name, Father Name, and Mother Name must be longer than 2 letters.');
      return false;
    }

    if (number.length !== 10) {
      alert('Mobile number must be 10 digits.');
      return false;
    }

    const dob = new Date(dateOfBirth);
    if (dob.getFullYear() < 1970 || dob.getFullYear() > 2006) {
      alert('Date of Birth must be between 1970 and 2006.');
      return false;
    }

    if (markSSLC < 100 || markSSLC > 500) {
      alert('SSLC mark must be between 100 and 500.');
      return false;
    }

    if (markHSC < 0 || markHSC > 600) {
      alert('HSC mark must be between 0 and 600.');
      return false;
    }

    if (srole === 'UG' && (cutOffMark < 10 || cutOffMark > 200)) {
      alert('Cut-off mark for UG should be between 10 and 200.');
      return false;
    }

    if (srole === 'PG' && (cgpa < 0 || cgpa > 10)) {
      alert('CGPA for PG should be between 0 and 10.');
      return false;
    }

    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!validateInputs()) {
      return;
    }

    try {
      const token = localStorage.getItem('accessToken');

      const formData = {
        name,
        fatherName,
        motherName,
        gender,
        nationality,
        dateOfBirth,
        srole,
        address,
        number,
        markSSLC,
        markHSC,
        markDiploma,
        cutOffMark,
        cgpa,
      };

      const response = await axios.post('http://localhost:8181/college/api/v1/students', formData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      localStorage.setItem('profileData', JSON.stringify({ name }));

      console.log('Profile updated successfully:', response.data);
      alert('Profile Updated Successfully!');
    } catch (error) {
      console.error('Error updating profile:', error);
      alert('An error occurred while updating the profile. Please try again.');
    }
  };

  return (
    <div className="profile-update-container">
      {/* <Navbarl /> */}
      <h2>Update Profile</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Name:
          <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </label>
        <label>
          Father's Name:
          <input type="text" value={fatherName} onChange={(e) => setFatherName(e.target.value)} />
        </label>
        <label>
          Mother's Name:
          <input type="text" value={motherName} onChange={(e) => setMotherName(e.target.value)} />
        </label>
        <label>
          Gender:
          <select value={gender} onChange={(e) => setGender(e.target.value)}>
            <option value="">Select Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>
          </select>
        </label>
        <label>
          Nationality:
          <select value={nationality} onChange={(e) => setNationality(e.target.value)}>
            <option value="">Select Nationality</option>
            <option value="Indian">Indian</option>
            <option value="American">American</option>
            <option value="Canadian">Canadian</option>
          </select>
        </label>
        <label>
          Date of Birth:
          <input type="date" value={dateOfBirth} onChange={(e) => setDateOfBirth(e.target.value)} />
        </label>
        <label>
          Degree:
          <select value={srole} onChange={(e) => setSrole(e.target.value)}>
            <option value="">Select Degree</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>
        </label>
        {srole === 'UG' && (
          <label>
            Cut-off Mark:
            <input type="number" value={cutOffMark} onChange={(e) => setCutOffMark(e.target.value)} />
          </label>
        )}
        {srole === 'PG' && (
          <label>
            CGPA:
            <input type="number" value={cgpa} onChange={(e) => setCgpa(e.target.value)} />
          </label>
        )}
        <label>
          Address:
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
        </label>
        <label>
          Mobile Number:
          <input type="number" value={number} onChange={(e) => setMobileNo(e.target.value)} />
        </label>
        <label>
          Mark SSLC:
          <input type="number" value={markSSLC} onChange={(e) => setMarkSSLC(e.target.value)} />
        </label>
        <label>
          Mark HSC (Optional):
          <input type="number" value={markHSC} onChange={(e) => setMarkHSC(e.target.value)} />
        </label>
        <label>
          Mark Diploma (Optional):
          <input type="number" value={markDiploma} onChange={(e) => setMarkDiploma(e.target.value)} />
        </label>
        <button type="submit">Update</button>
      </form>
    </div>
  );
}

export default ProfileUpdate;
