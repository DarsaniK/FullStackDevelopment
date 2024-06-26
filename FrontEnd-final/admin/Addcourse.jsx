// import React, { useState } from 'react';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/Addcourse.css';

// const AddCoursePage = () => {
//   const [courseData, setCourseData] = useState([
//     { id: 1, course: 'Computer Science Engineering', college: 'ABC University', fees: '$1000', duration: '4 years' },
//     { id: 2, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 3, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 4, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 5, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 6, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 7, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 8, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 9, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 10, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 11, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 12, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 13, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 14, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 15, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 16, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 17, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 18, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 19, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 20, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 21, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//     { id: 22, course: 'Electrical Engineering', college: 'XYZ College', fees: '$1200', duration: '3 years' },
//   ]);

//   const [currentPage, setCurrentPage] = useState(1);
//   const [coursesPerPage] = useState(11); 

//   const addCourse = () => {
//   };

//   const indexOfLastCourse = currentPage * coursesPerPage;
//   const indexOfFirstCourse = indexOfLastCourse - coursesPerPage;
//   const currentCourses = courseData.slice(indexOfFirstCourse, indexOfLastCourse);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   const totalPages = Math.ceil(courseData.length / coursesPerPage);

//   const paginationButtons = [];
//   for (let i = 1; i <= totalPages; i++) {
//     paginationButtons.push(
//       <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
//         {i}
//       </button>
//     );
//   }

//   return (
//     <div className='add-course-page-container'>
//       <AdminNavbar />
//       <div className='add-course-form'>
//         <h2>Add Course</h2>
//         <div className='input-fields'>
//           <input type='text' placeholder='Course' />
//           <input type='text' placeholder='College' />
//           <input type='text' placeholder='Fees' />
//           <input type='text' placeholder='Duration' />
//           <button onClick={addCourse}>Add</button>
//         </div>
//       </div>
//       <div className='course-details-table'>
//         <h2>Course Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course</th>
//               <th>College</th>
//               <th>Fees</th>
//               <th>Duration</th>
//             </tr>
//           </thead>
//           <tbody>
//             {currentCourses.map(course => (
//               <tr key={course.id}>
//                 <td>{course.course}</td>
//                 <td>{course.college}</td>
//                 <td>{course.fees}</td>
//                 <td>{course.duration}</td>
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

// export default AddCoursePage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/Addcourse.css';

// const AddCoursePage = () => {
//   const [courseData, setCourseData] = useState([]);
//   const [newCourse, setNewCourse] = useState({
//     courseName: '',
//     college: '',
//     fees: '',
//     duration: ''
//   });

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const response = await axios.get('http://localhost:8181/college/api/v1/courses/all', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log(response.data); // Check the response data in the console
//       setCourseData(response.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const addCourse = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.post('http://localhost:8181/college/api/v1/courses', newCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses(); 
//       setNewCourse({
//         courseName: '',
//         college: '',
//         fees: '',
//         duration: ''
//       });
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse({
//       ...newCourse,
//       [name]: value
//     });
//   };

//   return (
//     <div className='add-course-page-container'>
//       <AdminNavbar />
//       <div className='add-course-form'>
//         <h2>Add Course</h2>
//         <div className='input-fields'>
//           <input type='text' name='courseName' placeholder='Course' value={newCourse.courseName} onChange={handleChange} />
//           <input type='text' name='college' placeholder='College' value={newCourse.college} onChange={handleChange} />
//           <input type='text' name='fees' placeholder='Fees' value={newCourse.fees} onChange={handleChange} />
//           <input type='text' name='duration' placeholder='Duration' value={newCourse.duration} onChange={handleChange} />
//           <button onClick={addCourse}>Add</button>
//         </div>
//       </div>
//       <div className='course-details-table'>
//         <h2>Course Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course</th>
//               <th>College</th>
//               <th>Fees</th>
//               <th>Duration</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//           {Array.isArray(courseData) && courseData.map(course => (
//             <tr key={course.id}>
//               <td>{course.courseName}</td>
//               <td>{course.college}</td>
//               <td>{course.fees}</td>
//               <td>{course.duration}</td>
//               <td>
//                   <button onClick={() => handleUpdate(course.id)}>Update</button>
//                   <button onClick={() => handleDelete(course.id)}>Delete</button>
//                 </td>
//             </tr>
//           ))}
//         </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddCoursePage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/Addcourse.css';

// const AddCoursePage = () => {
//   const [courseData, setCourseData] = useState([]);
//   const [newCourse, setNewCourse] = useState({
//     courseName: '',
//     college: '',
//     fees: '',
//     duration: ''
//   });

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const response = await axios.get('http://localhost:8181/college/api/v1/courses/all', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       console.log(response.data); // Check the response data in the console
//       setCourseData(response.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const addCourse = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.post('http://localhost:8181/college/api/v1/courses', newCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses(); 
//       setNewCourse({
//         courseName: '',
//         college: '',
//         fees: '',
//         duration: ''
//       });
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const handleUpdate = async (courseId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const courseToUpdate = courseData.find(course => course.courseId === courseId);
//       const updatedCourse = { ...courseToUpdate, /* Update course details here */ };
//       await axios.put(`http://localhost:8181/college/api/v1/courses/${courseId}`, updatedCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses();
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };

//   const handleDelete = async (courseId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.delete(`http://localhost:8181/college/api/v1/courses/${courseId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses(); 
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setNewCourse({
//       ...newCourse,
//       [name]: value
//     });
//   };

//   return (
//     <div className='add-course-page-container'>
//       <AdminNavbar />
//       <div className='add-course-form'>
//         <h2>Add Course</h2>
//         <div className='input-fields'>
//           <input type='text' name='courseName' placeholder='Course' value={newCourse.courseName} onChange={handleChange} />
//           <input type='text' name='college' placeholder='College' value={newCourse.college} onChange={handleChange} />
//           <input type='text' name='fees' placeholder='Fees' value={newCourse.fees} onChange={handleChange} />
//           <input type='text' name='duration' placeholder='Duration' value={newCourse.duration} onChange={handleChange} />
//           <button onClick={addCourse}>Add</button>
//         </div>
//       </div>
//       <div className='course-details-table'>
//         <h2>Course Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course ID</th>
//               <th>Course</th>
//               <th>College</th>
//               <th>Fees</th>
//               <th>Duration</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(courseData) && courseData.map(course => (
//               <tr key={course.courseId}>
//                 <td>{course.courseId}</td>
//                 <td>{course.courseName}</td>
//                 <td>{course.college}</td>
//                 <td>{course.fees}</td>
//                 <td>{course.duration}</td>
//                 <td>
//                   <button onClick={() => handleUpdate(course.courseId)}>Update</button>
//                   <button onClick={() => handleDelete(course.courseId)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddCoursePage;

// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import AdminNavbar from '../../components/adminNavbar';
// import '../../assets/css/Addcourse.css';

// const AddCoursePage = () => {
//   const [courseData, setCourseData] = useState([]);
//   const [newCourse, setNewCourse] = useState({
//     courseName: '',
//     college: '',
//     fees: '',
//     duration: ''
//   });

//   useEffect(() => {
//     fetchCourses();
//   }, []);

//   const fetchCourses = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const response = await axios.get('http://localhost:8181/college/api/v1/courses/all', {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       setCourseData(response.data);
//     } catch (error) {
//       console.error('Error fetching courses:', error);
//     }
//   };

//   const addCourse = async () => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.post('http://localhost:8181/college/api/v1/courses', newCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses(); 
//       setNewCourse({
//         courseName: '',
//         college: '',
//         fees: '',
//         duration: ''
//       });
//     } catch (error) {
//       console.error('Error adding course:', error);
//     }
//   };

//   const handleUpdate = async (courseId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       const courseToUpdate = courseData.find(course => course.courseId === courseId);
//       const updatedCourse = { ...courseToUpdate, courseName: courseToUpdate.courseName, college: courseToUpdate.college, fees: courseToUpdate.fees, duration: courseToUpdate.duration };
//       await axios.put(`http://localhost:8181/college/api/v1/courses/${courseId}`, updatedCourse, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       const updatedData = courseData.map(course => {
//         if (course.courseId === courseId) {
//           return { ...course, ...updatedCourse };
//         }
//         return course;
//       });
//       setCourseData(updatedData);
//     } catch (error) {
//       console.error('Error updating course:', error);
//     }
//   };
  

//   const handleDelete = async (courseId) => {
//     try {
//       const token = localStorage.getItem('accessToken');
//       await axios.delete(`http://localhost:8181/college/api/v1/courses/${courseId}`, {
//         headers: {
//           Authorization: `Bearer ${token}`
//         }
//       });
//       fetchCourses(); 
//     } catch (error) {
//       console.error('Error deleting course:', error);
//     }
//   };

//   const handleChange = (e, courseId) => {
//     const { name, value } = e.target;
//     setCourseData(courseData.map(course => {
//       if (course.courseId === courseId) {
//         return { ...course, [name]: value };
//       }
//       return course;
//     }));
//   };
  

//   const [editMode, setEditMode] = useState({});

//   const toggleEditMode = (courseId) => {
//     setEditMode({
//       ...editMode,
//       [courseId]: !editMode[courseId]
//     });
//   };

//   return (
//     <div className='add-course-page-container'>
//       <AdminNavbar />
//       <div className='add-course-form'>
//         <h2>Add Course</h2>
//         <div className='input-fields'>
//           <input type='text' name='courseName' placeholder='Course' value={newCourse.courseName} onChange={(e) => setNewCourse({...newCourse, courseName: e.target.value})} />
//           <input type='text' name='college' placeholder='College' value={newCourse.college} onChange={(e) => setNewCourse({...newCourse, college: e.target.value})} />
//           <input type='text' name='fees' placeholder='Fees' value={newCourse.fees} onChange={(e) => setNewCourse({...newCourse, fees: e.target.value})} />
//           <input type='text' name='duration' placeholder='Duration' value={newCourse.duration} onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})} />
//           <button onClick={addCourse}>Add</button>
//         </div>
//       </div>
//       <div className='course-details-table'>
//         <h2>Course Details</h2>
//         <table>
//           <thead>
//             <tr>
//               <th>Course ID</th>
//               <th>Course</th>
//               <th>College</th>
//               <th>Fees</th>
//               <th>Duration</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {Array.isArray(courseData) && courseData.map(course => (
//               <tr key={course.courseId}>
//                 <td>{course.courseId}</td>
//                 <td>
//                   {editMode[course.courseId] ? (
//                     <input type='text' value={course.courseName} onChange={(e) => handleChange(e, course.courseId)} name='courseName' />
//                   ) : (
//                     course.courseName
//                   )}
//                 </td>
//                 <td>
//                   {editMode[course.courseId] ? (
//                     <input type='text' value={course.college} onChange={(e) => handleChange(e, course.courseId)} name='college' />
//                   ) : (
//                     course.college
//                   )}
//                 </td>
//                 <td>
//                   {editMode[course.courseId] ? (
//                     <input type='text' value={course.fees} onChange={(e) => handleChange(e, course.courseId)} name='fees' />
//                   ) : (
//                     course.fees
//                   )}
//                 </td>
//                 <td>
//                   {editMode[course.courseId] ? (
//                     <input type='text' value={course.duration} onChange={(e) => handleChange(e, course.courseId)} name='duration' />
//                   ) : (
//                     course.duration
//                   )}
//                 </td>
//                 <td>
//                   <button onClick={() => {
//                     if (editMode[course.courseId]) handleUpdate(course.courseId);
//                     toggleEditMode(course.courseId);
//                   }}>{editMode[course.courseId] ? 'Update' : 'Edit'}</button>
//                   <button onClick={() => handleDelete(course.courseId)}>Delete</button>
//                 </td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </div>
//   );
// };

// export default AddCoursePage;




import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/Addcourse.css';

const AddCoursePage = () => {
  const [courseData, setCourseData] = useState([]);
  const [newCourse, setNewCourse] = useState({
    courseName: '',
    college: '',
    fees: '',
    duration: ''
  });

  const courseOptions = ['Computer Science Engineering', 'Electrical Engineering', 'Mechanical Engineering','Artificial Intelligence and Data Science','Information Technology','Cyber Security','Civil Engineering','Business Administration','Computer Application'];
  const collegeOptions = ['Sri Krishna College of Technology', 'PSG Institution of Technology', 'Kumaraguru College of Technology','Sona College of Technology','Sri Krishna College of Engineering and Technology'];
  // const feesOptions = [ '$1200', '$1500', '$2000'];
  const durationOptions = ['2 years', '3 years', '4 years'];

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      const response = await axios.get('http://localhost:8181/college/api/v1/courses/all', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      setCourseData(response.data);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  const addCourse = async () => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.post('http://localhost:8181/college/api/v1/courses', newCourse, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCourses(); 
      setNewCourse({
        courseName: '',
        college: '',
        fees: '',
        duration: ''
      });
    } catch (error) {
      console.error('Error adding course:', error);
    }
  };

  const handleChange = (e, courseId) => {
    const { name, value } = e.target;
    setCourseData(courseData.map(course => {
      if (course.courseId === courseId) {
        return { ...course, [name]: value };
      }
      return course;
    }));
  };

  const handleUpdate = async (courseId) => {
    try {
      const token = localStorage.getItem('accessToken');
      const courseToUpdate = courseData.find(course => course.courseId === courseId);
      const updatedCourse = {
        ...courseToUpdate,
        courseName: courseToUpdate.courseName,
        college: courseToUpdate.college,
        fees: courseToUpdate.fees,
        duration: courseToUpdate.duration
      };
      await axios.put(`http://localhost:8181/college/api/v1/courses/${courseId}`, updatedCourse, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      const updatedData = courseData.map(course => {
        if (course.courseId === courseId) {
          return { ...course, ...updatedCourse };
        }
        return course;
      });
      setCourseData(updatedData);
    } catch (error) {
      console.error('Error updating course:', error);
    }
  };

  const handleDelete = async (courseId) => {
    try {
      const token = localStorage.getItem('accessToken');
      await axios.delete(`http://localhost:8181/college/api/v1/courses/${courseId}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      });
      fetchCourses(); 
    } catch (error) {
      console.error('Error deleting course:', error);
    }
  };

  const [editMode, setEditMode] = useState({});

  const toggleEditMode = (courseId) => {
    setEditMode({
      ...editMode,
      [courseId]: !editMode[courseId]
    });
  };

  return (
    <div className='add-course-page-container'>
      <AdminNavbar />
      <div class='add-course-form'>
        <h2>Add Course</h2>
        <div class='input-fields'>
          <select
            name='courseName'
            value={newCourse.courseName}
            onChange={(e) => setNewCourse({...newCourse, courseName: e.target.value})}
          >
            <option value='' disabled>Select Course</option>
            {courseOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <select
            name='college'
            value={newCourse.college}
            onChange={(e) => setNewCourse({...newCourse, college: e.target.value})}
          >
            <option value='' disabled>Select College</option>
            {collegeOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <input type='text' name='fees' placeholder='Fees' value={newCourse.fees} onChange={(e) => setNewCourse({...newCourse, fees: e.target.value})} />
          <select
            name='duration'
            value={newCourse.duration}
            onChange={(e) => setNewCourse({...newCourse, duration: e.target.value})}
          >
            <option value='' disabled>Select Duration</option>
            {durationOptions.map((option, index) => (
              <option key={index} value={option}>{option}</option>
            ))}
          </select>
          <button onClick={addCourse}>Add</button>
        </div>
      </div>
      <div class='course-details-table'>
        <h2>Course Details</h2>
        <table>
          <thead>
            <tr>
              <th>Course ID</th>
              <th>Course</th>
              <th>College</th>
              <th>Fees</th>
              <th>Duration</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
          {Array.isArray(courseData) && courseData.map(course => (
              <tr key={course.courseId}>
              <td>{course.courseId}</td>
              <td>
                {editMode[course.courseId] ? (
                  <select 
                    value={course.courseName} 
                    onChange={(e) => handleChange(e, course.courseId)} 
                    name='courseName'
                  >
                    <option value='' disabled>Select Course</option>
                    {courseOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  course.courseName
                )}
              </td>
              <td>
                {editMode[course.courseId] ? (
                  <select 
                    value={course.college} 
                    onChange={(e) => handleChange(e, course.courseId)} 
                    name='college'
                  >
                    <option value='' disabled>Select College</option>
                    {collegeOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  course.college
                )}
              </td>
              <td>
                   {editMode[course.courseId] ? (
                     <input type='text' value={course.fees} onChange={(e) => handleChange(e, course.courseId)} name='fees' />
                   ) : (
                     course.fees
                   )}
                 </td>
              <td>
                {editMode[course.courseId] ? (
                  <select 
                    value={course.duration} 
                    onChange={(e) => handleChange(e, course.courseId)} 
                    name='duration'
                  >
                    <option value='' disabled>Select Duration</option>
                    {durationOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                ) : (
                  course.duration
                )}
              </td>
              <td>
                <button 
                  onClick={() => {
                    if (editMode[course.courseId]) handleUpdate(course.courseId);
                    toggleEditMode(course.courseId);
                  }}
                >
                  {editMode[course.courseId] ? 'Update' : 'Edit'}
                </button>
                <button onClick={() => handleDelete(course.courseId)}>Delete</button>
              </td>
            </tr>            
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};


export default AddCoursePage;
