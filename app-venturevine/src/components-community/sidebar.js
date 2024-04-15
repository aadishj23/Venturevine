import React from 'react'
import './sidebar.css'
function Sidebar() {
  return (
    <div>
        <div className='community-heading'>
            <img src={require('../images/logoc.png')} alt="logo"  height='55px'/>
            <div>
                <h3>The Venturevine</h3>
                <h3>Community</h3>
            </div>
        </div>
        <div className='profile'>
            <img src={require('../images/profile-image.png')} alt="profile image" />
            <p>Name</p>
            <p>id</p>
            <div className='profile-stats'>
                <div>
                    <p>23</p>
                    <p>Following</p>
                </div>   
                <div>
                    <p>107</p>
                    <p>Followers</p>
                </div>
                <div>
                    <p>4</p>
                    <p>Posts</p>
                </div>
            </div>
        </div>
        <div className='community-options'>
            <img src={require('../images/discover.png')} alt="discover" />
            <h4>Discover</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/My Community.png')} alt="discover" />
            <h4>My Community</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/Requests.png')} alt="discover" />
            <h4>Requests</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/Experts.png')} alt="discover" />
            <h4>Experts</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/Founder group.png')} alt="discover" />
            <h4>Founder's Group</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/Post.png')} alt="discover" />
            <h4>Post</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/Events.png')} alt="discover" />
            <h4>Events</h4>
        </div>
        <div className='community-options'>
            <img src={require('../images/settings.png')} alt="discover" />
            <h4>Settings</h4>
        </div>
    </div>
  )
}

export default Sidebar