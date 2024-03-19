import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/courses.css';
import Navbar from '../navbar';
import Footer from '../footer';

function Cards() {
  const navigate = useNavigate();

  // Mock data for cards (replace with actual data)
  const cardsData = [
    { course: 'Computer Science Engineering', college: 'PSG Institutions', fees: 'Rs.100000', duration: '4 year', seats: 10 },
    { course: 'Electrical and Communication Engineering', college: 'Sri Krishna Institutions', fees: 'Rs.120000', duration: '4 years', seats: 15 },
    { course: 'Electrical and Electronics Engineering', college: 'SRM Institutes', fees: 'Rs.140000', duration: '4 years', seats: 15 },
    { course: 'Information Technology', college: 'Coimbatore Institute of Technology', fees: 'Rs.130000', duration: '4 years', seats: 8 },
    { course: 'Artificial Intelligence and Data Scienece', college: 'Kumaraguru College of Technology', fees: 'Rs.140000', duration: '4 years', seats: 12 },
    { course: 'Computer Applications', college: 'Sri Krishna Institutuions', fees: 'Rs.90000', duration: '3 years', seats: 11 },
    { course: 'Computer Science Engineering', college: 'PSG Institutuions', fees: 'Rs.90000', duration: '3 years', seats: 11 },
    // Add more cards data as needed
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); // Change this value to adjust number of cards per page
  const [filter, setFilter] = useState('');

  const handleFilter = () => {
    return cardsData.filter(card =>
      card.college.toLowerCase().includes(filter.toLowerCase()) ||
      card.course.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const handleEnroll = (course, college, fees, duration) => {
    // Store data in local storage
    localStorage.setItem('enrollData', JSON.stringify({ college, course, duration, fees }));
    // Navigate to enrollment form page
    navigate('/user/enroll');
  };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Filter the cards based on the search filter
  const filteredCards = filter ? handleFilter() : cardsData;

  // Calculate index of the last card to display on current page
  const indexOfLastCard = currentPage * cardsPerPage;
  // Calculate index of the first card to display on current page
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  // Get current cards to display on current page
  const currentCards = filteredCards.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className='app1'>
      <Navbar />
      <div className="filter">
        <input type="text" placeholder="Search by College or Course" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={handleFilter}>Filter</button>
      </div>
      <div className="cards-container">
        {currentCards.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          currentCards.map((card, index) => (
            <div className="card" key={index}>
              <div className="info">
                <h2 className="course-name">{card.course}</h2>
                <p className="college-name">{card.college}</p>
                <p className="fees">Fees: {card.fees}</p>
                <p className="duration">Duration: {card.duration}</p>
                <p className="seats">Available Seats: {card.seats}</p>
              </div>
              <button className={`enroll-button ${currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? 'active' : ''}`} onClick={() => handleEnroll(card.course, card.college, card.fees, card.duration)}>
                Enroll
              </button>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredCards.length / cardsPerPage) }, (_, i) => (
          <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default Cards;
