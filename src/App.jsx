import './App.css';
import { createContext, useState,useEffect } from 'react';
import StartMenu from './components/StartMenu';
import { Route, Routes } from 'react-router-dom';
import StoryMode from './components/StoryMode';
import Projects from './components/Projects';
import animationOnDark from '../public/animationOnDark.svg'
import animationOnLight from '../public/animationOnLight.svg'
import animationOffDark from '../public/animationOffDark.svg'
import animationOffLight from '../public/animationOffLight.svg'

import setCookie  from './hooks/setCookie';
import GetCookie from './hooks/GetCookie';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme')||"dark");
  const toggleTheme = () => {
    setTheme((curr) => (curr === 'light' ? 'dark' : 'light'));
    
  };

  const [isAnimationPaused, setAnimationPaused] = useState(JSON.parse(window.localStorage.getItem('statusAnimation')));

  const toggleAnimation = () => {
    setAnimationPaused((prev) => !prev);
  };
 useEffect(()=>{
    window.localStorage.setItem('statusAnimation',isAnimationPaused)
    
 },[isAnimationPaused])
  useEffect(()=>{
    window.localStorage.setItem('theme',theme)
    
  })
  console.log(isAnimationPaused)
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <div className="App scroll-container " id={theme}>
    
    {theme === 'dark' ? (
      
      isAnimationPaused ?
      (   
        <img src={animationOffDark} alt="" onClick={toggleAnimation}   id="tganimation"/>
      ) :
      (
        <img src={animationOnDark} alt="" onClick={toggleAnimation}   id="tganimation"/>
      )  
    ) 
    : (
      isAnimationPaused ? (
        <img src={animationOffLight} alt="" onClick={toggleAnimation}   id="tganimation"/>

      ) : (
        <img src={animationOnLight} alt="" onClick={toggleAnimation}   id="tganimation"/>
 
      )
    )
  }



 
        <div className={`snowCode ${isAnimationPaused ? 'snowCodePaused' : ''}`}>
          {[...Array(12)].map((_, index) => (
            <img key={index} src="./code.svg" alt="" className="snowImage" />
          ))}
        </div>
        <svg onClick={toggleTheme} id='moon' width="92" height="92" viewBox="0 0 92 92" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M36.4167 7.66666C41.7194 7.66666 46.7028 8.67355 51.3667 10.6873C56.0306 12.7011 60.0875 15.4317 63.5375 18.8792C66.9875 22.3292 69.7194 26.3861 71.7332 31.05C73.7469 35.7139 74.7526 40.6972 74.75 46C74.75 51.3028 73.7431 56.2861 71.7293 60.95C69.7156 65.6139 66.985 69.6708 63.5375 73.1208C60.0875 76.5708 56.0306 79.3027 51.3667 81.3165C46.7028 83.3303 41.7194 84.3359 36.4167 84.3333C33.0306 84.3333 29.7237 83.9014 26.496 83.0377C23.2683 82.1739 20.1863 80.8808 17.25 79.1583C23.1917 75.7083 27.8722 71.0444 31.2915 65.1667C34.7108 59.2889 36.4192 52.9 36.4167 46C36.4167 39.1 34.707 32.7111 31.2877 26.8333C27.8683 20.9555 23.1891 16.2917 17.25 12.8417C20.1889 11.1167 23.2722 9.82355 26.4998 8.96232C29.7275 8.1011 33.0331 7.66921 36.4167 7.66666Z" fill={theme === 'light' ? '#1D1A1A' : '#D3DDCE'} />
        </svg>
        <Routes basename="/"> 
              <Route path="/" element={<StartMenu   setTheme={setTheme}/>}/>
              <Route path="/StoryMode" element={<StoryMode  setTheme={setTheme}/>}/>
              <Route path="/Projects" element={<Projects  setTheme={setTheme}/>}/>
        </Routes>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
