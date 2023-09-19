import React from 'react'
import { Link } from 'react-router-dom'
import './banner.css'

const Banner1 = () => {

  return (
    <>
        <section id="banner" className="section-m1">
            <h4>Repair Service</h4>
            <h2>Up To <span>30% Off</span> On Your First Repair</h2>
            <Link to="/about"><button className="normal">Explore More</button></Link>
        </section>
    </>
  )
}

export default Banner1