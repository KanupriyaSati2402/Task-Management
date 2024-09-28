import { createBrowserRouter } from "react-router-dom";
import SignUp from "../SignUp";
import Login from "../Login";
import Admin from "../Component/Admin";
import User from "../Component/User";
import TaskAdd from "../Component/TaskAdd";
import Update from "../Component/Update";
import Layout from "../Component/Layout";
import UserDetails from "../Component/UserDetails";

export let Projectrouting = createBrowserRouter([
 { 
  path:"/",
  element:<Layout/>,
 },
    {
        path: "/signup",
        element: <SignUp/>,
      },
      {
        path: "/login",
        element: <Login/>,
      },
      {
        path:"/admin",
        element: <Admin/>,
      },
      {
        path:"/user",
        element: <User/>,
      },
      {
        path:"/addtask/:id",
        element: <TaskAdd/>,
      },
      {
        path:"/update/:id",
        element: <Update/>,
      },
      {
        path:"/userdetails",
        element: <UserDetails/>,
      }
      
]);
