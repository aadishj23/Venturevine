import React from 'react'
import './rightbar.css'
function Rightbar() {
  return (
    <div className='rightbar'>
        <div className='rightbar-images'>
            <img src={require('../images/notification.png')} alt="Notifications" />
            <img src={require('../images/SMS.png')} alt="Messages" />
            <img src={require('../images/Collaboration.png')} alt="Community" />
        </div>
    </div>
  )
}

export default Rightbar