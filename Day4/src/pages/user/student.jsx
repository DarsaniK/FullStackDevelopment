import React ,{useState} from 'react';
import '../../assets/css/student.css';
import Navbar from '../navbar';
import Footer from '../footer';
import { useNavigate } from 'react-router-dom';
import Institue from '../../assets/images/Intitutes.jpg';
import Course from '../../assets/images/course.jpg';
import Stu from '../../assets/images/stu.jpg';
import Add from '../../assets//images/add.jpg';
import Pay from '../../assets/images/pay.jpg';
import His from '../../assets/images/his.jpg';
import Addmission from '../../assets/images/add open.gif';
import AdmissionDetailsDialog from './admissiondialog';
import PaymentHistoryDialog from './paymenthistory';
const Student = () => {
  const navigate = useNavigate();
  const [admissionDetails, setAdmissionDetails] = useState(null);
  const [showAdmissionDialog, setShowAdmissionDialog] = useState(false);
  const [showPaymentHistoryDialog, setShowPaymentHistoryDialog] = useState(false); 

  const fetchAdmissionDetails = () => {
    const enrollData = JSON.parse(localStorage.getItem('enrollData'));
    if (enrollData) {
      setAdmissionDetails(enrollData);
      setShowAdmissionDialog(true);
    } else {
      console.log('No admission details found.');
    }
  };



  const handleCardClick = (route) => {
    if (route === '/user/admissiondialog') {
      fetchAdmissionDetails();
    } else if (route === '/user/paymenthistory') {
      setShowPaymentHistoryDialog(true); 
    } else {
      navigate(route);
    }
  };

  const closeAdmissionDialog = () => {
    setShowAdmissionDialog(false);
  };

  const closePaymentHistoryDialog = () => {
    setShowPaymentHistoryDialog(false);
  };


  return (
    <div className='stt'>
     <div className="student-container1">
      <Navbar />
      <img src={Addmission} className="card-image1" />
      <div className="columns-container1">
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/institutes')}>
            <img src={Institue} alt="View Institutions" className="card-image" />
            <h3>View Institutions</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/user/courses')}>
            <img src={Course} alt="View College" className="card-image" />
            <h3>View Courses</h3>
          </div>
        </div>
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/profileupdate')}>
            <img src={Stu} alt="Add Student Profile" className="card-image" />
            <h3>Add Student Profile</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/user/admissiondialog')}>
            <img src={Add} alt="Check Admission Details" className="card-image" />
            <h3>Check Admission Details</h3>
          </div>
        </div>
        <div className="column1">
          <div className="card1" onClick={() => handleCardClick('/user/payment')}>
            <img src={Pay} alt="Make Payment" className="card-image" />
            <h3>Make Payment</h3>
          </div>
          <div className="card1" onClick={() => handleCardClick('/user/paymenthistory')}>
            <img src={His} alt="Payment History" className="card-image" />
            <h3>Payment History</h3>
          </div>
        </div>
      </div>
      <Footer />
      {showAdmissionDialog && (
        <AdmissionDetailsDialog
          admissionDetails={admissionDetails}
          onClose={closeAdmissionDialog}
        />
      )}
        {showPaymentHistoryDialog && (
        <PaymentHistoryDialog onClose={closePaymentHistoryDialog} />
      )}
    </div></div>
  );
};


export default Student;