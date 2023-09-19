import React from 'react'
import { Link } from 'react-router-dom'
import "./Services.css";

const Services = () => {
  return (
    <section id="services" className="section-p1">
        <h2> Get The Most with RockOn</h2>
        <p>We've Got You Covered with Our Award-Winning Services</p>
        <div className='s-container'>
            <Link to="/about">
                <div className="fe-box">
                    <div className='img-container'>
                        <img src={require("./images/S1.png")} alt="no image"/>
                    </div>
                    <h6>Quality Guarantee</h6>
                    <p>Your satifaction is our priority</p>
                    <h5 className='learn-more'>Learn More</h5>
                </div>
            </Link>
            <Link to="/about" > 
                <div className="fe-box">
                    <div className='img-container'>
                        <img src={require("./images/S2.png")} alt="no image"/>
                    </div>
                    <h6>Free Shipping</h6>
                    <p>Every order shipped fast and free</p>
                    <h5 className='learn-more'>Learn More</h5>
                </div>
            </Link>
            <Link to="/about">
                <div className="fe-box">
                    <div className='img-container'>
                        <img src={require("./images/S3.png")} alt="no image"/>
                    </div>
                    <h6>Free Tech Support</h6>
                    <p>24-hour help always available</p>
                    <h5 className='learn-more'>Learn More</h5>
                </div>
            </Link>
            <Link to="/about" >
                <div className="fe-box">
                    <div className='img-container'>
                        <img src={require("./images/S4.png")} />
                    </div>
                    <h6>2-year Warranty</h6>
                    <p>No exceptions</p>
                    <h5 className='learn-more'>Learn More</h5>
                </div>
            </Link>
            <Link to="/about">
                <div className="fe-box">
                    <div className='img-container'>
                        <img src={require("./images/S5.png")} alt="no image"/>
                    </div>
                    <h6>Easy Payment</h6>
                    <p>Pay the way you want</p>
                    <h5 className='learn-more'>Learn More</h5>
                </div>
            </Link>
        </div>
    </section>
  )
}

export default Services