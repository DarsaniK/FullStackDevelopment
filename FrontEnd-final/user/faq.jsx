import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import '../../assets/css/faq.css';
import Navbar from '../navbar';
import Footer from '../footer';
const FAQAccordion = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const navigate = useNavigate(); 

  const toggleAccordion = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqItems = [
    {
      question: 'How do I apply for admission on the online college admission website?',
      answer: 'To apply for admission on our website, you need to create an account, fill out the application form with your personal and academic details, upload the required documents, and submit your application. Our system will guide you through the process step by step.'
    },
    {
      question: 'What documents do I need to submit for the college admission process?',
      answer: 'The documents required for the college admission process may vary depending on the institution and program you are applying to. Typically, you will need to submit your academic transcripts, standardized test scores (if applicable), letters of recommendation, a personal statement or essay, and any other documents specified by the college.'
    },
    {
      question: 'How can I track the status of my college applications?',
      answer: 'Once you have submitted your applications through our website, you can track their status by logging into your account dashboard. You will receive notifications about any updates or changes to your application status, such as receipt of documents, interview invitations, or admission decisions.'
    },
    {
      question: 'Can I apply to multiple colleges through the online admission portal?',
      answer: 'Yes, our online admission portal allows you to apply to multiple colleges and programs simultaneously. You can save time and effort by using a single platform to submit your applications to different institutions.'
    },
    {
      question: 'Is the online college admission process secure and confidential?',
      answer: 'We take the security and confidentiality of your personal information seriously. Our website uses encryption and other security measures to protect your data during the admission process. We only share your information with the colleges and universities you apply to, and we adhere to strict privacy policies to ensure the confidentiality of your data.'
    }      
  ];

  return (
    <div className='FAQ'>
        <Navbar/>
      <div className="containerF">
        <h2><div className='aboutheading'>Frequently Asked Questions</div></h2>
        <div className="accordion">
          {faqItems.map((item, index) => (
            <div className="accordion-item" key={index}>
              <button className='buttonF'
                onClick={() => toggleAccordion(index)}
                aria-expanded={activeIndex === index ? 'true' : 'false'}
              >
                <span className="accordion-title">{item.question}</span>
                <span className="iconF" aria-hidden="true"></span>
              </button>
              <div
                className={`accordion-content ${activeIndex === index ? 'open' : ''}`}
              >
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer/>
    </div>
  );
};

export default FAQAccordion;
