import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import layout from '../assests/Layout.png'

const Layout = () => {
    // let navigate = useNavigate();
    // let handleSubmit=()=>{
    //     navigate('/signup')
    // }
  return (

    <div className="landing-container">
      {/* Main Content */}
      <div className="content-section">
        <div className="text-section">
          <h1 className="heading">Project <span>Management</span></h1>
          <p className="description">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna.
          </p>
          <button className="cta-button">Get started!</button>
         <Link to="/signup"><button className="cta-button">SignUp</button> </Link> 
        </div>

        <div className="image-section">
          <img src={layout} alt="To-Do" className="todo-image" />
        </div>
      </div>
    </div>
  );
};

export default Layout;
