import React from 'react'

const ContactForm = () => {
  return (
     <section id="form-details">
        <form action="">
            <span>LEAVE A MESSAGE</span>
            <h2>We love to hear from you</h2>
            <input type="text" placeholder="Your Name" />
            <input type="text" placeholder="Email" />
            <input type="text" placeholder="Subject" />
            <textarea cols="30" rows="10" placeholder="Your Message"></textarea>
            <button className="normal">Submit</button>
        </form>
        <div className="people">
            <div>
                <img src={require("./images/1.png")} alt=""/>
                <p><span>John Doe</span> Senior Marketing Manager <br/> Phone: (123) 456 7890 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={require("./images/2.png")} alt=""/>
                <p><span>Jim Doe</span> Senior Marketing Manager <br/> Phone: (123) 456 7890 <br/> Email: contact@example.com</p>
            </div>
            <div>
                <img src={require("./images/3.png")} alt=""/>
                <p><span>Jane Doe</span> Senior Marketing Manager <br/> Phone: (123) 456 7890 <br/> Email: contact@example.com</p>
            </div>
        </div>
    </section>
  )
}

export default ContactForm;