import React from 'react'
import "./App.css"
import { Routes, Route, BrowserRouter as Router } from 'react-router-dom';
import Home from "./components/home/Home"
import About from "./components/about/About"
function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" exact element={<About />} />
        </Routes>
      </Router>
    
    </>
  )
}
export default App
