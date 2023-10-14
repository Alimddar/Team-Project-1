import React from 'react';

const Verification = () => {
    return (
      <div className="container">
        <div className="card">
          <h1 className="text">Verification</h1>
            <svg className='svg-1' xmlns="http://www.w3.org/2000/svg" width="196" height="16" viewBox="0 0 196 16" fill="none">
                <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 0 15.3033)" fill="#D765EA"/>
                <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 69.4536 15.3033)" fill="#00A3FF"/>
                <rect width="59.4474" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 136.553 15.3033)" fill="#FFAE35"/>
            </svg>

            <svg className='svg-2' xmlns="http://www.w3.org/2000/svg" width="195" height="156" viewBox="0 0 195 156" fill="none">
                <path d="M19.5 156C14.1375 156 9.54526 154.089 5.72326 150.267C1.90126 146.445 -0.00648344 141.856 1.65535e-05 136.5V19.5C1.65535e-05 14.1375 1.91102 9.54526 5.73302 5.72326C9.55501 1.90126 14.144 -0.00648344 19.5 1.65535e-05H175.5C180.862 1.65535e-05 185.455 1.91101 189.277 5.73301C193.099 9.55501 195.006 14.144 195 19.5V136.5C195 141.862 193.089 146.455 189.267 150.277C185.445 154.099 180.856 156.006 175.5 156H19.5ZM19.5 136.5H175.5V39H19.5V136.5ZM87.2625 122.362L52.65 87.75L66.7875 73.6125L87.2625 94.0875L128.212 53.1375L142.35 67.275L87.2625 122.362Z" fill="#7A7CFF"/>
            </svg>

            <p className="instruction-text">
            Please enter the <span className="code-text">verification code</span> we sent to your email.
            </p>
            <input  id="password" required />
            <button type="submit" className="login-btn">Verification</button>
        </div>
      </div>
    );
  }
  

export default Verification;
