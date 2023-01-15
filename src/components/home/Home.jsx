import React from 'react'
 import Hero from "./hero/Hero"
 import Headers from '../common/heading/Headers'
import Title from "../common/title/title"
const Home = () => {
  return (
    <>
    <Headers/>
      <section className="hero">
        <div className="container container-hero">
          <div className="row">
           <Title subtitle="WELCOME TO ACADEMIA" title="Best Online Education" title2="Expertise"/>
            <div className="button">
              <button className="btn">Get Started<i class="fa-solid fa-arrow-right"></i></button>
              <button className="btn btn2">View Courses<i class="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
      </section>
      <div className="margin"></div>
    </>
  )
}
export default Home