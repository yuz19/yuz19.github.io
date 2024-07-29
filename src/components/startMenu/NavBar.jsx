import React from 'react'
import { Link,useLocation } from 'react-router-dom'

function NavBar({theme}) {
    const colorLogo = theme === 'light' ? '#1D1A1A' : '#D3DDCE';
  
    const colorLi = {
        color: theme === 'light' ? '#1D1A1A' : '#fff', // Set the color conditionally
      };
  return (
    <nav>
        <div>
            <svg width="80" height="60" viewBox="0 0 111 90" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M95.3906 9.84375H15.6094C13.6907 9.84375 12.1406 11.1006 12.1406 12.6562V77.3438C12.1406 78.8994 13.6907 80.1562 15.6094 80.1562H95.3906C97.3093 80.1562 98.8594 78.8994 98.8594 77.3438V12.6562C98.8594 11.1006 97.3093 9.84375 95.3906 9.84375ZM55.6192 45.5361L34.8067 59.6865C34.2431 60.0732 33.3867 59.748 33.3867 59.1504V53.6396C33.3867 53.4375 33.506 53.2354 33.7011 53.1035L45.6032 45L33.7011 36.8965C33.6014 36.8327 33.5213 36.7511 33.4667 36.6582C33.4122 36.5652 33.3848 36.4633 33.3867 36.3604V30.8496C33.3867 30.252 34.2431 29.9268 34.8067 30.3135L55.6192 44.4551C56.042 44.7363 56.042 45.2549 55.6192 45.5361ZM77.6133 59.1504C77.6133 59.5371 77.2447 59.8535 76.8003 59.8535H56.7466C56.3021 59.8535 55.9336 59.5371 55.9336 59.1504V54.9316C55.9336 54.5449 56.3021 54.2285 56.7466 54.2285H76.8003C77.2447 54.2285 77.6133 54.5449 77.6133 54.9316V59.1504Z" fill={colorLogo}/>
            </svg>
        </div>
        <ul>
          <li className={`${theme === 'light' ? 'light' : 'dark'}`}>

                <Link to="/Projects" >
                    My Projects
                </Link>
            </li>
            <li className={`${theme === 'light' ? 'light' : 'dark'}`}>

                <a href="#card-sans" >
                    About Me
                </a>
            </li>
            <li className={`${theme === 'light' ? 'light' : 'dark'}`}>

                 <a href="#contact">
                    Contact Me
                </a>
            </li>
        </ul>
        
    </nav>
  )
}

export default NavBar