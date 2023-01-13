import React from 'react'
import "./App.css"
import { BrowserRouter as Routes,Route } from "react-router-dom"
import Headers from "./components/common/heading/Headers"
import Home from "./components/home/Home"
export default function App() {
  return (
    <>
      <Routes>
        <Headers />
        <Route path="/home" exact component={Home} />
      </Routes>
    </>
  )
}
