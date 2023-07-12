import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Project from './page/Project.jsx';
import Home from './page/Home.jsx';
import Skill from './page/Skill.jsx';
import Work from './page/Work.jsx';
import About from './page/About.jsx';

const router = createBrowserRouter([
  {
    path:"/",
    element:<Home/>,
  },
  {
    path:"/projects",
    element:<Project/>
  },
  {
    path:"/skills",
    element:<Skill/>
  },
  {
    path:"/works",
    element:<Work/>
  },
  {
    path:"/about",
    element:<About/>
  }
]);


ReactDOM.createRoot(document.getElementById('root')).render( 
  <RouterProvider router={router}/>
);
