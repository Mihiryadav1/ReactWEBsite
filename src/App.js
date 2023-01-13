import React from 'react'
import "./App.css"
import { BrowserRouter as Routes, Route } from "react-router-dom"
import Home from "./components/home/Home"
import Headers from "./components/common/heading/Headers"
function App() {
  return (
    <>
      <Headers />
      <Routes>
        {/* <Route path="/" exact component={Home} /> */}
      </Routes>
    </>
  )
}
export default App
