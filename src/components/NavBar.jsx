import React, { useContext } from 'react'
import logo from "../assets/logo.png"
import "./NavBar.css"
import { Link } from 'react-scroll'
import { ScreenContext } from '../context/ScreenContextProvider'

import SideBar from './SideBar'
import { MouseContext } from '../context/MouseContextProvider'

const NavBar = () => {
      const{mouseOverEvent, mouseOutEvent} = useContext(MouseContext)
      const { isMobile, isActive, isAbout, isSkills, isProjects, setActive, setAbout, setSkills, setProjects} = useContext(ScreenContext)
  return (
    <div className='navbar' id='nav'>
        <img src={logo} onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} alt='logo' />
        {isMobile?<SideBar pageWrapId={"App"} outerContainerId={"nav"} />:<div className='navChild'>
        
            <Link 
            className={`links ${isActive}`} 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setActive("bg")}}
      onSetInactive={()=>{setActive("")}}
      onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}
       >Home</Link>
      
            <Link 
            className={`links ${isAbout}`}
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setAbout("bg")}}
      onSetInactive={()=>{setAbout("")}}
      onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}
       >About</Link>
      
      
            <Link 
            className={`links ${isSkills}`}
      to="skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      
      duration={1500}
      onSetActive={()=>{setSkills("bg")}}
      onSetInactive={()=>{setSkills("")}} 
      onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}
      >Skills</Link>
      
      
            <Link 
            className={`links ${isProjects}`}
      to="projects" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500}
      onSetActive={()=>{setProjects("bg")}}
      onSetInactive={()=>{setProjects("")}}
      onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}
       >Projects</Link>
      
      
            <Link  
            className={`links`}
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500} 
      onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}
      >Contact</Link>
      
          </div>}
    </div>
  )
}

export default NavBar