import React, { useState } from 'react';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/admindash.css';

const AdminDashboard = () => {
  const studentData = [
    { id: 1, name: 'John Doe', institution: 'ABC University', course: 'Engineering', fees: '$1000', cutoff: '85%', status: 'Pending' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
    { id: 2, name: 'Jane Smith', institution: 'XYZ College', course: 'Computer Science', fees: '$1200', cutoff: '90%', status: 'Approved' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(15); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredStudents = studentData.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.institution.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.course.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.fees.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.cutoff.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.status.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
    window.scrollTo(0, 0); 
  };

  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='admin-dashboard'>
      <AdminNavbar />
      <h2>Student Approval Dashboard</h2>
      <input
        type='text'
        placeholder='Search...'
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <table className='student-table'>
        <thead>
          <tr>
            <th>Student Name</th>
            <th>Institution Name</th>
            <th>Course Name</th>
            <th>Fees</th>
            <th>Cut-Off Mark</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.institution}</td>
              <td>{student.course}</td>
              <td>{student.fees}</td>
              <td>{student.cutoff}</td>
              <td>
                {student.status === 'Pending' && (
                  <button className='approve-btn'>Approve</button>
                )}
                {student.status === 'Approved' && (
                  <button className='approved-btn'>Approved</button>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className='pagination11'>
        {paginationButtons}
      </div>
    </div>
  );
};

export default AdminDashboard;