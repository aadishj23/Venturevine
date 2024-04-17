import React from 'react'
import './middlebar.css'
function MiddlebarExperts() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Experts</p>
        </div>
    </div>
  )
}

export default MiddlebarExperts