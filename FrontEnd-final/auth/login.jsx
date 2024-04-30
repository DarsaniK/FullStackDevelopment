// import React, { useState } from 'react';
// import '../../assets/css/login.css';
// import Navbarl from '../navbarl';
// import { useNavigate } from 'react-router';

// function Login() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate=useNavigate();
  
//   const handleLogin = () => {
//     e.preventDefault();
//   };
//   const handleregister = () => {
//     navigate('/user/register'); 
//   };
//   const handleforget = () => {
//     navigate('/user/forgetpassword'); 
//   };
//   const handlehome = () => {
//     navigate('/user/home'); 
//   };

//   return (
//     <div className='login'>
//       <div className='login1'>
//         <Navbarl/>
//     <div className="container">
//       <h2>Login</h2>
//       <form onSubmit={handleLogin}>
//         <input
//           type="text"
//           placeholder="Username or Email"
//           value={username}
//           onChange={(e) => setUsername(e.target.value)}
//           required
//         />
//         <input
//           type="password"
//           placeholder="Password"
//           value={password}
//           onChange={(e) => setPassword(e.target.value)}
//           required
//         />
//         <button type="submit" onClick={handlehome}>Login</button>
//       </form>
//       <div className='forgot' onClick={handleforget} style={{cursor:'pointer'}}>Forgot Password?</div>
//       <p>Don't have an account? <span className='register-here' onClick={handleregister} style={{cursor:'pointer'}}>Register here</span></p>
//     </div>
//     </div>
//     </div>
//   );
// }

// export default Login;



// import React, { useState } from 'react';
// import '../../assets/css/login.css';
// import Navbarl from '../navbarl';
// import { useNavigate } from 'react-router';
// import axios from 'axios';

// function Login() {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSignIn = async (e) => {
//     e.preventDefault();
//     const signInData = { email, password };

//     try {
//       const response = await axios.post('http://localhost:8181/college/api/v1/auth/login', signInData);
//       const userData = response.data.data;
//       const role = userData.role;
//       localStorage.setItem('accessToken', userData.accessToken);
//       localStorage.setItem("role", role);
//       navigate("/user/home");
//     } catch (error) {
//       console.error(error);
//       alert('Login failed. Please try again.');
//     }
//   };

//   const handleRegister = () => {
//     navigate('/user/register');
//   };

//   const handleForgetPassword = () => {
//     navigate('/user/forgetpassword');
//   };

//   const handleHome = () => {
//     navigate('/user/home');
//   };

//   return (
//     <div className='login'>
//       <div className='login1'>
//         <Navbarl/>
//         <div className="container">
//           <h2>Login</h2>
//           <form onSubmit={handleSignIn}>
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
//             <button type="submit">Login</button>
//           </form>
//           <div className='forgot' onClick={handleForgetPassword} style={{cursor:'pointer'}}>Forgot Password?</div>
//           <p>Don't have an account? <span className='register-here' onClick={handleRegister} style={{cursor:'pointer'}}>Register here</span></p>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Login;


import React, { useState } from 'react';
import '../../assets/css/login.css';
import Navbarl from '../navbarl';
import { useNavigate } from 'react-router';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    const signInData = { email, password };

    try {
      const response = await axios.post('http://localhost:8181/college/api/v1/auth/login', signInData);
      const userData = response.data.data;
      localStorage.setItem("accessToken", userData.accessToken);
      // localStorage.setItem("role", role);
      navigate("/user/home");
    } catch (error) {
      console.error("Login error:", error);
      alert("Login failed. Please try again.");
    }
  };

  const handleRegister = () => {
    navigate('/user/register');
  };

  const handleForgetPassword = () => {
    navigate('/user/forgetpassword');
  };

  return (
    <div className='login'>
      <div className='login1'>
        <Navbarl/>
        <div className="container">
          <h2>Login</h2>
          <form onSubmit={handleSignIn}>
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
            <button type="submit">Login</button>
          </form>
          <div className='forgot' onClick={handleForgetPassword} style={{cursor:'pointer'}}>Forgot Password?</div>
          <p>Don't have an account? <span className='register-here' onClick={handleRegister} style={{cursor:'pointer'}}>Register here</span></p>
        </div>
      </div>
    </div>
  );
}

export default Login;
