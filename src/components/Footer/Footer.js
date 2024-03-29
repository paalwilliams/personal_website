import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';
import { GitHub, Codepen, Mail } from 'react-feather';
const Footer = () => {
    return (
        <footer id='footer'>
            <div className='icons'>
                <a href='https://github.com/paalwilliams/' target='_blank'>
                    <GitHub size='50' color='blue' />
                </a>
                <a href='https://codepen.io/paalpwmd' target='_blank'>
                    <Codepen size='50' color='blue' />
                </a>
                <a href='mailto:paalwilliams@gmail.com'>
                    <Mail size='50' color='blue' />
                </a>
            </div>
        </footer>
    );
};

export default Footer;
