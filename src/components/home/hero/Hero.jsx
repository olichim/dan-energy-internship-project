import React from "react"
import Heading from "../../common/Heading"
import "./hero.css"

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Heading title='Volunteers Hub' subtitle='A non-profit organization that relies on volunteers to achieve its goals and objectives, often in the areas of social welfare, community development, education, healthcare, or environmental conservation' />

        </div>
      </section>
    </>
  )
}

export default Hero
