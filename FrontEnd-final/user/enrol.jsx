// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import '../../assets/css/enrol.css';
// import Navbar from '../navbar';
// import Footer from '../footer';

// function EnrollmentForm() {
//   const navigate = useNavigate();
//   const [college, setCollege] = useState('');
//   const [course, setCourse] = useState('');
//   const [duration, setDuration] = useState('');
//   const [fees, setFees] = useState('');
//   const [studentName, setStudentName] = useState('');
//   const [showDialog, setShowDialog] = useState(false);

//   useEffect(() => {
//     const enrollData = JSON.parse(localStorage.getItem('enrollData'));
//     if (enrollData) {
//       const { college, course, duration, fees } = enrollData;
//       setCollege(college);
//       setCourse(course);
//       setDuration(duration);
//       setFees(fees);
//     }
//   }, []);

//   const handleSubmit = (event) => {
//     event.preventDefault();
//     // Submit logic here...
//     // Assuming submission was successful, show dialog and navigate to dashboard
//     setShowDialog(true);
//   };

//   const handleDialogClose = () => {
//     setShowDialog(false);
//     // Navigate to dashboard
//     navigate('/user/student');
//   };

//   return (
//     <div className='enrol-container'>
//       <div className="enrollment-form">
//         <Navbar />
//         <h2>Enrollment Form</h2>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="college">College:</label>
//           <input type="text" id="college" name="college" value={college} readOnly />

//           <label htmlFor="course">Course:</label>
//           <input type="text" id="course" name="course" value={course} readOnly />

//           <label htmlFor="duration">Duration:</label>
//           <input type="text" id="duration" name="duration" value={duration} readOnly />

//           <label htmlFor="fees">Fees:</label>
//           <input type="text" id="fees" name="fees" value={fees} readOnly />

//           <label htmlFor="student-name">Student Name:</label>
//           <input type="text" id="student-name" name="student-name" value={studentName} onChange={(e) => setStudentName(e.target.value)} placeholder="Enter your name" />

//           <button type="submit">Submit</button>
//         </form>
//         <Footer />
//       </div>
//       {showDialog && (
//         <div className="dialog">
//           <p>Application submitted successfully. To view status, go to dashboard.</p>
//           <button onClick={handleDialogClose}>OK</button>
//         </div>
//       )}
//     </div>
//   );
// }

// export default EnrollmentForm;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Navbar from '../navbar';
import Footer from '../footer';
import '../../assets/css/enrol.css';

function EnrollmentForm() {
  const navigate = useNavigate();
  const [college, setCollege] = useState('');
  const [course, setCourse] = useState('');
  const [duration, setDuration] = useState('');
  const [fees, setFees] = useState('');
  const [studentName, setStudentName] = useState('');
  const [role, setRole] = useState('');
  const [mark, setMark] = useState('');
  const [showDialog, setShowDialog] = useState(false);
  const [markInputLabel, setMarkInputLabel] = useState('Cut-off Mark');

  useEffect(() => {
    const enrollData = JSON.parse(localStorage.getItem('enrollData'));
    if (enrollData) {
      const { studentName, college, course, duration, fees, role, mark } = enrollData;
      setCollege(college);
      setCourse(course);
      setDuration(duration);
      setFees(fees);
      setStudentName(studentName);
      setRole(role);
      setMark(mark);
    }
  }, []);

  const handleRoleChange = (e) => {
    const selectedRole = e.target.value;
    setRole(selectedRole);
    if (selectedRole === 'UG') {
      setMarkInputLabel('Cut-off Mark');
    } else if (selectedRole === 'PG') {
      setMarkInputLabel('CGPA');
    }
  };

  const validateForm = () => {
    if (!college || !course || !duration || !fees || !studentName || !role || !mark) {
      return false; // Form is invalid if any field is empty
    }

    if (role === 'UG' && (mark < 50 || mark > 200)) {
      alert('Cut-off Mark must be between 50 and 200.');
      return false; // Invalid if cut-off mark is out of range
    }

    if (role === 'PG' && (mark < 5 || mark > 10)) {
      alert('CGPA must be between 5 and 10.');
      return false; // Invalid if CGPA is out of range
    }

    return true; // Form is valid
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!validateForm()) {
      return; // Prevent form submission if validation fails
    }
  
    const admissionData = {
      studentName,
      college,
      course,
      duration,
      fees,
      role,
      mark,
      applicationStatus: 'Application Submitted', 
    };
  
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.post('http://localhost:8181/college/api/v1/admissions', admissionData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
  
      const { data: { admissionid } } = response;
      localStorage.setItem('enrollData', JSON.stringify({
        studentName,
        college,
        course,
        duration,
        fees,
        role,
        mark,
        admissionid,
      }));
      setShowDialog(true);
    } catch (error) {
      console.error('Error submitting enrollment:', error);
    }
  };

  const handleDialogClose = () => {
    setShowDialog(false);
    navigate('/user/student');
  };

  return (
    <div className="enrol-container">
      <div className="enrollment-form">
        <Navbar />
        <h2>Enrollment Form</h2>
        <form onSubmit={handleSubmit}>
          <label htmlFor="college">College:</label>
          <input type="text" id="college" name="college" value={college} readOnly />

          <label htmlFor="course">Course:</label>
          <input type="text" id="course" name="course" value={course} readOnly />

          <label htmlFor="duration">Duration:</label>
          <input type="text" id="duration" name="duration" value={duration} readOnly />

          <label htmlFor="fees">Fees:</label>
          <input type="text" id="fees" name="fees" value={fees} readOnly />

          <label htmlFor="studentName">Student Name:</label>
          <input
            type="text"
            id="studentName"
            name="studentName"
            value={studentName}
            onChange={(e) => setStudentName(e.target.value)}
            placeholder="Enter your name"
          />

          <label htmlFor="role">Role:</label>
          <select
            id="role"
            name="role"
            value={role}
            onChange={handleRoleChange}
          >
            <option value="">Select Role</option>
            <option value="UG">UG</option>
            <option value="PG">PG</option>
          </select>

          <label htmlFor="mark">{markInputLabel}:</label>
          <input
            type="number" // Changed input type to number for validation
            id="mark"
            name="mark"
            value={mark}
            onChange={(e) => setMark(e.target.value)}
            placeholder={`Enter your ${markInputLabel}`}
          />

          <button type="submit">Submit</button>
        </form>
        <Footer />
      </div>

      {showDialog && (
        <div className="dialog">
         <p>Application submitted successfully. To view status, go to dashboard.</p>
        <button onClick={handleDialogClose}>OK</button>
      </div>
      )}
    </div>
  );
}

export default EnrollmentForm;


