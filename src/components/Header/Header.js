import React, { useState, useContext } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import './Header.css';
import { useStore } from '../../Context/store';

const Header = () => {
  const { state, dispatch } = useStore();
  return (
    <header id='header'>
      <h1>
        <Link to='/'>paaa.al</Link>
      </h1>
      <ul id='nav'>
        <li>
          <Link to='/about'>About</Link>
        </li>
        <li>
          <Link to='/blog'>Blog</Link>
        </li>
        <li>
          <Link
            to='/contact'
            onClick={() => dispatch({ type: 'OPEN_CONTACT' })}
          >
            Contact
          </Link>
        </li>
        <li>Resume</li>
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
