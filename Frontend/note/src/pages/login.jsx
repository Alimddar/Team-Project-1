import React from 'react';

const Login = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="text">Welcome Back !</h1>
        <form className="login-form">
          <div className="form-control">
            <label htmlFor="email">EMAIL</label>
            <input type="email" id="email" required />
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

export default Login;
