import React, { useState } from 'react';
import axios from 'axios';
import './Contact.css';
import { useStore } from '../../Context/store';

const Contact = () => {
  const { state, dispatch } = useStore();

  window.addEventListener('keyup', (e) => {
    if (e.key === 'Escape') {
      dispatch({
        type: 'CLOSE_CONTACT',
      });
    }
  });

  const sendEmail = (e) => {
    e.preventDefault();
    axios
      .post('https://api.emailjs.com/api/v1.0/email/send', {
        service_id: 'gmail',
        template_id: 'test',
        user_id: 'user_WSU0gZDyRK3w5SUgp8GYJ',
        template_params: {
          from_name: state.name,
          reply_email: state.emailAddress,
          message_html: state.message,
        },
      })
      .then((response) => {
        console.log(response);
      })
      .catch((err) => {
        console.log(err);
      })
      .then(() => {
        dispatch({ type: 'CLOSE_CONTACT' });
      });
  };

  const handleChange = (e) => {
    dispatch({ type: 'EMAIL', payload: e.target.value, field: e.target.name });
  };
  return (
    <div id='contactBack'>
      <p id='closeit' onClick={() => dispatch({ type: 'CLOSE_CONTACT' })}>
        X
      </p>

      <form onSubmit={sendEmail} id='contactForm'>
        <h1>Say Hi!</h1>
        <p>
          Have a question about a project or a post? Want to work with me? Drop
          details in the box below and I'll get back to you!
        </p>
        <input
          type='text'
          name='name'
          onChange={handleChange}
          placeholder='Name Nameson'
          value={state.name}
          required
        />
        <input
          type='email'
          name='emailAddress'
          onChange={handleChange}
          placeholder='your@email.com'
          value={state.emailAddress}
          required
        />
        <input
          type='textarea'
          name='message'
          onChange={handleChange}
          placeholder='Your message here'
          value={state.message}
          required
        />
        <input type='submit' value='Send it!' />
      </form>
    </div>
  );
};

export default Contact;
