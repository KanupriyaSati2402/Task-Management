
import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    let navigate =useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const {data} = await axios.get(`http://localhost:8080/app/login/${email}/${password}`);
            console.log('Login successful:', data);
            let {role}=data.data;
            if(role == "ADMIN"){
                navigate("/admin");
            }
            else if(role == "USER"){
                navigate("/user" , {state:data});
            }
        
        } catch (error) {
            if (error.response) {
                setError(error.response.data.message || 'Login failed');
            } else {
                setError('Network error or server not reachable');
            }
        }
    };
    return (
        <div className='loginpage'>
            <form className="login" onSubmit={handleLogin}>
                <h2>Login </h2>
                <div>
                    <label>Email:</label>
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div>
                    <label>Password:</label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button className='login-btn' type="submit">Login</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Login;
  