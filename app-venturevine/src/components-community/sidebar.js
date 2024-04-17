import React from 'react'
import './sidebar.css'
import {Link} from 'react-router-dom'
function Sidebar() {
  return (
    <div>
        <div className='community-heading'>
            <Link to='/'><img src={require('../images/back-button.jpg')} id='back-button' alt="Back-Button" height='50px'/></Link>
            <img src={require('../images/logoc.png')} alt="logo"  height='55px'/>
            <div>
                <h3>The Venturevine</h3>
                <h3>Community</h3>
            </div>
        </div>
        <div className='profile'>
            <img src={require('../images/profile-image.png')} alt="profile image" />
            <p>Name</p>
            <p>id@123</p>
            <div className='profile-stats'>
                <div>
                    <p className='stats'>23</p>
                    <p>Following</p>
                </div>   
                <div>
                    <p className='stats'>107</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p className='stats'>4</p>
                    <p>Posts</p>
                </div>
            </div>
        </div>
        <div className='community-features'>
            <div className='community-options'>
                <img src={require('../images/discover.png')} alt="discover" />
                <Link to='/community/discover'><h4>Discover</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/My Community.png')} alt="My Community" />
                <Link to='/community/myCommunity'><h4>My Community</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/Requests.png')} alt="Requests" />
                <Link to='/community/requests'><h4>Requests</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/Experts.png')} alt="Experts" />
                <Link to='/community/experts'><h4>Experts</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/Founder group.png')} alt="Founder's Group" />
                <Link to='/community/foundergroup'><h4>Founder's Group</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/Post.png')} alt="Post" />
                <Link to='/community/post'><h4>Post</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/Events.png')} alt="events" />
                <Link to='/community/events'><h4>Events</h4></Link>
            </div>
            <div className='community-options'>
                <img src={require('../images/settings.png')} alt="Settings" />
                <Link to='/community/settings'><h4>Settings</h4></Link>
            </div>
        </div>
    </div>
  )
}

export default Sidebar