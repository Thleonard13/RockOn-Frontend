import React from 'react'
import { Link } from 'react-router-dom'
import './footer.css'

const Footer = () => {
  return (
    <footer>
            <p>RockOn Guitars, 123 Fake St. Seattle WA, 98109 | <Link to="/contact">Contact Us</Link></p>
    </footer>
  )
}

export default Footer;