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
import CommunityLayoutWithRightbar from './components-community/CommunityLayoutWithRightbar';

function App() {
  const router=createBrowserRouter([
    {
      path: '/',
      element: 
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
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
      element: 
        <div className="min-h-screen flex items-center justify-center">
          <Signin />
        </div>
    },
    {
      path: "/Signup",
      element: 
        <div className="min-h-screen flex items-center justify-center">
          <Signup />
        </div>
    },
    {
      path: "/community",
      element: <CommunityLayoutWithRightbar />
    },
    {
      path: "/community/:section",
      element: <CommunityLayoutWithRightbar />
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
