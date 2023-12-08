import React, { useContext } from 'react'
import { MouseContext } from '../context/MouseContextProvider'

const SkillDisplay = ({image, label}) => {
    const{mouseOutEvent, mouseOverEvent} = useContext(MouseContext)
  return (
    <div>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src={image}/>
        <h3 data-aos="fade-up">{label}</h3>
        </div>
  )
}

export default SkillDisplay