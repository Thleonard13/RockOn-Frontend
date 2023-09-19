import React from 'react'
import Header from '../../components/header/Header';
import ContactForm from './ContactForm'
import './contact.css'

const Contact = () => {
  const headerText = "Let's Talk";
  const subHeader = "We Love to Hear From You";
  const pageClass = "about";

  return (
    <>
      <Header headerText={headerText} subHeader={subHeader} pageClass={pageClass}/>
      <section id="contact-details" className="section-p1">
        <div className="details">
            <span>GET IN TOUCH</span>
            <h2>Visit one of our agency locations or contact us today</h2>
            <h3>Head Office</h3>
            <div>
                <li>
                    <i className="far fa-map"></i>
                    <p>123 Fake St. Seattle WA</p>
                </li>
                <li>
                    <i className="far fa-envelope"></i>
                    <p>contact@example.com</p>
                </li>
                <li>
                    <i className="fas fa-phone-alt"></i>
                    <p>(123) 456 7890</p>
                </li>
                <li>
                    <i className="far fa-clock"></i>
                    <p>Monday to Saturday: 9am - 5pm</p>
                </li>
            </div>
        </div>
        <div className="map">
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d10757.15750133876!2d-122.35803215680257!3d47.62050596696795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490151f4ed5b7f9%3A0xdb2ba8689ed0920d!2sSpace%20Needle!5e0!3m2!1sen!2sus!4v1665166339847!5m2!1sen!2sus" 
                width="600" 
                height="450" 
                style={{ border:0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade">
            </iframe>
        </div>
    </section>
    <ContactForm />
    </>
  )
}

export default Contact