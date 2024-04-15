import React from 'react'
import Sidebar from './components-community/sidebar'
import Middlebar from './components-community/middlebar'
import Rightbar from './components-community/rightbar'
import './community.css'
function Community() {
  return (
    <div className='community'>
        <div className='cm-divide'>
            <Sidebar />
            <Middlebar />
            <Rightbar />
        </div>
    </div>
  )
}

export default Community