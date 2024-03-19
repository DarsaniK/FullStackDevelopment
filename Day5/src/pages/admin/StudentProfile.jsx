import React, { useState } from 'react';
import AdminNavbar from '../../components/adminNavbar';
import '../../assets/css/admindash.css';

const StudentProfile = () => {
  const studentData = [
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Dae', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
    { id: 1, name: 'John Doe', fatherName: 'John Doe Sr.', motherName: 'Jane Doe', gender: 'Male', nationality: 'American', dateOfBirth: '1990-01-01', role: 'Student', address: '123 Main St', number: '1234567890', markSSLC: '85%', markHSC: '90%', markDiploma: '80%' },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const [studentsPerPage] = useState(15); 
  const [searchTerm, setSearchTerm] = useState(''); 

  const filteredStudents = studentData.filter(student => {
    return (
      student.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.fatherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.motherName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.gender.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.nationality.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.dateOfBirth.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.role.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.address.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.number.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markSSLC.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markHSC.toLowerCase().includes(searchTerm.toLowerCase()) ||
      student.markDiploma.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const indexOfLastStudent = currentPage * studentsPerPage;
  const indexOfFirstStudent = indexOfLastStudent - studentsPerPage;
  const currentStudents = filteredStudents.slice(indexOfFirstStudent, indexOfLastStudent);

  // Function to handle page change
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  // Calculate total number of pages
  const totalPages = Math.ceil(filteredStudents.length / studentsPerPage);

  // Generate pagination buttons
  const paginationButtons = [];
  for (let i = 1; i <= totalPages; i++) {
    paginationButtons.push(
      <button key={i} onClick={() => paginate(i)} className={currentPage === i ? 'active' : ''}>
        {i}
      </button>
    );
  }

  return (
    <div className='student-profile'>
      <AdminNavbar />
      <h2>Student Profile</h2>
      <div className="search-box">
  <input
    type="text"
    placeholder="Search..."
    value={searchTerm}
    onChange={(e) => setSearchTerm(e.target.value)}
  />
</div>

      <table className='student-table'>
        <thead>
          <tr>
            <th>Name</th>
            <th>Father's Name</th>
            <th>Mother's Name</th>
            <th>Gender</th>
            <th>Nationality</th>
            <th>Date of Birth</th>
            <th>Role</th>
            <th>Address</th>
            <th>Number</th>
            <th>Mark SSLC</th>
            <th>Mark HSC</th>
            <th>Mark Diploma</th>
          </tr>
        </thead>
        <tbody>
          {currentStudents.map(student => (
            <tr key={student.id}>
              <td>{student.name}</td>
              <td>{student.fatherName}</td>
              <td>{student.motherName}</td>
              <td>{student.gender}</td>
              <td>{student.nationality}</td>
              <td>{student.dateOfBirth}</td>
              <td>{student.role}</td>
              <td>{student.address}</td>
              <td>{student.number}</td>
              <td>{student.markSSLC}</td>
              <td>{student.markHSC}</td>
              <td>{student.markDiploma}</td>
            </tr>
          ))}
        </tbody>
      </table>
      {/* Pagination */}
      <div className='pagination'>
        {paginationButtons}
      </div>
    </div>
  );
};

export default StudentProfile;