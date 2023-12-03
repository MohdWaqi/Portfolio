import './App.css'
import NavBar from './components/NavBar'
import myImage from "./assets/landing1.jpg"
import chakra from "./assets/chakra.png"
import ProjectCard from './components/ProjectCard'
import emailIcon from "./assets/gmail.png"
import { useContext, useEffect, useRef } from 'react'
import { ScreenContext } from './context/ScreenContextProvider'
import AOS from 'aos';
import 'aos/dist/aos.css'
import Cursor from './components/Cursor'
import { MouseContext } from './context/MouseContextProvider'



function App() {
 const {isTablet, isMobile} = useContext(ScreenContext)
 const{mouseOverEvent, mouseOutEvent} = useContext(MouseContext)
 useEffect(()=>{
  AOS.init({offset:isMobile?80:150})
 },[])

  return (
    <div className="app" id='App'>
    <Cursor/>
    <NavBar/>
    <div >

    
    <div name='home' className='landingPage' style={{height:"100vh"}}>
    <div>
      <h2 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Hello!! I am </h2>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Mohd Waqi Pervez</h1>
      <h2 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>a <span>React Developer</span></h2>
      <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href='https://www.google.co.in/' target="_blank" download="MohdWaqi-Pervez-Resume.pdf"><button className='btn'>Resume</button></a>
    </div>

    </div>
    <div name='about' className='sections'>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up">About Me</h1>
      <hr data-aos="fade-up"/>
      <div data-aos="fade-up" className='about'>
        <h3 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent}>Versatile Front End React Developer with expertise in HTML, CSS, and JavaScript. Proficient in crafting dynamic interfaces using React, Tailwind CSS, and Chakra UI. Quick learner adept at integrating innovative technologies like Generative AI. Skilled in Python, Git, and Github for collaborative project execution. Passionate about building impactful, user-centric solutions.</h3>
        {!isTablet&&<img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} src={myImage}/>}
      </div>

    </div>
    <div name='skills' className='sections'>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up">Skills</h1>
      <hr data-aos="fade-up"/>
      <div className='skills'>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src={chakra}/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.svg'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png'/>
        <img onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up" src='https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/artificial-intelligence-ai-icon.svg'/>
      </div>

    </div>
    <div  name='projects' className='sections'>
      <h1 onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} data-aos="fade-up">Projects</h1>
      <hr data-aos="fade-up"/>
      <ProjectCard techIco={['https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png',chakra]} images={['https://i.postimg.cc/k53Kkfq6/Vite-React-Google-Chrome-21-11-2023-07-56-24.png','https://i.postimg.cc/gjWYpLrK/Vite-React-Google-Chrome-21-11-2023-07-57-33.png','https://i.postimg.cc/J4sT8YVP/Vite-React-Google-Chrome-21-11-2023-07-58-31.png','https://i.postimg.cc/wBwJ7HDJ/Vite-React-Google-Chrome-21-11-2023-07-58-48.png']} features={["Ability to Sort displayed Products.", "Ability to login the user with proper logged in successful alert.","User Friendly.","Fullscreen Mode."]} tech={["React js","Chakra UI","Javascript Utilities & Libraries"]} description="This is the clone UI of India's largest e-commerce store." projectOn="Myntra Clone" deploy='https://waqi-myntra.netlify.app/'/>
      <ProjectCard techIco={['https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png','https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png','https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png']} images={['https://i.postimg.cc/d0ycMnHp/Document-Google-Chrome-02-12-2023-16-15-41.png','https://i.postimg.cc/6q0f8J3S/Document-Google-Chrome-02-12-2023-16-17-11.png','https://i.postimg.cc/brB4FBcZ/Document-Google-Chrome-02-12-2023-16-18-24.png']} features={["Different UI in different devices", "Responsive","User Friendly.","Fullscreen Mode."]} tech={["HTML","CSS","Vanilla Javascript"]} description="This is the responsive of superhero resume of Batman." projectOn="Superhero Resume" deploy='https://coruscating-semifreddo-d5aa34.netlify.app/'/>
    </div>
    <div name='contact' className='sections contact'>
      <h1 data-aos="fade-up">Get In Touch</h1>
      <div>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href='https://www.linkedin.com/in/mohd-waqi-pervez-52a432291/'><img src="https://cdn1.iconfinder.com/data/icons/logotypes/32/square-linkedin-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href='mailto:mohdwaqipervez@gmail.com'><img src={emailIcon}/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href='https://github.com/MohdWaqi'><img src="https://cdn4.iconfinder.com/data/icons/iconsimple-logotypes/512/github-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href="https://api.whatsapp.com/send?phone=918755075132&text=Hello Waqi"><img src="https://cdn2.iconfinder.com/data/icons/social-micon/512/whatsapp-256.png"/></a>
        <a onMouseOut={mouseOutEvent} onMouseOver={mouseOverEvent} href='tel:+918755075132'><img src="https://cdn3.iconfinder.com/data/icons/google-material-design-icons/48/ic_local_phone_48px-256.png"/></a>
      </div>

    </div>
    </div>
    </div>
  )
}

export default App
