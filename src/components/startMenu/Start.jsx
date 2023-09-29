import React from 'react'
import pro from '../../assets/ME.png'
import { Link,useLocation } from 'react-router-dom'
 
function Start({theme}) {
  const spanStyle = {
    color: theme === 'light' ? '#1D1A1A' : '', // Set the color conditionally
  };
  return (
    <div className='poro'>
        <div className=''>
            <img src={pro} alt="dsds" />
            <p>Hello I am <span  style={spanStyle}>YUZ19</span></p>
        </div>
        <Link to="/StoryMode">
            <button>
                START
            </button>
        </Link>
        
    </div>
  )
}

export default Start