/* eslint-disable no-unused-vars */
import React from 'react'
import "./ContactMe.css"
import ContactinfoCard from './ContactInfoCard/ContactinfoCard'
import ContactForm from './ContactForm/ContactForm'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-content' >
            <div className="socials-container">
                <ContactinfoCard
                    iconUrl="./assets/email.png"
                    text = "mvulakolwen08@gmail.com"
                />
                <ContactinfoCard
                    iconUrl="./assets/github.png"
                    text = "https://github.com/mvula-github"
                />
                <ContactinfoCard
                    iconUrl="./assets/linkedin.png"
                    text = "https://www.linkedin.com/in/mvula"
                />
            </div>

            <div className='contact-form-container' > 
                <ContactForm/>
            </div>

        </div>

    </section>
  )
}

export default ContactMe