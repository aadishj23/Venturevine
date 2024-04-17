import React from 'react'
import './middlebar.css'
function MiddlebarRequests() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Requests</p>
        </div>
    </div>
  )
}

export default MiddlebarRequests