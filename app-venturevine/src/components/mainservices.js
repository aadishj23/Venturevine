import React from 'react'
import './services.css'
import Services from './services'
import Servicesdata from './servicesdata'
function Mainservices() {
  const servicesdata= Servicesdata.map(services => {
    return(
      <Services key={services.id} servicename={services.servicename} image={services.image} description={services.description} />
  )})
  return (
    <div className='services-main'>
      <h1 id="service-name">Services</h1>
      <div className='services-data'>
          {servicesdata}
      </div>
    </div>
  )
}

export default Mainservices