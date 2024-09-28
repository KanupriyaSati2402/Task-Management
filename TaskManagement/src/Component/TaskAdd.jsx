import axios from 'axios';
import React, { useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom';

const TaskAdd = () => {
    let navigate = useNavigate();
    let id= useParams();
    let {state}= useLocation();
    const [formData, setFormData] = useState({
        
        title: '',
        description: '',
        status: '',
        date: '',
        priority: '',
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };
    const handleSubmit =async (e) => {
        e.preventDefault();
        try {
            
            const response = await axios.post(`http://localhost:8080/task/save/${id.id}`, formData);
            console.log("Task assigned successful:", response.data);
        } catch (error) {
            console.error("Error Assigning task:", error);
        }
    };  

    let handleSubmitButton=()=>{
        navigate("/admin")
    }
  return (
   <section>
     <form onSubmit={handleSubmit}>
            <h2>Assign Task</h2>
            <div>
                <label htmlFor="title">Title:</label>
                <input
                    type="text"
                    id="title"
                    name="title"
                    value={formData.title}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="description">Description:</label>
                <textarea
                    id="description"
                    name="description"
                    value={formData.description}
                    onChange={handleChange}
                ></textarea>
            </div>
            <div>
                <label htmlFor="status">Status:</label>
                <select
                    id="status"
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                >
                    <option value="">Select status</option>
                    <option value="PENDING">Pending</option>
                    <option value="IN PROGRESS">In Progress</option>
                    <option value="COMPLETED">Completed</option>
                </select>
            </div>
            <div>
                <label htmlFor="date">Date:</label>
                <input
                    type="date"
                    id="date"
                    name="date"
                    value={formData.date}
                    onChange={handleChange}
                />
            </div>
            <div>
                <label htmlFor="priority">Priority:</label>
                <select
                    id="priority"
                    name="priority"
                    value={formData.priority}
                    onChange={handleChange}
                >
                    <option value="">Select priority</option>
                    <option value="LOW">Low</option>
                    <option value="MEDIUM">Medium</option>
                    <option value="HIGH">High</option>
                </select>
            </div>
            <button onClick={handleSubmitButton} type="submit">Submit</button>
        </form>
   </section>
  )
}

export default TaskAdd
