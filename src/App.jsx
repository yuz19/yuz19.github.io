import './App.css';
import { createContext, useState,useEffect } from 'react';
import StartMenu from './components/StartMenu';
import { Route, Routes } from 'react-router-dom';
import StoryMode from './components/StoryMode';
import Projects from './components/Projects';
import setCookie  from './hooks/setCookie';
import GetCookie from './hooks/GetCookie';
export const ThemeContext = createContext(null);

function App() {
  const [theme, setTheme] = useState(window.localStorage.getItem('theme'));
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
      <div className="App" id={theme}>
    
    {theme === 'dark' ? (
      
      isAnimationPaused ?
      (
        <svg  xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"   onClick={toggleAnimation}   id="tganimation">
          <g id="clarityAnimationLine0" fill="#D3DDCE">
            <path d="M10.16 31.71a4.4 4.4 0 0 1-4.64-1a4.34 4.34 0 0 1-1.29-3.11a4.41 4.41 0 0 1 .18-1.2a11.61 11.61 0 0 1-1-2.56a6.4 6.4 0 0 0 9.33 8.63a11.55 11.55 0 0 1-2.58-.76Zm8.25-4.03a7.61 7.61 0 0 1-9.08-1.26a7.58 7.58 0 0 1-1.27-9.06a14.26 14.26 0 0 1-.37-2.85a9.58 9.58 0 0 0 .22 13.33a9.63 9.63 0 0 0 13.35.22a14.46 14.46 0 0 1-2.85-.38Z" />
            <path d="M21.66 26.21a12.1 12.1 0 1 1 8.57-3.54a12.11 12.11 0 0 1-8.57 3.54Zm0-22.21a10.11 10.11 0 0 0-10.12 10.11a10 10 0 0 0 3 7.14a10.12 10.12 0 0 0 14.31 0A10.11 10.11 0 0 0 21.66 4Zm7.86 18Z" />
          </g>
        </svg>
      ) :
      (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"   onClick={toggleAnimation}  id="tganimation">
          <g id="clarityAnimationSolid0" fill="#D3DDCE">
            <path d="M3.5 23.77a6.41 6.41 0 0 0 9.33 8.67a11.65 11.65 0 0 1-9.33-8.67Z" />
            <path d="M7.68 14.53a9.6 9.6 0 0 0 13.4 13.7a14.11 14.11 0 0 1-13.4-13.7Z" />
            <path d="M21.78 2A12.12 12.12 0 1 1 9.66 14.15A12.12 12.12 0 0 1 21.78 2" />
          </g>
        </svg>
      )  
    ) 
    : (
      isAnimationPaused ? (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"   onClick={toggleAnimation}   id="tganimation">
          <g id="clarityAnimationLine0" fill="#1D1A1A">
            <path d="M10.16 31.71a4.4 4.4 0 0 1-4.64-1a4.34 4.34 0 0 1-1.29-3.11a4.41 4.41 0 0 1 .18-1.2a11.61 11.61 0 0 1-1-2.56a6.4 6.4 0 0 0 9.33 8.63a11.55 11.55 0 0 1-2.58-.76Zm8.25-4.03a7.61 7.61 0 0 1-9.08-1.26a7.58 7.58 0 0 1-1.27-9.06a14.26 14.26 0 0 1-.37-2.85a9.58 9.58 0 0 0 .22 13.33a9.63 9.63 0 0 0 13.35.22a14.46 14.46 0 0 1-2.85-.38Z" />
            <path d="M21.66 26.21a12.1 12.1 0 1 1 8.57-3.54a12.11 12.11 0 0 1-8.57 3.54Zm0-22.21a10.11 10.11 0 0 0-10.12 10.11a10 10 0 0 0 3 7.14a10.12 10.12 0 0 0 14.31 0A10.11 10.11 0 0 0 21.66 4Zm7.86 18Z" />
          </g>
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36"   onClick={toggleAnimation}   id="tganimation">
          <g id="clarityAnimationSolid0" fill="#1D1A1A">
            <path d="M3.5 23.77a6.41 6.41 0 0 0 9.33 8.67a11.65 11.65 0 0 1-9.33-8.67Z" />
            <path d="M7.68 14.53a9.6 9.6 0 0 0 13.4 13.7a14.11 14.11 0 0 1-13.4-13.7Z" />
            <path d="M21.78 2A12.12 12.12 0 1 1 9.66 14.15A12.12 12.12 0 0 1 21.78 2" />
          </g>
        </svg>
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
        <Routes>
              <Route path="/" element={<StartMenu theme={theme} setTheme={setTheme}/>}/>
              <Route path="/StoryMode" element={<StoryMode theme={theme} setTheme={setTheme}/>}/>
              <Route path="/Projects" element={<Projects theme={theme} setTheme={setTheme}/>}/>
        </Routes>
        
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
