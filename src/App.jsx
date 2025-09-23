import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./component/global/Navbar"
import Footer from "./component/global/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Connect from "./pages/Connect"
import ProjectDetails from "./pages/ProjectDetails"

function App() {

  return (
    <>
     <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#f7f7f7] text-[#0b1d3a] dark:bg-[#0b1d3a] dark:text-[#f7f7f7] transition-colors duration-300">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Project />} />
            <Route path="/projects/:id" element={<ProjectDetails />} />
            <Route path="/connect" element={ <Connect />} />
          </Routes>
          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App
