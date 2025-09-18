import { BrowserRouter, Route, Routes } from "react-router-dom"

import Navbar from "./component/global/Navbar"
import Footer from "./component/global/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Project from "./pages/Project"
import Connect from "./pages/Connect"

function App() {

  return (
    <>
     <BrowserRouter>
        <div className="flex flex-col min-h-screen bg-[#f7f7f7]">
          <Navbar />
          <Routes>
            <Route path="/" element={ <Home /> } />
            <Route path="/about" element={ <About /> } />
            <Route path="/projects" element={ <Project />} />
            <Route path="/connect" element={ <Connect />} />
          </Routes>
          <Footer />
        </div>
        
      </BrowserRouter>
    </>
  )
}

export default App
