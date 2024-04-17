import React from 'react'
import './middlebar.css'
function Middlebardiscover() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <p>Discover</p>
        </div>
    </div>
  )
}

export default Middlebardiscover