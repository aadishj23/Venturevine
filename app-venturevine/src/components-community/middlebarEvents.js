import React from 'react'
import './middlebar.css'
function MiddlebarEvents() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Events</p>
        </div>
    </div>
  )
}

export default MiddlebarEvents