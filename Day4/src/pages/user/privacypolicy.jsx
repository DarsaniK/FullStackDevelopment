import React, { useState } from 'react';
import '../../assets/css/privacypolicy.css';

function PrivacyPolicy() {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };

  const closeModal = () => {
    setModalOpen(false);
    document.body.style.backgroundColor = 'white';
  };

  return (
    <>
      <button className="privacy-policy-btn" onClick={openModal}>Privacy Policy</button>
      {modalOpen && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={closeModal}>&times;</span>
            <h2>Privacy Policy</h2>
            <p>Your privacy policy content goes here...</p>
          </div>
        </div>
      )}
    </>
  );
}

export default PrivacyPolicy;
