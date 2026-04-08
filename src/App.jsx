import React from "react"
import Navbar from "./components/layout/Navbar"
import Footer from "./components/layout/Footer"
import { Routes, Route } from "react-router-dom"
import ScrollToTop from "./components/ScrollToTop"
import Home from "./pages/Home"
import Artists from "./pages/Artists";
import ArtistPage from "./pages/ArtistPage"
import Submit from "./pages/Submit"
import About from "./pages/About"
import Contact from "./pages/Contact"

const App = () => {
  return (
    <div className="pt-24">
      <Navbar />
    <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/artists" element={<Artists />} />
        <Route path="/artists/:slug" element={<ArtistPage />} />
        <Route path="/submit" element={<Submit />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer/>
    </div>
  )
}

export default App