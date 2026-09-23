import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills";
import Experince from "./components/Experince";
import Projects from "./components/Projects";
import Journey from "./components/Journey";
import Contact from "./components/Contact";
import Hero from "./components/Hero";

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     
   <Navbar />
      <Hero />
      <About />
      <Skills />
      <Experince />
      <Projects />
      <Journey />
      <Contact />

      
    </>
  )
}

export default App
