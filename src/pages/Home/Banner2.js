import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'

const Banner2 = () => {
  return (
    <>
        <section id="sm-banner" className="section-p1">
            <div className="banner-box">
                <h4>crazy deals</h4>
                <h2>20% Off All Accessories</h2>
                <span>When You Purchase Any Guitar</span>
                <Link to="/shop">
                  <button className="white">Learn More</button>
                </Link>
            </div>
            <div className="banner-box banner-box2">
                <h4>beginner to veteran</h4>
                <h2>Shop All Price Points</h2>
                <span>The best quality for any budget</span>
                <Link to="/shop">
                  <button className="white">Learn More</button>
                </Link>
            </div> 
        </section>
    </>
  )
}

export default Banner2