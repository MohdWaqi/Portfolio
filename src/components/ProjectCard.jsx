import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel'

const ProjectCard = ({projectOn, description, images, features, tech, deploy}) => {
  return (
      <div className='projects'>
    <a href={deploy}>
    <Carousel autoPlay width={600} showArrows={false} showThumbs={false} showStatus={false} infiniteLoop>
        {images.map((image)=><img src={image}/>)}
    </Carousel>
    </a>
      <div id="details">
        <h2>{projectOn}</h2>
        <hr/>
        <p>{description}</p>
        <h4>Features</h4> 
        <ul>
          {features.map((feature) =><li>{feature}</li>)}
        </ul>
        <h4>Tech Stack Used</h4> 
        <ul>
          {tech.map((technology) =><li>{technology}</li>)}
        </ul>
      </div>
    </div>

  )
}

export default ProjectCard