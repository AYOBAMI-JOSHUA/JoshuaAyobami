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
        <Navbar />
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/about" element={ <About /> } />
          <Route path="/projects" element={ <Project />} />
          <Route path="/connect" element={ <Connect />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  )
}

export default App
