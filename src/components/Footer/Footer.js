import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GitHub, Codepen } from 'react-feather';
const Footer = () => {
  return (
    <footer id='footer'>
      <div className='icons'>
        <a href='https://github.com/paalwilliams/'>
          <GitHub size='30' color='blue' />
        </a>
        <a href='https://codepen.io/paalpwmd'>
          <Codepen size='30' color='blue' />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
