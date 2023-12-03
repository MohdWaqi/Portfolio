import React, { createContext, useState } from 'react'
import { useMediaQuery } from 'react-responsive'

export const ScreenContext = createContext()
const ScreenContextProvider = ({children}) => {
    const isTablet = useMediaQuery({query: "(max-width: 1080px)"})
    const isMobile = useMediaQuery({query: "(max-width: 767px)"})
    const [isActive, setActive] = useState("")
      const [isAbout, setAbout] = useState("")
      const [isSkills, setSkills] = useState("")
      const [isProjects, setProjects] = useState("")
  return (
    <ScreenContext.Provider value={{isTablet, isMobile, isActive, isAbout, isSkills, isProjects, setActive, setAbout, setSkills, setProjects}}>
    {children}
    </ScreenContext.Provider>
  )
}

export default ScreenContextProvider