import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Form.css";
import ReCAPTCHA from "react-google-recaptcha";

export default function Form() {
  const refCaptcha = useRef();
  const [formSubmitted, setFormSubmitted] = useState(false)
	const [toSend, setToSend, ] = useState({
    name: '',
    email: '',
    message: ''
  });

	const handleSubmit = (e) => {
		e.preventDefault();
    const token = refCaptcha.current.getValue(); // <- `getValue()` from the instantiated refCaptcha

		const params = {
			...toSend,
			"g-recaptcha-response": token,
		};

		emailjs
			.send(
				"service_r24ify8",
				"template_vhps1zk",
				params,
				"ChuYpA25XmKj00BiR"
			)
			.then(
				(status) => {
					console.log(status);
          setFormSubmitted(true);
				},
				(err) => {
					console.log("EMAILJS ERROR", err);
				}
			);
	};

  const handleChange = (e) => {
    setToSend({...toSend, [e.target.name]: e.target.value });
  };

	return (
		<div>
      {!formSubmitted ? (
        <form
        onSubmit={handleSubmit}
        className="contact-form"
        id="contact-form">
        <label htmlFor="user_name" className="input-label">
          Name<span className="required">*</span>
        </label>
        <input
          type="text"
          id="user_name"
          name="name"
          className="input"
          required
          placeholder="Your name"
          onChange={handleChange}
        />

        <label htmlFor="user_email" className="input-label">
          Email
        </label>
        <input
          type="email"
          id="user_email"
          name="email"
          className="input"
          placeholder="Where should we contact you?"
          onChange={handleChange}
        />

        <label htmlFor="user_message" className="input-label">
          Message<span className="required">*</span>
        </label>
        <textarea
          name="message"
          id="user_message"
          className="input-box"
          required
          rows={4}
          placeholder="What's up?"
          onChange={handleChange}
        />
        <ReCAPTCHA style={{alignSelf:'center', paddingBottom:10}}
        sitekey="6LdspocpAAAAAMAhc9LTSd3WBbaeHlivM4gz9aq-"
        ref={refCaptcha} theme='dark'
        />
        <input
          type="submit"
          value="Send"
          className="submit-btn"
        />
      </form>
      ) : (
        <div className="success-msg">
          <p>Thank you for reaching out! Somebody from the team will reach out ASAP.<br></br><br></br> In the meantime, follow us to see all our latest projects:</p>
        </div>
      )}
				
		</div>
	)
}
