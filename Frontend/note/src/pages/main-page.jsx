import React from 'react';
import { useNavigate } from 'react-router-dom';
import VectorImage from '../assets/imgs/Vector.png'; 

const MainPage = () => {
  const navigate = useNavigate(); 

  const navigateToLogin = () => {
    navigate('/login'); 
  };
  const navigateToRegister = () => {
    navigate('/register'); 
  };
  return (
    <div className={styles.container}>
        <h1 className='text'>Welcome!</h1>
        <img src={VectorImage} alt="Description of image" />
        <button className='btn-1' onClick={navigateToLogin}>login</button>
        <button className='btn-2' onClick={navigateToRegister}>
          <span className='text-gray'>no account yet?</span> 
          <span className='text-blue'>sign up here</span>
        </button>
    </div>
  );
}

export default MainPage;
