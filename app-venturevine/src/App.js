import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Network from './components/network';
import Investment from './components/investment';
import Mainservices from './components/mainservices';
import Footer from './components/footer'
import Signin from './components/signin'
import Signup from './components/signup'
import Community from './community';
function App() {
  const router=createBrowserRouter([
    {
      path: '/',
      element: 
      <div >
        <Navbar/>
        <Searchbar/>
        <Network/>
        <Investment />
        <Mainservices />
        <Footer />  
      </div>
    },
    {
      path: '/Signin',
      element: <Signin />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/community",
      element: <Community />
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
