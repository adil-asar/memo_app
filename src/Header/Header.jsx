import React from 'react'
import './header.css'
import {BsLightbulbFill,BsFillLightbulbOffFill} from 'react-icons/bs';
import logo from '../images/notes.png'

const Header = ({mode,setMode}) => {

  const toggle = () => {
setMode(!mode)
  }

  return (
    <div className={`header_css ${mode ? "dark_css" : ""}`}>
       
        <img src={logo} alt="" className='logo_css' />
         <span 
          onClick={toggle}
         className='icon_css'>
             {
              mode ?   <BsLightbulbFill/>: <BsFillLightbulbOffFill/> 
             }
         
           </span>
        

    </div>

  )

}

export default Header