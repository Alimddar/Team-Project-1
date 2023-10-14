import React from 'react';

const Verified = () => {
    return (
      <div className="container">
        <div className="card">
            <svg xmlns="http://www.w3.org/2000/svg" width="240" height="240" viewBox="0 0 240 240" fill="none">
                <path d="M120 0.833298C54.4585 0.833298 0.833496 54.4583 0.833496 120C0.833496 185.542 54.4585 239.166 120 239.166C185.542 239.166 239.167 185.542 239.167 120C239.167 54.4583 185.542 0.833298 120 0.833298ZM96.1667 179.583L36.5835 120L53.3859 103.197L96.1667 145.859L186.614 55.4116L203.417 72.3333L96.1667 179.583Z" fill="#7A7CFF"/>
            </svg>
            <p className="instruction-text">
                You have successfully registered, please 
                <span className="highlight"> continue </span> 
                to fill in your 
                <span className="highlight"> personal information</span>
            </p>
        </div>
      </div>
    );
}
export default Verified;
