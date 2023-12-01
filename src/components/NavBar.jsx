import React from 'react'
import logo from "../assets/logo.png"
import "./NavBar.css"
import { Link } from 'react-scroll'

const NavBar = () => {
  return (
    <div className='navbar'>
        <img src={logo} alt='logo' />
        <div>
        
            <Link 
            className='links' 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800} >Home</Link>
      
            <Link 
            className="links" 
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800} >About</Link>
      
      
            <Link 
            className="links" 
      to="skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      
      duration={1500} >Skills</Link>
      
      
            <Link 
            className="links" 
      to="projects" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500} >Projects</Link>
      
      
            <Link  
            className="links"
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={50} 
      duration={1500} >Contact</Link>
      
          </div>
    </div>
  )
}

export default NavBar