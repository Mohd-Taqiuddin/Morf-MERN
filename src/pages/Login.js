import React, { useState } from 'react';
import Logo from '../components/Logo';
import './Login.css';
import {Link} from "react-router-dom";;

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {}
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
        
    </div>
  )
}

export default Login