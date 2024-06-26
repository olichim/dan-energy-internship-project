import React from "react"
import { list } from "../../data/Data"
import { Link } from "react-router-dom/cjs/react-router-dom.min"

const RecentCard = () => {
  return (
    <>
      <div className='content grid3 mtop'>
        {list.map((val, index) => {
          const { cover, category, location, name,  type } = val
          return (
            <div className='box shadow' key={index}>
              <div className='img'>
                <img src={cover} alt='' />
              </div>
              <div className='text'>
                <div className='category flex'>
                  <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                  <i className='fa fa-heart'></i>
                </div>
                <h4>{name}</h4>
                <p>
                  <i className='fas fa-clock'></i> {location}
                </p>
              </div>
              <div className='button flex'>
                <div>
              <Link to = {"/signup"}> <button className='btn2'>Signup</button> </Link> 
                  {/* <button className='btn2'>{price}</button> <label htmlFor=''>/sqft</label> */}
                </div>
                <span>{type}</span>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default RecentCard
