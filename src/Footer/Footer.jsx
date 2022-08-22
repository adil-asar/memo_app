import React from 'react'
import './footer.css'
import {BsGithub} from 'react-icons/bs'
import adil from '../images/adil.png'

const Footer = ({mode}) => {



  return (
    <div className={`footer_css ${mode ? 'dark_mode':''}`}>
        <p>Developed By <img src={adil} className='img_footer' alt="" /> </p>
    <a href="https://github.com/adil-asar/MemoApp" target="_blank">
        <span
         className='icon_css' >
           <BsGithub/>
        </span>
        </a>
        
    </div>
  )
}

export default Footer