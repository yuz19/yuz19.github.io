import React from 'react'
import pro from '../../assets/ME.png'
import { Link,useLocation } from 'react-router-dom'
 
function Start({theme}) {
  const spanStyle = {
    color: theme === 'light' ? '#1D1A1A' : '#D3DDCE', // Set the color conditionally
  };
  const am = {
    color: theme === 'light' ? '#1D1A1A' : '#fff', // Set the color conditionally
  };

  return (
    <div className='poro'>
        <div  className='aatrox'>
            <img src={pro} alt="dsds" />
    
            <div className="wrapper">
              <div className="static-txt" style={am}>I'm</div>
              <ul className={"dynamic-txts " + (theme === 'light' ? ' dynamic-txtsW ' : 'dynamic-txtsB')} >
              <li style={spanStyle}>
                <span >Meridja Nabil</span>
              </li>

                <li style={am}>a <span>Designer</span></li>
                <li style={am}>a <span>Developer</span></li>
               
              </ul>
            </div>
            
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