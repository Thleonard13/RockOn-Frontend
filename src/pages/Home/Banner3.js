import React from 'react'
import { Link } from "react-router-dom"
import './banner.css'

const Banner3 = () => {
  return (
    <>
        <section id="banner3" className=''>
            <Link to="/shop">
                <div className="banner-box">
                    <h2>Up To 12-Month Financing</h2>
                    <h3>Pay as You Play</h3>
                </div> 
            </Link> 
            <Link to="/shop">
                <div className="banner-box banner-box2">
                    <h2>Become an Expert</h2>
                    <h3>Discover the Newest Gear</h3>
                </div> 
            </Link> 
            <Link to="/shop"> 
                <div className="banner-box banner-box3">
                    <h2>Start Learning</h2>
                    <h3>Online Lessons Available</h3>
                </div>
            </Link> 
        </section>
    </>
  )
}

export default Banner3