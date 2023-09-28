import React from 'react'
import { Link } from 'react-router-dom';
import GitIntro from './GitIntro';
function StoryMode({theme,setTheme}) {
  
  return (
    <div className='Story1'>
    <p className='hello'>Hello ,I am&ensp;<span className={(theme === 'light' ? ' w' : ' b')}>YUZ19</span></p>
    <div className={"line"+(theme === 'light' ? ' w' : ' b')}>
      
    </div>
     <GitIntro theme={theme}/>
    <div className="FrameWrapper">
      <Link to="/Projects">
        <button className={"Frame"+(theme === 'light' ? ' w' : ' b')}>
          NEXT
        </button>
      </Link>
    </div>

    </div>

  )
}

export default StoryMode