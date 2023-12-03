import React, { useContext } from "react";
import { bubble as Menu } from "react-burger-menu";
import { Link } from 'react-scroll'
import { ScreenContext } from "../context/ScreenContextProvider";
import "./SideBar.css"

export default props => {
    const {isActive, isAbout, isSkills, isProjects, setActive, setAbout, setSkills, setProjects} = useContext(ScreenContext)
  return (
    <Menu {...props} right noOverlay>
      <Link 
            className={`links ${isActive} menu-item`} 
      to="home" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setActive("bg")}}
      onSetInactive={()=>{setActive("")}}
       >Home</Link>
      
            <Link 
            className={`links ${isAbout} menu-item`}
      to="about" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={800}
      onSetActive={()=>{setAbout("bg")}}
      onSetInactive={()=>{setAbout("")}}
       >About</Link>
      
      
            <Link 
            className={`links ${isSkills} menu-item`}
      to="skills" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      
      duration={1500}
      onSetActive={()=>{setSkills("bg")}}
      onSetInactive={()=>{setSkills("")}} 
      >Skills</Link>
      
      
            <Link 
            className={`links ${isProjects} menu-item`}
      to="projects" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500}
      onSetActive={()=>{setProjects("bg")}}
      onSetInactive={()=>{setProjects("")}}
       >Projects</Link>
      
      
            <Link  
            className={`links menu-item`}
      to="contact" 
      spy={true} 
      smooth={true} 
      offset={-100} 
      duration={1500} 

      >Contact</Link>
    </Menu>
  );
};
