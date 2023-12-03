import React, { useContext, useEffect } from 'react'
import { MouseContext } from '../context/MouseContextProvider';
import "./Cursor.css"

const Cursor = () => {
    const {dot, dotOutline, mouseEnterEvent, mouseLeaveEvent, mouseMoveEvent, mouseOutEvent, mouseOverEvent, animateDotOutline, requestRef} = useContext(MouseContext)
    useEffect(() => {
        document.addEventListener('mousedown', mouseOverEvent);
        document.addEventListener('mouseup', mouseOutEvent);
        document.addEventListener('mousemove', mouseMoveEvent);
        document.addEventListener('mouseenter', mouseEnterEvent);
        document.addEventListener('mouseleave', mouseLeaveEvent);
    
        animateDotOutline();
    
        return () => {
          document.removeEventListener('mousedown', mouseOverEvent);
          document.removeEventListener('mouseup', mouseOutEvent);
          document.removeEventListener('mousemove', mouseMoveEvent);
          document.removeEventListener('mouseenter', mouseEnterEvent);
          document.removeEventListener('mouseleave', mouseLeaveEvent);
    
          cancelAnimationFrame(requestRef.current);
        };
      }, []);
  return (
    <>
        <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div>
    </>
  )
}

export default Cursor