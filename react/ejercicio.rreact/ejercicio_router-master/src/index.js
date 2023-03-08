import React from 'react';
import ReactDOM from 'react-dom/client';
import Home from './Home/home';
import About from './About/about';
import Contact from './Contact/contact';
import Error from './Error/error';


import {createBrowserRouter, RouterProvider} from "react-router-dom";
import ContactHijo from './Contact/contactHijo';

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Error/>,
  },
  {
    path:'/About',
    element:<About/>,
  },
  {
    path:'/Contact',
    element:<Contact/>,
    children:[{
      path: '/Contact/:Contactid',
      element: <ContactHijo></ContactHijo>
    }]
    
  },
]);




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <RouterProvider router={router}></RouterProvider>
);

