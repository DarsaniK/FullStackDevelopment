import React from 'react';
import '../../assets/css/admissiondialog.css';

const AdmissionDetailsDialog = ({ admissionDetails, onClose }) => {
  // Check if admissionDetails is defined
  if (!admissionDetails) {
    return null; 
  }
  const { college, course, duration, fees,status='Approved' } = admissionDetails;

  return (
    <div>
      <div className="overlay"></div>
      <div className="admission-dialog">
        <div className="dialog-content">
          <h2>Admission Details</h2>
          <p>College: {college !== null ? college : 'n/a'}</p>
          <p>Course: {course !== null ? course : 'n/a'}</p>
          <p>Duration: {duration !== null ? duration : 'n/a'}</p>
          <p>Fees: {fees !== null ? fees : 'n/a'}</p>
          <p>Status: {status !== null ? status : 'n/a'}</p>
          <button onClick={onClose}>Close</button>
        </div>
      </div>
    </div>
  );
};

export default AdmissionDetailsDialog;
