import React from 'react'
import './network.css'
import netimg from '../images/networking.jpeg'
function Network() {
  return (
    <div className="network">
        <img src={netimg} alt='networking' id="net-img"/>
        <div className='net-name'>
            <h1 className="net-g">Grow Your Network</h1>
            <p className="net-p">Connect with like-minded founders, industry experts, mentors, and potential collaborators in our vibrant founder community. Share experiences, exchange insights, and forge valuable connections that can propel your startup forward.</p>
            <button className="net-b">Join Now</button>
        </div>
    </div>
  )
}

export default Network