import React from 'react';
import './Register.css';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/Grid';


function Register() {
  return (
    <div className='register'>
        <Grid container spacing={2}>
            <Grid item xs={6}>
                <div className='logo'>
                    <img src='https://goglobiliti.com/assets/images/globiliti-logo2x.png' alt='globiliti logo' /> 
                </div>
            </Grid>
            <Grid item xs={6}>
                <Item>
                    <div className='image'>
                        <img src='https://goglobiliti.com/assets/images/onboarding-1.png' alt='image' />
                    </div>
                </Item>
            </Grid>
        </Grid>
    </div>
  )
}

export default Register