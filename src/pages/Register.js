import React,{ useState } from 'react';
import './Register.css';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from "react-router-dom";
import Logo from '../components/Logo';
import axios from '../axios';

function Register() {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        const newUser = {
            "name": name,
            "email": email,
            "password": password
        };

        axios.post('http://localhost:5000/register', newUser)
            .then(response => {           
                console.log(response);
                if(response.status === 200){
                    alert("Account created successfully!");
                    navigate('/login');
                }
            })
            .catch(error => {
                alert(error+ " Server Error / User already exists!");
            }); 
    }


    return (
        <div className='register'>
            <Container>
                <Row>
                    <Col>
                    <Logo />
                        <div className='leftBody'>
                        <div className='registerBody'>
                            <p>Create your school account</p>
                            <div className='registerForm'>
                                <form onSubmit={handleSubmit}>
                                    <p className='formText'>What’s your full name?</p>
                                    <input 
                                        type="text" 
                                        value={name}
                                        required
                                        placeholder="Full Name"
                                        onChange={(e) => setName(e.target.value)}
                                        />
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
                                    <Button type="submit" variant="primary" size="lg">
                                    Create Account
                                    </Button>
                                </form>
                            </div>
                            <Link to="/login" style={{ textDecoration: 'none', color:'black', marginLeft:'15rem' }}> ALREADY REGISTER? LOG IN </Link>
                        </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Register