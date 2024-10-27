import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Project from "./components/Project";
import "./styles/App.css"
import Skills from "./components/Skills";

import Stats from "./components/Stats";


function App() {
  return (
    <div className="app-main">
      
      <Navbar/>
      <div className="relative min-h-screen bg-[#111827]" >
    
        <div className="z-2 ">
          <Home id="home" />
        </div>
      </div>

      <div className="bg-[#111827]">
        <About />
        <Skills />
        
        <Project/>
        <Stats />
        <Contact />
        <Footer/>
      </div>
    </div>
  );
}

export default App;