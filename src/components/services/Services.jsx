import React from "react"
import img from "../images/services.jpg"
import Back from "../common/Back"
import "../home/featured/Featured.css"
// import FeaturedCard from "../home/featured/FeaturedCard"
import RecentCard from "../home/recent/RecentCard.jsx"

const Services = () => {
  return (
    <>
     
      <section className='services mb'>
        <Back  title='Volunters Events' cover={img} />
        <RecentCard/>
      </section>
    </>
  )
}

export default Services
