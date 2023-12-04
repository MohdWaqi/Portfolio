import React, { useContext } from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'
import { ScreenContext } from '../context/ScreenContextProvider';
import { MouseContext } from '../context/MouseContextProvider';

const ProjectCard = ({projectOn, techIco, description, images, features, tech, deploy}) => {
  const {isTablet, isMobile} = useContext(ScreenContext)
  const {mouseOutEvent, mouseOverEvent} = useContext(MouseContext)
  return (
      <div className='projects'>
    {isMobile?<><a href={deploy} data-aos="fade-up" >
    <Carousel autoPlay width={300} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image, index)=><img key={index} src={image}/>)}
    </Carousel>
    </a>
      <div id="details">
        <h2 data-aos="fade-up">{projectOn}</h2>
        <hr data-aos="fade-up"/>
        <p data-aos="fade-up">{description}</p>
        <h4>Tech Stack Used</h4> 
        {isTablet?techIco.map((icon, index)=><img key={index} src={icon} data-aos="fade-up"/>):<ul>
          {tech.map((technology, index) =><li key={index} data-aos="fade-up">{technology}</li>)}
        </ul>}
      </div></>:<><a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href={deploy} data-aos="fade-up" >
    <Carousel autoPlay width={isTablet?400:600} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image, index)=><img key={index} src={image}/>)}
    </Carousel>
    </a>
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
          {tech.map((technology, index) =><li key={index} data-aos="fade-up">{technology}</li>)}
        </ul>}
      </div></>}
    </div>

  )
}

export default ProjectCard