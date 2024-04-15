import React from 'react'
import './middlebar.css'
function Middlebar() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'></div>
    </div>
  )
}

export default Middlebar