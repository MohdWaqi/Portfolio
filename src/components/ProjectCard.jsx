import React, { useContext } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ScreenContext } from '../context/ScreenContextProvider';
import { MouseContext } from '../context/MouseContextProvider';
import link from "../assets/link.png"

const ProjectCard = ({projectOn, techIco, description, images, features, tech, deploy, github}) => {
  const {isTablet, isMobile} = useContext(ScreenContext)
  const {mouseOutEvent, mouseOverEvent} = useContext(MouseContext)
  return (
    
    <div className='projects'>
    {isMobile?<><a href={deploy} target="_blank" data-aos="fade-up" >
    <Carousel autoPlay width={300} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image, index)=><img key={index} src={image}/>)}
    </Carousel>
    </a>
    <div id='showLinks' data-aos="fade-up">
      <a href={deploy} target="_blank" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}><img src={link}/></a>
      <a href={github} target="_blank" onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}><img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png"/></a>
    </div>
      <div id="details">
        <h2 data-aos="fade-up">{projectOn}</h2>
        <hr data-aos="fade-up"/>
        <p data-aos="fade-up">{description}</p>
        <h4>Tech Stack Used</h4> 
        {isTablet?techIco.map((icon, index)=><img key={index} src={icon} data-aos="fade-up"/>):<ul>
          {tech.map((technology, index) =><li key={index} data-aos="fade-up">{technology}</li>)}
        </ul>}
      </div></>:<><a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href={deploy} target="_blank" data-aos="fade-up" >
    <Carousel autoPlay width={isTablet?400:600} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image, index)=><img key={index} src={image}/>)}
    </Carousel>
    </a>
    <div id='showLinks' data-aos="fade-up">
      <a href={deploy} onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank"><img src={link}/></a>
      <a href={github} onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} target="_blank"><img src="https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png"/></a>
    </div>
      <div id="details">
        <h2 data-aos="fade-up">{projectOn}</h2>
        <hr data-aos="fade-up"/>
        <p data-aos="fade-up">{description}</p>
        <h4 data-aos="fade-up">Features</h4> 
        <ul>
          {features.map((feature, index) =><li key={index} data-aos="fade-up">{feature}</li>)}
        </ul>
        <h4>Tech Stack Used</h4> 
        {isTablet?techIco.map((icon, index)=><img key={index} src={icon} data-aos="fade-up"/>):<ul>
          {tech.map((technology, index) =><li key={index} data-aos="fade-up" className='tech'>{technology}</li>)}
        </ul>}
      </div></>}
    </div>
    

  )
}

export default ProjectCard