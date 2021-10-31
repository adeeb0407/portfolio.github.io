import './components/style/Structure.css'
import './components/style/general.css'
import HeadingPage from './components/Content';
import About from './components/About'
import Project from './components/Project'
import Skills from './components/Skills'
import Navbar from './components/Navbar';
import Contactus from './components/Contact';
import AOS from "aos";
import "aos/dist/aos.css";
import {useEffect} from 'react'
import { BrowserRouter as Router} from 'react-router-dom';
import Resume from './components/Resume';

function Structure () {

  useEffect( () =>{
    AOS.init({duration : 1500, once: true}); 
}, [])

    return(
      <>
      <div className = 'navbar'>
      <Router>
      <Navbar />
      <HeadingPage />
      <About />
      <Skills />
      <Project />
      <Resume />
      <Contactus />
      </Router>
        </div>
        </>

    );
}

export {Structure};