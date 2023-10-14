import React from 'react'
const persinf = () => {
  return (
    <div className="container">
      <div className="card">
        <h1 className="text">Personal Information</h1>
        <svg xmlns="http://www.w3.org/2000/svg" width="196" height="16" viewBox="0 0 196 16" fill="none">
            <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 0 15.3033)" fill="#D765EA"/>
            <rect width="60.036" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 69.4536 15.3033)" fill="#00A3FF"/>
            <rect width="59.4474" height="15.3033" rx="7.65165" transform="matrix(1 0 0 -1 136.553 15.3033)" fill="#FFAE35"/>
        </svg>
        <form className="personal-form">
          <div className="form-control">
            <label htmlFor="">NAME</label>
            <input type="text" id="name" required />
          </div>
          <div className="form-control">
            <label htmlFor="">SURNAME</label>
            <input type="text" id="surname" required />
          </div>
          <div className="form-control">
            <label htmlFor="">NICKNAME</label>
            <input type="text" id="nickname" required />
          </div>
          <button type="submit" className="next-page">Next</button>
        </form>
      </div>
    </div>
  )
}

export default persinf