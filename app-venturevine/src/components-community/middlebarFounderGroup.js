import React from 'react'
import './middlebar.css'
function MiddlebarFounderGroup() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Founder's Group</p>
        </div>
    </div>
  )
}

export default MiddlebarFounderGroup