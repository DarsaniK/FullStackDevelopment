import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/admindash.css';

const AdminDashboard = () => {
  const [studentData, setStudentData] = useState([]);
  const [errorMessage, setErrorMessage] = useState(null);
  const [editMode, setEditMode] = useState(null);
  const [editValues, setEditValues] = useState({});

  useEffect(() => {
    const fetchStudentData = async () => {
      try {
        const token = localStorage.getItem('accessToken');
        const response = await axios.get('http://localhost:8181/college/api/v1/admissions', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = response.data;

        const sortedData = data.sort((a, b) => {
          if (a.role === b.role) {
            return b.mark - a.mark; // Sort by mark in descending order
          } else {
            return a.role === 'UG' ? -1 : 1; // UG comes before PG
          }
        });

        setStudentData(sortedData);
      } catch (error) {
        console.error('Error fetching student data:', error);
        setErrorMessage('Unable to fetch student data. Please try again later.');
      }
    };

    fetchStudentData();
  }, []);

  const handleEdit = (admissionid) => {
    setEditMode(admissionid); // Switch to edit mode
    const currentStudent = studentData.find((student) => student.admissionid === admissionid);
    if (currentStudent) {
      setEditValues({ ...currentStudent }); // Deep clone to avoid references
    }
  };

  const handleChange = (field, value) => {
    setEditValues((prev) => ({
      ...prev,
      [field]: value, // Ensure the correct field is updated
    }));
  };

  const handleUpdate = async (admissionid) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.put(
        `http://localhost:8181/college/api/v1/admissions/${admissionid}`,
        { ...editValues },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      setStudentData((prevData) =>
        prevData.map((student) =>
          student.admissionid === admissionid ? { ...editValues, admissionid } : student
        )
      );

      setEditMode(null); // Exit edit mode after update
    } catch (error) {
      console.error('Error updating admission:', error);
      setErrorMessage('Error updating data. Please try again later.');
    }
  };

  return (
    <div className="admin-dashboard">
      <AdminNavbar />
      <h2>Student Approval Dashboard</h2>
      {errorMessage && <p className="error-message">{errorMessage}</p>}
      <table className="student-table">
        <thead>
          <tr>
            <th>Student Name</th>
            <th>College</th>
            <th>Course</th>
            <th>Fees</th>
            <th>Role</th>
            <th>Mark</th>
            <th>Application Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {studentData.map((student) => (
            <tr key={student.admissionid}>
              <td>{student.studentName}</td>
              <td>{student.college}</td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.role}</td>
              <td>{student.mark}</td>
              <td>
                {editMode === student.admissionid ? (
                  <select
                    value={editValues.applicationStatus}
                    onChange={(e) => handleChange('applicationStatus', e.target.value)}
                  >
                    <option value="Application Submitted">Application Submitted</option>
                    <option value="Approved">Approved</option>
                    <option value="Rejected">Rejected</option>
                  </select>
                ) : (
                  student.applicationStatus
                )}
              </td>
              <td>
                {editMode === student.admissionid ? (
                  <button onClick={() => handleUpdate(student.admissionid)}>Update</button>
                ) : (
                  <button onClick={() => handleEdit(student.admissionid)}>Edit</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AdminDashboard;
