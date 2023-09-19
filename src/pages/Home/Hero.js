import React from 'react'
import { Link } from 'react-router-dom'
import "./hero.css"

const Hero = () => {
  return (
    <section id='hero'>
        <div className='hero-text'>
          <h4>Get Playing Today!</h4>
          <h2>Super value deals</h2>
          <h1>On all products</h1>
          <p>Save more with coupons & up to 50% off!</p>
          <Link to="/shop"><button>Shop Now</button></Link>
        </div>
    </section>
  )
}

export default Hero