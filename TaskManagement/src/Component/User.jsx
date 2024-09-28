import React, { useState } from 'react'
import { useLocation } from 'react-router-dom'

const User = () => {
  let {state} = useLocation();
  let {name} = state.data;
  let [error,setError]=useState("");
  let [data,setData]=useState();

  let handleProfile= async(id)=>{
    console.log("profile clicked")
    try {
      console.log("hgfd")
      const {data1} = await axios.get(`http://localhost:8080/app/find/${id}`);
      console.log('User data:', data1);
      setData(data1);
      console.log(data)
  }
  catch (error) {
    if (error.response) {
        setError(error.response.data.message || 'Login failed');
    } else {
        setError('Network error or server not reachable');
    }
}
};
  return (
    <section className='Userpage'>

      <h2>Welcome to User Page {name}</h2>
      <button onClick={()=>{handleProfile(state.data.id)}}>View Profile</button>
      <button>View Task</button>
      <button>Edit Task</button>
      <button>Assign Task to self</button>
    </section>
  )
}

export default User
