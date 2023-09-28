import React from 'react'
import { Link } from 'react-router-dom';
import NavBar from './startMenu/NavBar'
import Start from './startMenu/Start'

function StartMenu({theme}) {
  return (
    <div className='startMenu'>
 
        <NavBar/>
        <Start/>
        <div className='about me' id='card-sans'>
        <div className={"card-sans" + (theme === 'light' ? ' cardW' : ' cardB')} >
          <p>
          yuz19/README.md<br/><br/><br/>
          Hi there 👋
          I'm yuz19, a passionate web developer who loves creating websites and learning new things. I'm always seeking to improve my skills and stay up-to-date with the latest web development technologies.
          </p>
          <hr/>
          <p>
          What I'm Currently Learning
          I'm currently learning React, Bun, and Next.js, and I'm excited to dive deeper into these technologies to create more robust and dynamic web applications.
          In addition, I'm looking forward to learning TypeScript to improve the maintainability and scalability of my projects.
          </p>
          <hr/>
          <p>
          Why I Love Web Development
          I love web development because it allows me to combine my creativity and technical skills to build beautiful, functional, and user-friendly websites that provide value to people. I find it fascinating how technology can be used to solve real-world problems and enhance people's lives.
          </p>
     </div>
        </div>

    </div>
  )
}

export default StartMenu