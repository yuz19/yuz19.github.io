import React,{useState,useEffect,useContext} from 'react'
import BaseProjects from './BaseProjects'
import { ThemeContext } from '../App';
import { Link,useLocation } from 'react-router-dom'

import BtnSlider from './BtnSlider';
function Projects() {  const [objIndex, setObjIndex] = useState(1);
  const { theme } = useContext(ThemeContext);
  //const [objId, setObjId] = useState(1);
  const [matchingProject, setMatchingProject] = useState(null);
  const [slideIndex, setSlideIndex] = useState(1);
  const [projectContent, setProjectContent] = useState(null);

  useEffect(() => {
    if (matchingProject) {
      const content = matchingProject.numberImage >= 1 ? (
        Array.from({ length: matchingProject.numberImage }).map((_, imageIndex) => (
          <div
            className={`slider ${slideIndex === imageIndex + 1 ? 'active' : ''} ${matchingProject.Nameid}`}
            key={imageIndex}
          >
            <img
              src={`./imgrojects/${matchingProject.Nameid}${imageIndex + 1}.png`}
              alt=""
            />
          </div>
        ))
      ) : null;
      setProjectContent(content);
    }
  }, [matchingProject, slideIndex]);

  const nextSlide = (len) => {
    console.log(slideIndex);
    if (slideIndex !== len) {
      setSlideIndex(slideIndex + 1);
    } else if (slideIndex === len) {
      setSlideIndex(1);
    }
  };

  const prevSlide = (len) => {
    console.log(slideIndex);
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1);
    } else if (slideIndex === 1) {
      setSlideIndex(len);
    }
  };

  function showProject(Nameid) {
    const Projects = document.querySelectorAll('.Projects');

    Projects.forEach((project) => {
      const className = project.classList;
      const targetsvg = project.querySelector('svg');
  
      if (className.length > 1 && className.contains(Nameid)) {
        targetsvg.setAttribute('id', 'svgOn');
      } else {
        targetsvg.setAttribute('id', 'svgOff');
      }
    });
    const matchingProject = BaseProjects.find((obj) => obj.Nameid === Nameid);
    if (matchingProject) {
      setMatchingProject(matchingProject);
      setObjIndex(BaseProjects.indexOf(matchingProject));
    //setObjId(matchingProject.id);
    }
  }
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      searchd();
    }
  };
  const searchd = () =>{
    const searchbox =document.getElementById( "search-items").value.toUpperCase();
    
    const list=document.querySelectorAll(".Projects");
   
    //const lname=document.querySelectorAll(".nameP");
        console.log(list);
    for(var i=0;i<list.length;i++){
      let match=list[i].getElementsByClassName('nameP')[0];
  
      if(match){
       let textvalue=match.textContent ||match.innerHTML;
       if(textvalue.toUpperCase().indexOf(searchbox)>-1){
         list[i].style.display="";
       }else{
         list[i].style.display="none";
        }
        }
        
      }
    }
return (
  <div className="container">
    <div className="navLeft ">
    <Link to="/">
      <div className='btnHome'>
        <svg width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M11.5411 19.5598C11.8349 19.2778 12 18.8954 12 18.4967C12 18.098 11.8349 17.7157 11.5411 17.4337L3.78308 9.99092L11.5411 2.54815C11.8266 2.26457 11.9846 1.88476 11.981 1.49052C11.9774 1.09629 11.8126 0.719167 11.522 0.44039C11.2314 0.161612 10.8383 0.00348303 10.4274 5.72205e-05C10.0165 -0.00336859 9.62058 0.148184 9.32499 0.422075L0.458878 8.92788C0.165059 9.20985 0 9.59222 0 9.99092C0 10.3896 0.165059 10.772 0.458878 11.054L9.32499 19.5598C9.6189 19.8416 10.0175 20 10.4331 20C10.8486 20 11.2472 19.8416 11.5411 19.5598Z" fill="#D3DDCE"/>
        </svg>
        <p>Home</p>
      </div>
      </Link>
      <div className="Haut">
        {/* <img src="./ME.png" alt="" /> */}
        <p>Meridja Nabil </p>
      </div>
      <div className="Bot">
        {BaseProjects.map((obj, index) => (
          <div className={`Projects ${obj.Nameid}`} key={obj.id} onClick={() => showProject(obj.Nameid)}>
            <svg id="svgOff" width="12" height="20" viewBox="0 0 12 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M0.458879 0.440231C0.165059 0.722196 0 1.10457 0 1.50327C0 1.90197 0.165059 2.28434 0.458879 2.56631L8.21692 10.0091L0.458879 17.4518C0.173386 17.7354 0.0154123 18.1152 0.0189838 18.5095C0.0225544 18.9037 0.187384 19.2808 0.47797 19.5596C0.768557 19.8384 1.16165 19.9965 1.57259 19.9999C1.98352 20.0034 2.37942 19.8518 2.67501 19.5779L11.5411 11.0721C11.8349 10.7902 12 10.4078 12 10.0091C12 9.61038 11.8349 9.228 11.5411 8.94604L2.67501 0.440231C2.3811 0.158351 1.98253 0 1.56695 0C1.15136 0 0.752788 0.158351 0.458879 0.440231Z"
                fill="#D3DDCE"
              />
            </svg>
            <p className='nameP'>{obj.Name}</p>
          </div>
        ))}
      </div>
      <div className="search">
        <input  id='search-items' type="text" placeholder="search....."  onKeyPress={handleKeyPress}/>
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="34" viewBox="0 0 24 24" onClick={searchd}>
          <path fill="#fff" fillRule="evenodd" d="M14.385 15.446a6.75 6.75 0 1 1 1.06-1.06l5.156 5.155a.75.75 0 1 1-1.06 1.06l-5.156-5.155Zm-7.926-1.562a5.25 5.25 0 1 1 7.43-.005l-.005.005l-.005.004a5.25 5.25 0 0 1-7.42-.004Z" clipRule="evenodd" />
        </svg>
      </div>
    </div>

   
    {(projectContent != null  && 
        <div className="Projecter">
   <div className="Listproject">
    {projectContent}
    </div>
    <BtnSlider
      moveSlide={() => nextSlide(BaseProjects[objIndex].numberImage)}
      direction="next"
      hcolor={BaseProjects[objIndex]?.color}
      theme={theme}
    />

    <BtnSlider
      moveSlide={() => prevSlide(BaseProjects[objIndex].numberImage)}
      direction="prev"
      hcolor={BaseProjects[objIndex]?.color}
      theme={theme}
    />
     </div>
)}

  
  </div>
);
}

export default Projects;