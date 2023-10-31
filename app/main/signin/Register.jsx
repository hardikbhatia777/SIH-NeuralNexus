import '../signin/Register.css'
import React from 'react';

const Login = () => {
  return (
    <div className="login-container">
      <h1>Register</h1>
      <form>
        <input type="email" placeholder="Email" />
        <input type="password" placeholder="Password" />
        <button>Register</button>
      </form>
      
      <div className="or-divider">
        <div className="divider-line"></div>
        <p>Or</p>
        <div className="divider-line"></div>
      </div>
      <div className='tex'>
        Sign in using
      </div>
      <div className="google-signin">
        
        
        <div className='logo'>
        <img
          src="https://img.icons8.com/fluent/48/000000/google-logo.png"
          alt="Google Logo"
        /></div>
      </div>
    </div>
  );
};

export default Login;
