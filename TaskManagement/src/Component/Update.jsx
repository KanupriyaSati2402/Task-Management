import React, { useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios'; // Import axios if you haven't already

const Update = () => {
    let navigate=useNavigate();
    let id= useParams();
    let {state}= useLocation();
    console.log(state)
    console.log(id)
    const [item, setItem] = useState({
        id: state.id,
        name: state.name,
        email: state.email,
        role: state.role,
    });
    const handleChange = (event) => {
        const { name, value } = event.target;
        setItem({
            ...item,
            [name]: value,
        });
    };
    const handleSubmit = async (e,) => {
        e.preventDefault();
        try {
            const response = await axios.put(`http://localhost:8080/app/update`, item);
            console.log("Update successful:", response.data);
            navigate('/admin')
        } catch (error) {
            console.error("Error updating item:", error);
        }
    };
   
    return (
        <div>
            <h1>Update Item</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={item.name}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        value={item.email}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="role">Role:</label>
                    <input
                        type="text"
                        id="role"
                        name="role"
                        value={item.role}
                        onChange={handleChange}
                        required
                    />
                </div>
                <div>
                    <label htmlFor="priority">Priority:</label>
                    <input
                        type="text"
                        id="priority"
                        name="priority"
                        value={item.priority}
                        onChange={handleChange}
                        required
                    />
                </div>
                <button type="submit" >Update</button>
            </form>
        </div>
    );
};

export default Update;
