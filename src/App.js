import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
// import Navbar from "./components/Navbar";
// import Skills from "./components/Skills";
// import Project from "./components/Projects";
import Stats from "./components/Stats";
// import Footer from "./components/Footer";


function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <div className="relative min-h-screen bg-[#111827]" >
    
        <div className="z-2 ">
          <Home id="home" />
        </div>
      </div>

      <div className="bg-[#111827]">
        <About />
        {/* <Skills /> */}
        {/* <Project /> */}
        
        <Stats />
        <Contact />
        {/* <Footer/> */}
      </div>
    </div>
  );
}

export default App;
