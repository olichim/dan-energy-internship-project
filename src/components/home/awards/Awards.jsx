import React from "react"
import "./awards.css"
import Heading from "../../common/Heading"
import { blue } from "../../data/Data"
const Awards = () => {
  return (
    <>
      <section className='team background'>
        <div className='container'>
          <Heading title=' Our Volunteers Comments' subtitle={''} />
        We are thrilled to share some amazing feedback from our wonderful volunteers who have been an integral part of our organizations success. Our volunteer portal has been designed to make it easy for our volunteers to get involved and make a difference in our community. And it is  working!
We have received numerous emails and messages from our volunteers expressing their gratitude and appreciation for the opportunity to contribute to our cause Here is what some of them have said'
            <div className='content mtop grid3'>
            {blue.map((val, index) => (
              <div className='box' key={index}>
               
                <div className='details'>
                  <div className='img'>
                    <img src={val.cover} alt='' />
                  </div>      
                  <h4>{val.name}</h4>
                  <div className='button flex'>
                  </div>
                  <button className='btn3'>Read</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Awards

