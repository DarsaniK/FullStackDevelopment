// import React, { useState } from 'react';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/AddInstitutions.css';

// const AddInstitutionPage = () => {
//   const [institutionData, setInstitutionData] = useState([
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//     { id: 1, name: 'PSG College of Technology', location: 'Coimbatore', contactNumber: '04222572177', email: 'contact@psgtech.ac.in', courses: '5' },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [institutionsPerPage] = useState(11); 

//   const addInstitution = () => {
//   };

//   const indexOfLastInstitution = currentPage * institutionsPerPage;
//   const indexOfFirstInstitution = indexOfLastInstitution - institutionsPerPage;
//   const currentInstitutions = institutionData.slice(indexOfFirstInstitution, indexOfLastInstitution);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math.ceil(institutionData.length / institutionsPerPage);

//   const paginationButtons = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationButtons.push(
//       <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
//         {i}
//       </button>
//     );
//   }

//   return (
//     <div className='add-institution-page-container'>
//       <AdminNavbar />
//       <div className='add-institution-form'>
//         <h2>Add Institution</h2>
//         <div className='input-fields'>
//           <input type='text' placeholder='Name' />
//           <input type='text' placeholder='Location' />
//           <input type='text' placeholder='Contact Number' />
//           <input type='text' placeholder='Email' />
//           <input type='text' placeholder='Courses' />
//           <button onClick={addInstitution}>Add</button>
//         </div>
//       </div>
//       <div className='institution-details-table'>
//         <h2>Institution Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Name</th>
//               <th>Location</th>
//               <th>Contact Number</th>
//               <th>Email</th>
//               <th>Courses</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentInstitutions.map(institution => (
//               <tr key={institution.id}>
//                 <td>{institution.name}</td>
//                 <td>{institution.location}</td>
//                 <td>{institution.contactNumber}</td>
//                 <td>{institution.email}</td>
//                 <td>{institution.courses}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//         <div className='pagination'>
//           {paginationButtons}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AddInstitutionPage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/Addcourse.css';

// const AddInstitutePage = () => {
//   const [instituteData, setInstituteData] = useState([]);
//   const [newInstitute, setNewInstitute] = useState({
//     instituteName: '',
//     location: '',
//     contactNumber: '',
//     email: ''
//   });

//   useEffect(() => {
//     fetchInstitutes();
//   }, []);

//   const fetchInstitutes = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const response = await axios.get('http://localhost:8181/college/api/v1/institutes/institute', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setInstituteData(response.data);
//     } catch (error) {
//       console.error('Error fetching institutes:', error);
//     }
//   };

//   const addInstitute = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.post('http://localhost:8181/college/api/v1/institutes/institute', newInstitute, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchInstitutes(); 
//       setNewInstitute({
//         instituteName: '',
//         location: '',
//         contactNumber: '',
//         email: ''
//       });
//     } catch (error) {
//       console.error('Error adding institute:', error);
//     }
//   };

//   const handleUpdate = async (instituteId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const instituteToUpdate = instituteData.find(institute => institute.instituteId === instituteId);
//       const updatedInstitute = { ...instituteToUpdate, instituteName: instituteToUpdate.instituteName, location: instituteToUpdate.location, contactNumber: instituteToUpdate.contactNumber, email: instituteToUpdate.email };
//       await axios.put(`http://localhost:8181/college/api/v1/institutes/${instituteId}`, updatedInstitute, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       const updatedData = instituteData.map(institute => {
//         if (institute.instituteId === instituteId) {
//           return { ...institute, ...updatedInstitute };
//         }
//         return institute;
//       });
//       setInstituteData(updatedData);
//     } catch (error) {
//       console.error('Error updating institute:', error);
//     }
//   };
  

//   const handleDelete = async (instituteId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.delete(`http://localhost:8181/college/api/v1/institutes/${instituteId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchInstitutes(); 
//     } catch (error) {
//       console.error('Error deleting institute:', error);
//     }
//   };

//   const handleChange = (e, instituteId) => {
//     const { name, value } = e.target;
//     setInstituteData(instituteData.map(institute => {
//       if (institute.instituteId === instituteId) {
//         return { ...institute, [name]: value };
//       }
//       return institute;
//     }));
//   };
  

//   const [editMode, setEditMode] = useState({});

//   const toggleEditMode = (instituteId) => {
//     setEditMode({
//       ...editMode,
//       [instituteId]: !editMode[instituteId]
//     });
//   };

//   return (
//     <div className='add-course-page-container'>
//       <AdminNavbar />
//       <div className='add-course-form'>
//         <h2>Add Institute</h2>
//         <div className='input-fields'>
//           <input type='text' name='instituteName' placeholder='Institute Name' value={newInstitute.instituteName} onChange={(e) => setNewInstitute({...newInstitute, instituteName: e.target.value})} />
//           <input type='text' name='location' placeholder='Location' value={newInstitute.location} onChange={(e) => setNewInstitute({...newInstitute, location: e.target.value})} />
//           <input type='text' name='contactNumber' placeholder='Contact Number' value={newInstitute.contactNumber} onChange={(e) => setNewInstitute({...newInstitute, contactNumber: e.target.value})} />
//           <input type='text' name='email' placeholder='Email' value={newInstitute.email} onChange={(e) => setNewInstitute({...newInstitute, email: e.target.value})} />
//           <button onClick={addInstitute}>Add</button>
//         </div>
//       </div>
//       <div className='course-details-table'>
//         <h2>Institute Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Institute ID</th>
//               <th>Institute Name</th>
//               <th>Location</th>
//               <th>Contact Number</th>
//               <th>Email</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(instituteData) && instituteData.map(institute => (
//               <tr key={institute.instituteId}>
//                 <td>{institute.instituteId}</td>
//                 <td>
//                   {editMode[institute.instituteId] ? (
//                     <input type='text' value={institute.instituteName} onChange={(e) => handleChange(e, institute.instituteId)} name='instituteName' />
//                   ) : (
//                     institute.instituteName
//                   )}
//                 </td>
//                 <td>
//                   {editMode[institute.instituteId] ? (
//                     <input type='text' value={institute.location} onChange={(e) => handleChange(e, institute.instituteId)} name='location' />
//                   ) : (
//                     institute.location
//                   )}
//                 </td>
//                 <td>
//                   {editMode[institute.instituteId] ? (
//                     <input type='text' value={institute.contactNumber} onChange={(e) => handleChange(e, institute.instituteId)} name='contactNumber' />
//                   ) : (
//                     institute.contactNumber
//                   )}
//                 </td>
//                 <td>
//                   {editMode[institute.instituteId] ? (
//                     <input type='text' value={institute.email} onChange={(e) => handleChange(e, institute.instituteId)} name='email' />
//                   ) : (
//                     institute.email
//                   )}
//                 </td>
//                 <td>
//                   <button onClick={() => {
//                     if (editMode[institute.instituteId]) handleUpdate(institute.instituteId);
//                     toggleEditMode(institute.instituteId);
//                   }}>{editMode[institute.instituteId] ? 'Update' : 'Edit'}</button>
//                   <button onClick={() => handleDelete(institute.instituteId)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddInstitutePage;


import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/Addcourse.css';

const AddInstitutePage = () => {
  const [instituteData, setInstituteData] = useState([]);
  const [newInstitute, setNewInstitute] = useState({
    instituteName: '',
    location: '',
    contactNumber: '',
    email: ''
  });

  const instituteNameOptions = ['Sri Krishna College of Technology', 'PSG Institution of Technology', 'Kumaraguru College of Technology','Sona College of Technology','Sri Krishna College of Engineering and Technology'];

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
      setInstituteData(response.data);
    } catch (error) {
      console.error('Error fetching institutes:', error);
    }
  };

  const addInstitute = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('http://localhost:8181/college/api/v1/institutes/institute', newInstitute, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchInstitutes();
      setNewInstitute({
        instituteName: '',
        location: '',
        contactNumber: '',
        email: ''
      });
    } catch (error) {
      console.error('Error adding institute:', error);
    }
  };

  const handleUpdate = async (instituteId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const instituteToUpdate = instituteData.find(institute => institute.instituteId === instituteId);
      const updatedInstitute = {
        ...instituteToUpdate,
        instituteName: instituteToUpdate.instituteName,
        location: instituteToUpdate.location,
        contactNumber: instituteToUpdate.contactNumber,
        email: instituteToUpdate.email
      };
      await axios.put(`http://localhost:8181/college/api/v1/institutes/${instituteId}`, updatedInstitute, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedData = instituteData.map(institute => {
        if (institute.instituteId === instituteId) {
          return { ...institute, ...updatedInstitute };
        }
        return institute;
      });
      setInstituteData(updatedData);
    } catch (error) {
      console.error('Error updating institute:', error);
    }
  };

  const handleDelete = async (instituteId) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://localhost:8181/college/api/v1/institutes/${instituteId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchInstitutes();
    } catch (error) {
      console.error('Error deleting institute:', error);
    }
  };

  const handleChange = (e, instituteId) => {
    const { name, value } = e.target;
    setInstituteData(instituteData.map(institute => {
      if (institute.instituteId === instituteId) {
        return { ...institute, [name]: value };
      }
      return institute;
    }));
  };

  const [editMode, setEditMode] = useState({});

  const toggleEditMode = (instituteId) => {
    setEditMode({
      ...editMode,
      [instituteId]: !editMode[instituteId]
    });
  };

  return (
    <div className='add-course-page-container'>
      <AdminNavbar />
      <div className='add-course-form'>
        <h2>Add Institute</h2>
        <div className='input-fields'>
          <select
            name='instituteName'
            value={newInstitute.instituteName}
            onChange={(e) => setNewInstitute({...newInstitute, instituteName: e.target.value})}
          >
            <option value='' disabled>Select Institute Name</option>
            {instituteNameOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <input
            type='text'
            name='location'
            value={newInstitute.location}
            onChange={(e) => setNewInstitute({...newInstitute, location: e.target.value})}
            placeholder='Enter Location'
          />
          <input
            type='text'
            name='contactNumber'
            value={newInstitute.contactNumber}
            onChange={(e) => setNewInstitute({...newInstitute, contactNumber: e.target.value})}
            placeholder='Enter Contact Number'
          />
          <input
            type='email'
            name='email'
            value={newInstitute.email}
            onChange={(e) => setNewInstitute({...newInstitute, email: e.target.value})}
            placeholder='Enter Email Address'
          />
          <button onClick={addInstitute}>Add</button>
        </div>
      </div>

      <div className='course-details-table'>
        <h2>Institute Details</h2>
        <table>
          <thead>
            <tr>
              <th>Institute ID</th>
              <th>Institute Name</th>
              <th>Location</th>
              <th>Contact Number</th>
              <th>Email</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Array.isArray(instituteData) && instituteData.map(institute => (
              <tr key={institute.instituteId}>
                <td>{institute.instituteId}</td>
                <td>
                  {editMode[institute.instituteId] ? (
                    <select
                      name='instituteName'
                      value={institute.instituteName}
                      onChange={(e) => handleChange(e, institute.instituteId)}
                    >
                      {instituteNameOptions.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                      ))}
                    </select>
                  ) : (
                    institute.instituteName
                  )}
                </td>
                <td>
                  {editMode[institute.instituteId] ? (
                    <input 
                      type='text' 
                      name='location'
                      value={institute.location}
                      onChange={(e) => handleChange(e, institute.instituteId)}
                    />
                  ) : (
                    institute.location
                  )}
                </td>
                <td>
                  {editMode[institute.instituteId] ? (
                    <input 
                      type='text'
                      name='contactNumber'
                      value={institute.contactNumber}
                      onChange={(e) => handleChange(e, institute.instituteId)}
                    />
                  ) : (
                    institute.contactNumber
                  )}
                </td>
                <td>
                  {editMode[institute.instituteId] ? (
                    <input 
                      type='email' 
                      name='email'
                      value={institute.email}
                      onChange={(e) => handleChange(e, institute.instituteId)}
                    />
                  ) : (
                    institute.email
                  )}
                </td>
                <td>
                  <button 
                    onClick={() => {
                      if (editMode[institute.instituteId]) {
                        handleUpdate(institute.instituteId);
                      }
                      toggleEditMode(institute.instituteId);
                    }}
                  >
                    {editMode[institute.instituteId] ? 'Update' : 'Edit'}
                  </button>
                  <button onClick={() => handleDelete(institute.instituteId)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AddInstitutePage;

