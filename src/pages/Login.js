import React, { useState } from 'react';
import Logo from '../components/Logo';
import './Login.css';
import { Link, useNavigate } from "react-router-dom";
import axios from '../axios';

function Login(isLoggedIn) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    // if(isLoggedIn){
    //     navigate('/dashboard');
    // } else {
    //     console.log('Not Logged In!');
    // }


    const handleSubmit = (e) => {
        e.preventDefault();

        const user = {
            "email": email,
            "password": password
        };

        axios.post('http://localhost:5000/login', user)
            .then(response => {           
                console.log(response);
                if(response.status === 200){
                    if(response.data.length === 0){
                        alert("Check Credentials, Email/Password incorrect!")
                    } else{
                        isLoggedIn = true;
                        navigate('/dashboard');
                    }
                    
                }
            })
            .catch(error => {
                alert(error+ " Server Error");
            });
    }
  return (
    <div>
        <Logo />
        <form onSubmit={handleSubmit} className='loginForm'>
            <p className='formText'>Email</p>
            <input 
                type="email" 
                value={email}
                required
                placeholder="Email"
                onChange={(e) => setEmail(e.target.value)}
                />
            <p className='formText'>Password</p>
            <input 
                type="password" 
                value={password}
                required
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
                />
            <button type="submit" variant="primary" size="lg">
            Log In
            </button>
        </form>
        <div className='link'>
            <Link to="/" style={{
             textDecoration: 'none',
              color:'black',
              marginLeft:'15rem' }}> CREATE NEW ACCOUNT </Link>
        </div>
        {
            
            // isLoggedIn.isLoggedIn? navigate('/dashboard'): console.log('not logged in')
        }
    </div>
  )
}

export default Login