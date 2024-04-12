import './App.css';
import React from 'react';
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Network from './components/network';
import Investment from './components/investment';
import Services from './components/services'
import Servicesdata from './components/servicesdata'
function App() {
  const servicesdata= Servicesdata.map(services => {
    return(
      <Services servicename={services.servicename} image={services.image} description={services.description} />
    )
  })
  return (
    <div >
      <Navbar/>
      <Searchbar/>
      <Network/>
      <Investment />
      <h1 id="service-name">Services</h1>
      <div className='services-data'>
        {servicesdata}
      </div>
    </div>
  );
}

export default App;
