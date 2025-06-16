/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./ContactForm.css";

const ContactForm = () => {
  const [form, setForm] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.firstname.trim()) newErrors.firstname = "First name is required.";
    if (!form.lastname.trim()) newErrors.lastname = "Last name is required.";
    if (!form.email.trim()) newErrors.email = "Email is required.";
    else if (!/\S+@\S+\.\S+/.test(form.email))
      newErrors.email = "Email is invalid.";
    if (!form.message.trim()) newErrors.message = "Message is required.";
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      setSubmitted(false);
    } else {
      setErrors({});
      setSubmitted(true);
      // TODO: Send form data to backend here
      setForm({ firstname: "", lastname: "", email: "", message: "" });
    }
  };

  return (
    <div className="contact-form-content">
      <form onSubmit={handleSubmit} aria-label="Contact form" noValidate>
        <div className="name-container">
          <label htmlFor="firstname" className="visually-hidden">
            First Name
          </label>
          <input
            type="text"
            id="firstname"
            name="firstname"
            placeholder="First Name"
            value={form.firstname}
            onChange={handleChange}
            required
            aria-invalid={!!errors.firstname}
            aria-describedby="firstname-error"
          />
          {errors.firstname && (
            <span className="error-message" id="firstname-error">
              {errors.firstname}
            </span>
          )}

          <label htmlFor="lastname" className="visually-hidden">
            Last Name
          </label>
          <input
            type="text"
            id="lastname"
            name="lastname"
            placeholder="Last Name"
            value={form.lastname}
            onChange={handleChange}
            required
            aria-invalid={!!errors.lastname}
            aria-describedby="lastname-error"
          />
          {errors.lastname && (
            <span className="error-message" id="lastname-error">
              {errors.lastname}
            </span>
          )}
        </div>

        <label htmlFor="email" className="visually-hidden">
          Email
        </label>
        <input
          type="email"
          id="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          required
          aria-invalid={!!errors.email}
          aria-describedby="email-error"
        />
        {errors.email && (
          <span className="error-message" id="email-error">
            {errors.email}
          </span>
        )}

        <label htmlFor="message" className="visually-hidden">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          placeholder="Message"
          rows={5}
          value={form.message}
          onChange={handleChange}
          required
          aria-invalid={!!errors.message}
          aria-describedby="message-error"
        />
        {errors.message && (
          <span className="error-message" id="message-error">
            {errors.message}
          </span>
        )}

        <button type="submit">Send</button>
        {submitted && (
          <div className="success-message" role="status">
            Thank you! Your message has been sent.
          </div>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
