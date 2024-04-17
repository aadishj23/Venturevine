import React from 'react'
import './middlebar.css'
function MiddlebarmyCommunity() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>My Community</p>
        </div>
    </div>
  )
}

export default MiddlebarmyCommunity