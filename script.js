// Creați elementul script
var script = document.createElement('script');
script.src = 'https://cdn.emailjs.com/dist/email.min.js';

// Atașați scriptul la document
document.body.appendChild(script);

import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';

export function PressContact() {
	var form = document.querySelector('form');
	var inputs = form.querySelectorAll('input[type="text"], textarea');
	var allInputsFilled = true;

	for (var i = 0; i < inputs.length; i++) {
		if (inputs[i].value.trim() === '') {
			allInputsFilled = false;
			break;
		}
	}

	if (allInputsFilled) {
		document.getElementsByClassName("SendMessage")[0].style.visibility = "visible";
	}
}

export const ContactUs = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, 'YOUR_PUBLIC_KEY')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <form ref={form} onSubmit={sendEmail}>
      <label>Name</label>
      <input type="text" name="user_name" />
      <label>Email</label>
      <input type="email" name="user_email" />
      <label>Message</label>
      <textarea name="message" />
      <input type="submit" value="Send" />
    </form>
  );
};
