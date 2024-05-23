import React from "react"
import Back from "../common/Back"
import Heading from "../common/Heading"
import img from "../images/about.jpg"
import "./about.css"

const About = () => {
  return (
    <>
      <section className='about'>
        <Back name='About Us' title='About Us - Who We Are?' cover={img} />
        <div className='container flex mtop'>
          <div className='left row'>
            <Heading title='Our Agency Story' subtitle='Check out our company story and work process' />

            <p>Our Organization is a non-profit organization dedicated to [briefly describe your organization's mission and purpose]. We believe that every individual has the power to make a difference, and we strive to empower our community through volunteerism, education, and community development.</p>
            <p>Our Values
We believe in:
Inclusivity: We believe that everyone deserves an equal opportunity to make a difference.
Empowerment: We empower our community through education, training, and resources.
Volunteerism: We believe that volunteerism is the key to creating positive change.
Integrity: We are committed to transparency, accountability, and honesty in all our actions.</p>
            <button className='btn2'>More About Us</button>
          </div>
          <div className='right row'>
            <img src='./immio.jpg' alt='' />
          </div>
        </div>
      </section>
    </>
  )
}

export default About
