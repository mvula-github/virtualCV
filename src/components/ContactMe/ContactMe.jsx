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
                    iconUrl="../../../public/assets/icons8-email-100.png"
                    text = "mvulakolwen08@gmail.com"
                    />
            </div>
            <div style={{flex: 1}}></div>

        </div>

    </section>
  )
}

export default ContactMe