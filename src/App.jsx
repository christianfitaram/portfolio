import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from './components/Contact';
import Footer from './components/Footer';
import Education from './components/Education';
function App() {
  const [count, setCount] = useState(0)
  return (
    <>
      <div className="App">
        <NavBar />
        <Banner />
        <Skills />
        <Education/>
        <Projects />
        <Contact />
        <Footer />
      </div>
    </>
  )
}

export default App
