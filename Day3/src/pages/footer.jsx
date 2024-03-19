import React,{useState} from 'react';
import '../assets/css/footer.css';
import { useNavigate } from 'react-router';

const PrivacyPolicy = ({ closeModal }) => (
  <div className='privacy-overlay'>
  <div className="privacy-modal">
    <div className="privacy-modal-content">
      <span className="privacy-close" onClick={closeModal}>&times;</span>
      <h2>Privacy Policy</h2>
      <p>At our Online College Admission Portal, we are committed to protecting the privacy and security of your personal information. This Privacy Policy explains how we collect, use, and disclose the information you provide to us when using our website.

When you visit our website or use our services, we may collect certain information about you, such as your name, contact details, academic history, and payment information. This information is necessary for us to process your admission applications, facilitate payments, and improve the overall user experience.

We use cookies and similar technologies to enhance your browsing experience and personalize the content displayed on our website. These cookies may collect data such as your IP address, browser type, and pages visited, which helps us analyze traffic patterns and optimize our services.

Your personal information may be shared with colleges and educational institutions to which you apply for admission through our platform. However, we will only disclose the information necessary for the application process, and we require these institutions to maintain the confidentiality and security of your data.

We may also share your information with trusted third-party service providers who assist us in operating our website, processing payments, or conducting data analysis.<br/><br/> These providers are contractually obligated to protect your information and use it only for the purposes specified by us.

We take reasonable measures to safeguard your personal information from unauthorized access, disclosure, or alteration. However, no method of transmission over the internet or electronic storage is 100% secure, and we cannot guarantee absolute security.

By using our website, you consent to the collection and processing of your personal information as described in this Privacy Policy. If you have any questions or concerns about how we handle your data, please contact us for assistance.
We reserve the right to update this Privacy Policy periodically to reflect changes in our practices or legal requirements. We will notify you of any material changes by posting the updated policy on our website. Your continued use of our services after any modifications indicates your acceptance of the revised Privacy Policy.

Thank you for entrusting us with your personal information. We are committed to maintaining your privacy and providing a secure platform for your college admission needs.

</p>
    </div>
  </div>
  </div>
);
const Termsandconditions = ({ closeModal }) => (
  <div className='terms-overlay'>
  <div className="terms-modal">
    <div className="terms-modal-content">
      <span className="terms-close" onClick={closeModal}>&times;</span>
      <h2>Terms and Conditions</h2>
      <p>Welcome to our Online College Admission Portal! By accessing or using our website, you agree to comply with and be bound by the following terms and conditions:

Our website provides a platform for students to explore various colleges and courses, apply for admission, and conveniently pay fees online. By using our services, you acknowledge that the information provided by you is accurate and complete. Any false or misleading information may result in the rejection of your application.

You understand that the availability of courses and admission criteria may vary between colleges, and we do not guarantee admission to any specific institution or program. We strive to provide accurate and up-to-date information, but we cannot be held responsible for any changes made by colleges regarding their courses, fees, or admission procedures.

Payment for admission fees is processed securely through our platform. However, we are not responsible for any errors or issues that may arise during the payment process, such as transaction failures or unauthorized charges. Please ensure that you carefully review all payment details before proceeding with the transaction.
<br/><br/>
We respect the privacy of our users and are committed to protecting their personal information. Please refer to our Privacy Policy for details on how we collect, use, and disclose your data. By using our website, you consent to the collection and processing of your information as described in the Privacy Policy.

You agree to use our website only for lawful purposes and in accordance with these terms and conditions. Any misuse of our platform, including but not limited to unauthorized access, tampering with data, or interference with the operation of the website, may result in legal action.

We reserve the right to modify or terminate our services at any time without prior notice. We may also update these terms and conditions periodically, and it is your responsibility to review them regularly for any changes. Your continued use of our website after any modifications indicates your acceptance of the updated terms.
If you have any questions or concerns regarding these terms and conditions, please contact us for assistance. Thank you for choosing our Online College Admission Portal, and we wish you the best of luck in your educational journey!
</p>
    </div>
  </div>
  </div>
);

const Footer = () => {
  const [privacyModalOpen, setPrivacyModalOpen] = useState(false);
  const [termsModalOpen, setTermsModalOpen] = useState(false);

  const openPrivacyModal = () => {
    setPrivacyModalOpen(true);
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };
  const navigate=useNavigate();
  const handlefaq=()=>{
    navigate("/user/faq");
  }

  const openTermsModal = () => {
    setTermsModalOpen(true);
    document.body.style.backgroundColor = 'rgba(0,0,0,0.4)';
  };
  const closeModal = () => {
    setPrivacyModalOpen(false);
    setTermsModalOpen(false);
    document.body.style.backgroundColor = 'white';
  };
  return (
    <div className="footer">
      <div className="footer-left">
        <button className="bleft" onClick={openPrivacyModal}>Privacy Policy</button>
        <button className="bleft" onClick={openTermsModal}>Terms and Conditions</button>
        <button className="bleft" onClick={handlefaq}>FAQ's</button>
      </div>
      <div className="footer-center">
        <p>&copy; 2024 MSD Online Admission. All rights reserved.</p>
      </div>
      {privacyModalOpen && <PrivacyPolicy closeModal={closeModal} />}
      {termsModalOpen && <Termsandconditions closeModal={closeModal} />}
    </div>
  );
};

export default Footer;