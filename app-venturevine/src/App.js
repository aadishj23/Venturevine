import './App.css';
import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Navbar from './components/navbar'
import Searchbar from './components/searchbar'
import Network from './components/network';
import Investment from './components/investment';
import Mainservices from './components/mainservices';
import Footer from './components/footer'
import Signin from './components/signin'
import Signup from './components/signup'
import Middlebar from './components-community/middlebar'
import Sidebar from './components-community/sidebar'
import Rightbar from './components-community/rightbar'
import Middlebardiscover from './components-community/middlebar-discover';
import MiddlebarRequests from './components-community/middlebarRequests';
import MiddlebarmyCommunity from './components-community/middlebarmyCommunity';
import MiddlebarExperts from './components-community/middlebarExperts';
import MiddlebarFounderGroup from './components-community/middlebarFounderGroup';
import MiddlebarPost from './components-community/middlebarPost';
import MiddlebarEvents from './components-community/middlebarEvents';
import MiddlebarSettings from './components-community/middlebarSettings';
import RightbarCollaboration from './components-community/rightbarcollaboration';
import RightbarMessages from './components-community/rightbarMessages';
import RightbarNotifications from './components-community/rightbarNotifications';
import Landing from './components-investing/landing';
function App() {
  const router=createBrowserRouter([
    {
      path: '/',
      element: 
      <div >
        <Navbar/>
        <Searchbar/>
        <Network/>
        <Investment />
        <Mainservices />
        <Footer />  
      </div>
    },
    {
      path: '/Signin',
      element: <Signin />
    },
    {
      path: "/Signup",
      element: <Signup />
    },
    {
      path: "/community",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <Middlebar />
            <Rightbar />
          </div>
        </div>
    }, 
    {
      path: "/community/discover",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <Middlebardiscover />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: '/community/myCommunity',
      element:
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarmyCommunity />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: '/community/requests',
      element:
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarRequests />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/experts",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarExperts />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/foundergroup",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarFounderGroup />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/post",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarPost />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/events",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarEvents />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/settings",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <MiddlebarSettings />
            <Rightbar />
          </div>
        </div>
    },
    {
      path: "/community/notifications",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <Middlebardiscover />
            <RightbarNotifications />
          </div>
        </div>
    },{
      path: "/community/unreadMessages",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <Middlebardiscover />
            <RightbarMessages />
          </div>
        </div>
    },
    {
      path: "/community/collaboration",
      element: 
        <div className='community'>
          <div className='cm-divide'>
            <Sidebar />
            <Middlebardiscover />
            <RightbarCollaboration />
          </div>
        </div>
    },
    {
      path: "/investments",
      element: 
        <div>
          <Landing />
        </div>
    }
  ])

  return (
    <div >
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
