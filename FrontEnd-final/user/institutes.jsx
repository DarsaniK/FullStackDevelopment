// import React, { useState } from 'react';
// import '../../assets/css/institutes.css';
// import Navbar from '../navbar';
// import Footer from '../footer';

// const collegesData = [
//   {
//     name: 'PSG college of Technology',
//     location: 'Coimbatore',
//     contactNumber: '04222572177',
//     email: 'contact@psgtech.ac.in',
//     courses:'5',
//   },
//   {
//     name: 'Kumarguru College of Technology',
//     location: 'Coimbatore',
//     contactNumber: ' 0422-2661515',
//     email: 'info@kct.ac.in',
//     courses: '4',
//   },
//   {
//     name: 'SRM Institute of Science and Technology',
//     location: 'Chennai',
//     contactNumber: ' 0422-2661515',
//     email: 'info@srmist.com',
//     courses: '6',
//   },
//   {
//     name: 'Sri Krishna College of Technology',
//     location: 'coimbatore',
//     contactNumber: '123-456-7890',
//     email: 'info@skct.edu.in',
//     courses: '3',
//   },
//   {
//     name: 'Vellore Institute of Technology',
//     location: 'Vellore',
//     contactNumber: '123-456-7890',
//     email: 'info@vit.com',
//     courses: '7',
//   },
//   {
//     name: 'Thiagarajar college of Engineering',
//     location: 'Madurai',
//     contactNumber: '04522482240',
//     email: 'info@tce.edu',
//     courses: '4',
//   },
//   {
//     name: 'Sona college of Technology',
//     location: 'Salem',
//     contactNumber: '04274099999',
//     email: 'info@sonatech.ac.in',
//     courses: '5',
//   },
//   {
//     name: 'Kongu College of Enginnering',
//     location: 'Erode',
//     contactNumber: '042942265550',
//     email: 'principal@kongu.ac.in',
//     courses: '6',
//   },
//   {
//     name: 'Chennai Institute of Technology',
//     location: 'Chennai',
//     contactNumber: '04471119111',
//     email: 'info@cit.com',
//     courses: '6',
//   },
// ];

// const pageSize = 6;

// const CollegeCard = ({ college }) => {
//   return (
//     <div className="college-card">
//         <Navbar/>
//       <h2 className="college-name">{college.name}</h2>
//       <p className="college-info">Location: <strong>{college.location}</strong></p>
//       <p className="college-info">Contact: {college.contactNumber}</p>
//       <p className="college-info">Email: {college.email}</p>
//       <p className="college-info">Courses Available: {college.courses}</p>
      
//     </div>
//   );
// }; 

// const Colleges = ({ colleges }) => {
//   return (
//     <div className="colleges">
//       {colleges.map(college => (
//         <CollegeCard key={college.name} college={college} />
//       ))}
//     </div>
//   );
// };

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="pagination2">
//       {pageNumbers.map(page => (
//         <button
//           key={page}
//           className={currentPage === page ? 'active' : ''}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// };
// const Filter = ({ setFilteredColleges }) => {
//     const [searchTerm, setSearchTerm] = useState('');
  
//     const handleSearch = event => {
//       setSearchTerm(event.target.value);
//     };
  
//     const handleFilter = () => {
//         const filteredColleges = collegesData.filter(college => {
//           return (
//             college.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//             college.location.toLowerCase().includes(searchTerm.toLowerCase())
//           );
//         });
//         setFilteredColleges(filteredColleges);
//       };
    
//       return (
//         <div className="filter">
//           <input
//             type="text"
//             placeholder="Search..."
//             value={searchTerm}
//             onChange={handleSearch}
//           />
//           <button onClick={handleFilter} style={{backgroundColor: '#007bff',  border:'none',borderRadius: '5px', cursor: 'pointer' }} >Apply Filter</button>
//         </div>
//       );
//     };
    
// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [filteredColleges, setFilteredColleges] = useState(collegesData);


//   const handlePageChange = page => {
//     setCurrentPage(page);
//   };

//   const totalPages = Math.ceil(collegesData.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, collegesData.length);
//   const displayedColleges = filteredColleges.slice(startIndex, endIndex);

//   return (
//     <div className="app2">
//       <Filter setFilteredColleges={setFilteredColleges} />
//       <Colleges colleges={displayedColleges} />
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//         />
//         <Footer/>
//     </div>
//   );
// };

// export default App;

// import React, { useState, useEffect } from 'react';
// import '../../assets/css/institutes.css';
// import Navbar from '../navbar';
// import Footer from '../footer';
// import axios from 'axios';

// const pageSize = 6;

// const CollegeCard = ({ college }) => {
//   return (
//     <div className="college-card">
//       <h2 className="college-name">{college.instituteName}</h2>
//       <p className="college-info">Location: <strong>{college.location}</strong></p>
//       <p className="college-info">Contact: {college.contactNumber}</p>
//       <p className="college-info">Email: {college.instituteEmail}</p>
//     </div>
//   );
// };

// const Colleges = ({ colleges }) => {
//   return (
//     <div className="colleges">
//       {colleges.map(college => (
//         <CollegeCard key={college.instituteId} college={college} />
//       ))}
//     </div>
//   );
// };

// const Pagination = ({ currentPage, totalPages, onPageChange }) => {
//   const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

//   return (
//     <div className="pagination2">
//       {pageNumbers.map(page => (
//         <button
//           key={page}
//           className={currentPage === page ? 'active' : ''}
//           onClick={() => onPageChange(page)}
//         >
//           {page}
//         </button>
//       ))}
//     </div>
//   );
// };

// const Filter = ({ setFilteredColleges }) => {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearch = event => {
//     setSearchTerm(event.target.value);
//   };

//   const handleFilter = () => {
//     // Implement filtering logic here
//   };

//   return (
//     <div className="filter">
//       <input
//         type="text"
//         placeholder="Search..."
//         value={searchTerm}
//         onChange={handleSearch}
//       />
//       <button onClick={handleFilter} style={{ backgroundColor: '#007bff', border: 'none', borderRadius: '5px', cursor: 'pointer' }} >Apply Filter</button>
//     </div>
//   );
// };

// const App = () => {
//   const [currentPage, setCurrentPage] = useState(1);
//   const [colleges, setColleges] = useState([]);

//   useEffect(() => {
//     const fetchColleges = async () => {
//       try {
//         const authToken = localStorage.getItem('accessToken');
//         const response = await axios.get('http://localhost:8181/college/api/v1/institutes/institute', {
//           headers: {
//             Authorization: `Bearer ${authToken}`
//           }
//         });
//         setColleges(response.data);
//       } catch (error) {
//         console.error('Error fetching colleges:', error);
//       }
//     };

//     fetchColleges();
//   }, []);

//   const handlePageChange = page => {
//     setCurrentPage(page);
//   };

//   const totalPages = Math.ceil(colleges.length / pageSize);
//   const startIndex = (currentPage - 1) * pageSize;
//   const endIndex = Math.min(startIndex + pageSize, colleges.length);
//   const displayedColleges = colleges.slice(startIndex, endIndex);

//   return (
//     <div className="app2">
//       <Navbar />
//       <Filter setFilteredColleges={() => {}} /> {/* You can implement filtering later */}
//       <Colleges colleges={displayedColleges} />
//       <Pagination
//         currentPage={currentPage}
//         totalPages={totalPages}
//         onPageChange={handlePageChange}
//       />
//       <Footer />
//     </div>
//   );
// };

// export default App;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import '../../assets/css/courses.css';
import Navbar from '../navbar';
import Footer from '../footer';

function App() {
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState(1);
  const [cardsPerPage] = useState(6); 
  const [filter, setFilter] = useState('');
  const [institutes, setInstitutes] = useState([]);

  useEffect(() => {
    fetchInstitutes();
  }, []);

  const fetchInstitutes = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8181/college/api/v1/institutes/institute', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setInstitutes(response.data);
    } catch (error) {
      console.error('Error fetching institutes:', error);
    }
  };

  const handleFilter = () => {
            return institutes.filter(institute =>
              institute.instituteName.toLowerCase().includes(filter.toLowerCase()) ||
              institute.location.toLowerCase().includes(filter.toLowerCase())
            );
          };

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const filteredInstitutes = filter ? handleFilter() : institutes;

  const indexOfLastCard = currentPage * cardsPerPage;
  const indexOfFirstCard = indexOfLastCard - cardsPerPage;
  const currentCards = filteredInstitutes.slice(indexOfFirstCard, indexOfLastCard);

  return (
    <div className='app1'>
      <Navbar />
      <div className="filter">
        <input type="text" placeholder="Search by Institute Name or Location" value={filter} onChange={(e) => setFilter(e.target.value)} />
        <button onClick={fetchInstitutes}>Filter</button>
      </div>
      <div className="cards-container">
        {currentCards.length === 0 ? (
          <p>No matching results found.</p>
        ) : (
          currentCards.map((institute, index) => (
            <div className="card" key={index}>
              <div className="info">
                <h2 className="institute-name">{institute.instituteName}</h2>
                <p className="location">{institute.location}</p>
                <p className="contact">Contact Number: {institute.contactNumber}</p>
                <p className="email">Email: {institute.email}</p>
              </div>
              <button className={`enroll-button ${currentPage === Math.ceil(indexOfLastCard / cardsPerPage) ? 'active' : ''}`} onClick={() => handleEnroll(institute.name, institute.location, institute.contactNumber, institute.email)}>
                Enroll
              </button>
            </div>
          ))
        )}
      </div>
      <div className="pagination">
        {Array.from({ length: Math.ceil(filteredInstitutes.length / cardsPerPage) }, (_, i) => (
          <button key={i} className={currentPage === i + 1 ? 'active' : ''} onClick={() => paginate(i + 1)}>{i + 1}</button>
        ))}
      </div>
      <Footer />
    </div>
  );
}

export default App;
