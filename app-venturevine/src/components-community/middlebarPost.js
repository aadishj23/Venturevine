import React from 'react'
import './middlebar.css'
function MiddlebarPost() {
  return (
    <div className='middlebar'>
        <div>
            <input type="text" id="search-comm" placeholder="🔍 Search by...." />
        </div>
        <div className='community-area'> 
            <div className='sub-com-area'>
              <textarea placeholder='Enter something about your post' name="" id="" />
              <fieldset>
                <legend>
                  Upload your Image 
                </legend>
                <input type="file" />
              </fieldset>
             

            </div>
        </div>
    </div>
  )
}

export default MiddlebarPost