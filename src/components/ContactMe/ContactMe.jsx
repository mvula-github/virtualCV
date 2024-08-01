/* eslint-disable no-unused-vars */
import React from 'react'
import "./ContactMe.css"
import ContactinfoCard from './ContactInfoCard/ContactinfoCard'

const ContactMe = () => {
  return (
    <section className='contact-container'>
        <h5>Contact Me</h5>

        <div className='contact-container'>
            <div style={{flex: 1}}>
                <ContactinfoCard
                    iconUrl="../../../public/assets/email.png"
                    text = "mvulakolwen08@gmail.com"
                />
                <ContactinfoCard
                    iconUrl="../../../public/assets/github.png"
                    text = "https://github.com/mvula-github"
                />
                <ContactinfoCard
                    iconUrl="../../../public/assets/linkedin.png"
                    text = "https://www.linkedin.com/in/mvula"
                />

            </div>
            <div style={{flex: 1}}></div>

        </div>

    </section>
  )
}

export default ContactMe