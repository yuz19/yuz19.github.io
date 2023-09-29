import React from 'react'
import insta from '../../assets/insta.svg';
import instaW from '../../assets/instaW.svg';

import youtube from '../../assets/youtube.svg';
import youtubeW from '../../assets/youtubeW.svg';

import linkedin from '../../assets/linkedin.svg';
import linkedinW from '../../assets/linkedinW.svg';

import github from '../../assets/github.svg'
import githubW from '../../assets/githubW.svg'

// import alliCon from '../../../public/icons-all2.svg'
function ContactMe({theme}) {
  return (
    <div className='contactme' id='contact'>
        <div className={"content "+ (theme === 'light' ? ' content-white' : ' content-black')}>
            <div className='contact'>
                <h1>Contact Me :</h1>
                <ul>
                    <li>
                        <img src={(theme === 'light' ? instaW : insta)} alt="" />
                        <p>Instagram : <a href='https://www.instagram.com/webdev.forall/' target="_blank">@webdev.forall</a></p>
                    </li>
                    <li  >
                         <img src={(theme === 'light' ? youtubeW : youtube)} alt="" />
                         <p>YouTube : <a href='https://www.youtube.com/@webdev.forall' target="_blank">@webdev.forall</a></p>
                    </li>
                    <li>
                         <img src={(theme === 'light' ? linkedinW : linkedin)} alt="" />
                         <p>linkedin : <a href='https://www.linkedin.com/in/nabil-faouzi-meridja-ba9bb9266/' target="_blank">@nabil-faouzi-meridja</a></p>
                    </li>
                    <li>
                         <img src={(theme === 'light' ? githubW : github)} alt="" />
                         <p>GitHub : <a href='https://github.com/yuz19' target="_blank">@yuz19</a></p>
                    </li>
 
                </ul>
            </div>
            {/* <img src={alliCon} alt="" /> */}
        </div>
        {/* <div>test</div> */}
    </div>
  )
}

export default ContactMe