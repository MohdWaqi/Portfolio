import './App.css'
import NavBar from './components/NavBar'
import myImage from "./assets/landing1.jpg"
import chakra from "./assets/chakra.png"

function App() {


  return (
    <div className="app">
    <NavBar/>
    <div name='home' className='landingPage' style={{height:"100vh"}}>
    <div>
      <h2>Hello!! I am </h2>
      <h1>Mohd Waqi Pervez</h1>
      <h2>a <span>React Developer</span></h2>
      <button>Resume</button>
    </div>

    </div>
    <div name='about' className='sections'>
      <h1>About Me</h1>
      <hr/>
      <div className='about'>
        <h3>Versatile Front End React Developer with expertise in HTML, CSS, and JavaScript. Proficient in crafting dynamic interfaces using React, Tailwind CSS, and Chakra UI. Quick learner adept at integrating innovative technologies like Generative AI. Skilled in Python, Git, and Github for collaborative project execution. Passionate about building impactful, user-centric solutions.</h3>
        <img src={myImage}/>
      </div>

    </div>
    <div name='skills' className='sections'>
      <h1>Skills</h1>
      <hr/>
      <div className='skills'>
        <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-html-5-512.png'/>
        <img src='https://cdn1.iconfinder.com/data/icons/logotypes/32/badge-css-3-512.png'/>
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/tailwind-css-icon.png'/>
        <img src='https://cdn2.iconfinder.com/data/icons/designer-skills/128/code-programming-javascript-software-develop-command-language-256.png'/>
        <img src='https://cdn4.iconfinder.com/data/icons/logos-3/600/React.js_logo-256.png'/>
        <img src={chakra}/>
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/bootstrap-5-logo-icon.svg'/>
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/postman-icon.svg'/>
        <img src='https://cdn4.iconfinder.com/data/icons/logos-and-brands/512/267_Python_logo-256.png'/>
        <img src='https://cdn3.iconfinder.com/data/icons/social-media-2169/24/social_media_social_media_logo_git-512.png'/>
        <img src='https://cdn0.iconfinder.com/data/icons/shift-logotypes/32/Github-256.png'/>
        <img src='https://uxwing.com/wp-content/themes/uxwing/download/internet-network-technology/artificial-intelligence-ai-icon.svg'/>
      </div>

    </div>
    <div name='projects' className='sections' style={{height:"100vh"}}>
      <h1>Projects</h1>
      <hr/>
      <div>
        <img src='https://postlmg.cc/rDjD4GdM'/>
        <div></div>
      </div>

    </div>
    <div name='contact' className='sections' style={{height:"100vh"}}>
      <h1>Hello</h1>

    </div>
    </div>
  )
}

export default App
