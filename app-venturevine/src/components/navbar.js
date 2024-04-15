import React from "react";
import {Link} from 'react-router-dom'
import Circlelogo from '../images/logoc.png';
import './navbar.css'
export default function Navbar(){
    return(
        <div className="header">
            <div className="navbar">
                <div className="icon-name">
                    <img src={Circlelogo} alt="Logo" id="logo" />
                    <h3 id="nav-name">VentureVine</h3>
                </div>
                <div className="nav-menu">
                    <ul type="none"> 
                        <li>Companies</li>
                        <li>Community</li>
                        <li>Services</li>
                        <li>Raise Capital</li>
                    </ul>
                </div>
                <div className="nav-buttons">
                    <a href="Signin"><button> Sign In</button></a>
                    <a href='Signup'><button id="sign-up"> Sign Up</button></a>
                </div>
            </div>
            <div className="nav-below">
                <h1>Fueling your</h1>
                <h1>Entrepreneurial Journey...</h1>
            </div>
            <div className="nav-below-2">
                <p>Whether you're just starting out with a groundbreaking idea or you're looking to scale your startup to new heights, VentureVine is here to help.</p>
            </div>
        </div>
    );
}