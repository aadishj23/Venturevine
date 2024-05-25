import React from 'react'
import './investment.css';
import Rfund from '../images/raise-fund.jpg'
import { Link } from 'react-router-dom';
import Fund from '../images/funding.jpg'
function Investment() {
  return (
    <div className="raise">
        <div className="raise-cap">
            <h1 className='net-g' id="inv-h1">Raise Capital</h1>
            <p className='net-p' id="inv-p">Explore a myriad of funding opportunities tailored to your startup's needs</p>
            <img src={Rfund} alt="Raise" height="200px" className='raise-img' />
            <button className='net-b' id="grad">Get Started</button>
        </div>
        <div className="start-inv">
            <h1 className='net-g' id="inv-h1">Start Investing</h1>
            <p className='net-p' id="inv-p">Buy shares of your favorite early stage startups and companies</p>
            <img src={Fund} alt="start-investing" height="200px" className='raise-img'/>
            <Link to='/'><button className='net-b' id="grad">Get Started</button></Link>
        </div>
    </div>
  )
}

export default Investment