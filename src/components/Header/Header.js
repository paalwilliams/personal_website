import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import { useStore } from '../../Context/store';

const Header = () => {
    const { state, dispatch } = useStore();

    const wiggleComingSoon = () => {
        document.querySelector('.comingSoon small').textContent +=
            ' (I said coming soon)';
    };
    return (
        <header id='header'>
            <h1>
                <Link to='/'>paaaaal</Link>
            </h1>
            <ul id='nav'>
                {/* <li>
          <Link to='/about'>About</Link>
        </li> */}
                <li className='comingSoon' onClick={wiggleComingSoon}>
                    <Link>
                        <strike>
                            <em>Blog</em>
                        </strike>
                        <small>(coming soon)</small>
                    </Link>
                </li>
                {/* <li class='no'>
          <Link
            to='/contact'
            onClick={() => dispatch({ type: 'OPEN_CONTACT' })}
          >
            Contact
          </Link>
        </li> */}
                {/* <li>
                    <Link
                        to='/resume'
                        onClick={() => {
                            dispatch({ type: 'TOGGLE_RESUME' });
                        }}
                    >
                        Resume
                    </Link>
                </li> */}
            </ul>
            <div
                className='hamburger'
                onClick={() => {
                    dispatch({ type: 'TOGGLE_HAMBURGER' });
                }}
            >
                <div className='patty'></div>
                <div className='patty'></div>
                <div className='patty'></div>
            </div>
        </header>
    );
};

export default Header;
