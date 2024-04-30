import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/AdmissionDetails.css'; // Update with appropriate CSS

const AdmissionDetailsPage = () => {
  const [admissionData, setAdmissionData] = useState([]);
  const [editMode, setEditMode] = useState({});

  useEffect(() => {
    fetchAdmissions();
  }, []);

  const fetchAdmissions = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8181/admissions/api/v1/admissions', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAdmissionData(response.data);
    } catch (error) {
      console.error('Error fetching admissions:', error);
    }
  };

  const handleChange = (e, admissionId) => {
    const { name, value } = e.target;
    setAdmissionData(
      admissionData.map((admission) => {
        if (admission.admissionId === admissionId) {
          return { ...admission, [name]: value };
        }
        return admission;
      })
    );
  };

  const handleUpdate = async (admissionId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const admissionToUpdate = admissionData.find((admission) => admission.admissionId === admissionId);
      await axios.put(`http://localhost:8181/admissions/api/v1/admissions/${admissionId}`, admissionToUpdate, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
    } catch (error) {
      console.error('Error updating admission:', error);
    }
  };

  const toggleEditMode = (admissionId) => {
    setEditMode({
      ...editMode,
      [admissionId]: !editMode[admissionId],
    });
  };

  return (
    <div className="admission-details-page-container">
      <AdminNavbar />
      <div className="admission-details-table">
        <h2>Admission Details</h2>
        <table>
          <thead>
            <tr>
              <th>Student Name</th>
              <th>College Name</th>
              <th>Course Name</th>
              <th>Duration</th>
              <th>Fees</th>
              <th>Application Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(admissionData) &&
              admissionData.map((admission) => (
                <tr key={admission.admissionId}>
                  <td>{admission.studentName}</td>
                  <td>{admission.collegeName}</td>
                  <td>{admission.courseName}</td>
                  <td>{admission.duration}</td>
                  <td>{admission.fees}</td>
                  <td>
                    {editMode[admission.admissionId] ? (
                      <select
                        name="applicationStatus"
                        value={admission.applicationStatus}
                        onChange={(e) => handleChange(e, admission.admissionId)}
                      >
                        <option value="Application Submitted">Application Submitted</option>
                        <option value="Approved">Approved</option>
                        <option value="Rejected">Rejected</option>
                      </select>
                    ) : (
                      admission.applicationStatus
                    )}
                  </td>
                  <td>
                    <button
                      onClick={() => {
                        if (editMode[admission.admissionId]) {
                          handleUpdate(admission.admissionId);
                        }
                        toggleEditMode(admission.admissionId);
                      }}
                    >
                      {editMode[admission.admissionId] ? "Update" : "Edit"}
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdmissionDetailsPage;
