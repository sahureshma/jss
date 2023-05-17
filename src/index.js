import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import Login from '../src/components/pages/Login/Login'
import Register from '../src/components/pages/Register/Register'

import AboutUs from './components/pages/About/About';
import Home from './components/pages/Home/Home';


import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";



const router = createBrowserRouter([

  {
    path: "/",
    element: <App/>
  },

  {
    path : '/login' ,
    element : <Login/>
  },
  {
    path : '/register' ,
    element : <Register/>
  },
  {
    path :'/About',
    element : <AboutUs/>
  },
  {
    path :'/Home',
    element : <Home/>
  }

]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);


reportWebVitals();
