import React from 'react'
import bioImg from "./Images/about1.png"

const Bio = () => {
  return (
    <section id="about-head" className="section-p1">
        <img src={bioImg} alt=""/>
        <div>
            <h2>Our Story</h2>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dignissimos impedit amet at doloremque adipisci nam voluptatem pariatur, id ut libero dicta iure nostrum ducimus ipsa distinctio architecto maxime iste odit.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
        </div>
    </section>
  )
}

export default Bio;