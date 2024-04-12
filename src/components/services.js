import React from 'react'
import './services.css'
import Servicesimage from '../images/export.jpg'
function Services(props) {
  return (
    <div className="cards">
        <h1 className='card-h1'>{props.servicename}</h1>
        <img className="card-img"src={Servicesimage}  height="100px"/>
        <p className='card-desc'>{props.description}</p>
        <button className='card-btn'>Explore Now</button>
    </div>
  )
}

export default Services