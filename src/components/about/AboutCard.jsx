import React from 'react'
import Title from '../../components/common/title/title'
import homeAbout from '../../../src/dummydata'
import image from './study.jpg'
import Numbers from '../numbers/Numbers'
const AboutCard = () => {

  return (
    <>
      <section className="aboutHome">
        <div className="container containerAbout flexSB">
          <div className="left row">
            <img className=""src={image} alt="sec" />
          </div>
          <div className="right row">
            <Title subtitle="Learn Anything" ></Title>
            <h2 className="mb-2">Benefits of Online Learning</h2>
            <div className="items">
              {homeAbout.map((val) => (
                <div className="items1 flexSB">
                <div className="image">
                <img src={val.image} alt="Loading" />
                </div>
                  <div className="text">
                    <h5>{val.title}</h5>
                    <p>{val.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <Numbers/>
    </>
  )
}
export default AboutCard