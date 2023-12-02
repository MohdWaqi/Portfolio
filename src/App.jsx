import './App.css'
import NavBar from './components/NavBar'
import myImage from "./assets/landing1.jpg"
import chakra from "./assets/chakra.png"
import ProjectCard from './components/ProjectCard'


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
    <div name='projects' className='sections'>
      <h1>Projects</h1>
      <hr/>
      <ProjectCard images={['https://i.postimg.cc/k53Kkfq6/Vite-React-Google-Chrome-21-11-2023-07-56-24.png','https://i.postimg.cc/gjWYpLrK/Vite-React-Google-Chrome-21-11-2023-07-57-33.png','https://i.postimg.cc/J4sT8YVP/Vite-React-Google-Chrome-21-11-2023-07-58-31.png','https://i.postimg.cc/wBwJ7HDJ/Vite-React-Google-Chrome-21-11-2023-07-58-48.png']} features={["Ability to Sort displayed Products.", "Ability to login the user with proper logged in successful alert.","User Friendly.","Fullscreen Mode."]} tech={["React js","Chakra UI","Javascript Utilities & Libraries"]} description="This is the clone UI of India's largest e-commerce store." projectOn="Myntra Clone" deploy='https://waqi-myntra.netlify.app/'/>
      <ProjectCard images={['https://i.postimg.cc/d0ycMnHp/Document-Google-Chrome-02-12-2023-16-15-41.png','https://i.postimg.cc/6q0f8J3S/Document-Google-Chrome-02-12-2023-16-17-11.png','https://i.postimg.cc/brB4FBcZ/Document-Google-Chrome-02-12-2023-16-18-24.png']} features={["Different UI in different devices", "Responsive","User Friendly.","Fullscreen Mode."]} tech={["HTML","CSS","Vanilla Javascript"]} description="This is the responsive of superhero resume of Batman." projectOn="Superhero Resume" deploy='https://coruscating-semifreddo-d5aa34.netlify.app/'/>
    </div>
    <div name='contact' className='sections' style={{height:"100vh"}}>
      <h1>Hello</h1>

    </div>
    </div>
  )
}

export default App
