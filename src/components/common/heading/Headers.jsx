import React, { useState } from 'react'

import Head from "./Head"
import "./header.css"

const Headers = () => {
  const [click, setClick] = useState(false);
  return (
    <>
      <Head />
      <header>
        <nav className='flexSB'>
          <ul className={click ? "mobile-nav" : "flexSB"} onClick={() => {
            setClick(false)
          }}>
            <li className="pe-4 list">
              <a className="linker" href="/">HOME</a>
            </li>
            <li className="pe-4 list">
              <a className="linker" href="/about">ABOUT US</a>
            </li>
            <li className="pe-4 list">
              <a className="linker" href="/">TEAM</a>
            </li>
            <li className="pe-4 list">
              <a className="linker" href="/">COURSES</a>
            </li>
            <li className="pe-4 list">
              <a className="linker" href="/">RESOURCES</a>
            </li>
            <li className="pe-4 list">
              <a className="linker" href="/">PRICING</a>
            </li>
          </ul>

          <div className="start">
            <div className="certify">Get Certificate </div>
          </div>
          <button className="toggle" onClick={() => { setClick(!click) }}>
            {click ? <i className="fa-solid fa-bars"></i> : <i className="fa-solid fa-xmark"></i>}
          </button>
        </nav>
      </header>
    </>
  )
}
export default Headers