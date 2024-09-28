import React from 'react'
import { useLocation } from 'react-router-dom';

const UserDetails = () => {
    let {name,email,password,role,tasks}=useLocation();
  return (
   <section>

   </section>
  )
}

export default UserDetails
