// import React, { useState } from 'react';
// import '../../assets/css/register.css'; 
// import Navbarl from '../navbarl';
// import { useNavigate } from 'react-router';
// import { useDispatch } from 'react-redux';
// import { setUserDetails } from '../../redux/Userslice';
// import axios from 'axios';

// function Register() {
//   const [username, setUsername] = useState('');
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const [number, setMobileNumber] = useState('');
//   const navigate = useNavigate();
//   const dispatch = useDispatch(); // Initialize useDispatch hook

//   const handleRegister = () => {
//     // // Dispatch action to update Redux store with user details
//     // dispatch(setUserDetails({ name: username, email, number }));
    
//     // // Store data in localStorage (if needed)
//     // localStorage.setItem('signupdata.email', email);
//     // localStorage.setItem('signupdata.name', username);
//     // localStorage.setItem('signupdata.mobile', number);
    
//     // alert("Registered Successfully");
//     // navigate("/user/home"); // Redirect to home page after registration
//     const handleRegister = async () => {
//       try {
//         const response = await axios.post('http://localhost:8181/college/api/v1/auth/register', signUpData);
//         const userData = response.data.data; 
//         dispatch(setUserDetails(userData));
    
//         if (response.ok) {
//           // Registration successful
//           const responseData = await response.json();
//           // Dispatch action to update Redux store with user details if needed
//           dispatch(setUserDetails({ name: username, email, number }));
          
//           // Store data in localStorage if needed
//           localStorage.setItem('signupdata.email', email);
//           localStorage.setItem('signupdata.name', username);
//           localStorage.setItem('signupdata.mobile', number);
    
//           alert("Registered Successfully");
//           navigate("/user/home"); // Redirect to home page after registration
//         } else {
//           // Registration failed
//           const errorData = await response.json();
//           alert(errorData.message); // Display error message
//         }
//       } catch (error) {
//         console.error('Error registering:', error);
//         alert('Registration failed. Please try again.'); // Display generic error message
//       }
//     };
//   };

//   const handleLogin = () => {
//     navigate("/user/login");
//   };

//   return (
//     <div className='register'>
//         <Navbarl/>
//       <div className='register1'>
//         <div className="container">
//           <h2>Register</h2>
//           <form onSubmit={handleRegister}>
//             <input
//               type="text"
//               placeholder="Username"
//               value={username}
//               onChange={(e) => setUsername(e.target.value)}
//               required
//             />
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//             />
//             <input
//               type="number"
//               placeholder="Mobile number"
//               value={number}
//               onChange={(e) => setMobileNumber(e.target.value)}
//               required
//             />
//             <button type="submit">Register</button>
//           </form>
//           <p>Already have an account? <span className="loginhere" onClick={handleLogin} style={{cursor:'pointer'}}>Login here</span></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Register;


import React, { useState } from 'react';
import '../../assets/css/register.css'; 
import Navbarl from '../navbarl';
import { useNavigate } from 'react-router';

function Register() {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [number, setMobileNumber] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    
    console.log("Sending register request with data:", { username, email, password, number });

    try {
      const response = await fetch('http://localhost:8181/college/api/v1/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          name:username,
          email,
          password,
          number 
        })
      });
      
      if (response.ok) {
        const data = await response.json();
        // Assuming your backend returns a message upon successful registration
        alert(data.message);
        navigate("/user/login");
      } else {
        // Handle errors
        const errorData = await response.json();
        alert(errorData.message);
      }
    } catch (error) {
      console.error('Error registering user:', error);
      alert('Something went wrong. Please try again later.');
    }
  };

  const handleLogin = () => {
    navigate("/user/login");
  };

  return (
    <div className='register'>
        <Navbarl/>
      <div className='register1'>
        <div className="container">
          <h2>Register</h2>
          <form onSubmit={handleRegister}>
            <input
              type="text"
              placeholder="Username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <input
              type="number"
              placeholder="Mobile number"
              value={number}
              onChange={(e) => setMobileNumber(e.target.value)}
              required
            />
            <button type="submit">Register</button>
          </form>
          <p>Already have an account? <span className="loginhere" onClick={handleLogin} style={{cursor:'pointer'}}>Login here</span></p>
        </div>
      </div>
    </div>
  );
}

export default Register;