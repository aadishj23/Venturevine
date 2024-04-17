import React from 'react'
import './rightbar.css'
import { Link } from 'react-router-dom'
function RightbarMessages() {
  return (
    <div className='rightbar'>
        <div className='rightbar-images'>
            <Link to='/community/notifications'><img src={require('../images/notification.png')} alt="Notifications" /></Link>
            <Link to='/community/unreadMessages'><img src={require('../images/SMS.png')} alt="Messages" /></Link>
            <Link to='/community/collaboration'><img src={require('../images/Collaboration.png')} alt="Community" /></Link>
        </div>
        <div className='rightbar-elements'>Unread Messages</div>
    </div>
  )
}

export default RightbarMessages