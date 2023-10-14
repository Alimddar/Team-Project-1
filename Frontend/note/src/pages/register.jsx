import React from 'react';

const Register = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="text">Welcome Back !</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="196" height="16" viewBox="0 0 196 16" fill="none">
            <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 0 15.3033)" fill="#D765EA"/>
            <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 69.4534 15.3033)" fill="#00A3FF"/>
            <rect width="59.4474" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 136.552 15.3033)" fill="#FFAE35"/>
        </svg>
        <form className="login-form">
          <div className="form-control">
            <label htmlFor="email">EMAIL</label>
            <input id="email" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" required />
          </div>
          <div className="form-control">
            <label htmlFor="password">PASSWORD</label>
            <input type="password" id="password" required />
          </div>
          <button type="submit" className="login-btn">Log In</button>
        </form>
        <hr />
        <a href="/forgot-password" className="forgot-password">FORGOT PASSWORD</a>
      </div>
    </div>
  );
}

export default Register;