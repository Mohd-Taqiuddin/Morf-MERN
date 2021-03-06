import React from 'react';
import './Logo.css';

function Logo() {
  return (
    <div>
        <div className='leftBody'>
        <div className='logo'>
            <img src='https://goglobiliti.com/assets/images/globiliti-logo2x.png' alt='globiliti logo' /> 
        </div>
        <div className='registerHeading'>Welcome to Globiliti!</div>
        </div>
        <div className='image'>
            <img src='https://goglobiliti.com/assets/images/onboarding-1.png' alt='img' />
        </div>
    </div>
  )
}

export default Logo