import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Network from './components/network';
import Investment from './components/investment';
import Services from './components/services'
import Servicesdata from './components/servicesdata'
import Footer from './components/footer'
import Signin from './components/signin'
import Signup from './components/signup'
function App() {
  const servicesdata= Servicesdata.map(services => {
    return(
      <Services key={services.id} servicename={services.servicename} image={services.image} description={services.description} />
    )
  })
  const router=createBrowserRouter([
    {
      path: '/',
      element: 
      <div >
        <Navbar/>
        <Searchbar/>
        <Network/>
        <Investment />
        <h1 id="service-name">Services</h1>
        <div className='services-data'>
          {servicesdata}
        </div>
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
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
      {/* <Navbar/>
      <Searchbar/>
      <Network/>
      <Investment />
      <h1 id="service-name">Services</h1>
      <div className='services-data'>
        {servicesdata}
      </div>
      <Footer />   */}
    </div>
  );
}

export default App;
