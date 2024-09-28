import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';
import signup from './assests/signup.png'

const SignUp= () => {
   let navigate= useNavigate();
    const [user, setUser] = useState({
        name: '',
        email: '',
        password: '',
        role: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        console.log(e.target)
        setUser({
            ...user,
            [name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:8080/app/save', user);
            console.log('User created:', response.data);
            navigate("/login");
                } catch (error) {
            console.error('There was an error creating the user!', error);
        }
    };

  
    return (
      <section className='signup'>

              <img className='photo-signup'src={signup} />
        
        <form onSubmit={handleSubmit}>
              <h2>SignUp</h2>
              
            
            <div>
                <label>Name:</label>
                <input
                    type="text"
                    name="name"
                    value={user.name}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Email:</label>
                <input
                    type="email"
                    name="email"
                    value={user.email}
                    onChange={handleChange}
                    required
                />
            </div>
           
            <div>
                <label>Password:</label>
                <input
                    type="text"
                    name="password"
                    value={user.password}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Role:</label>
                <input
                    type="text"
                    name="role"
                    value={user.role}
                    onChange={handleChange}
                    required
                />
            </div>
        <button onSubmit={handleSubmit} className="submit">Submit</button>
        </form>
        </section>
    );
};

export default SignUp;