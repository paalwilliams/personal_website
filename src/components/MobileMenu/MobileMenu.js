import React from 'react';
import { Link } from 'react-router-dom';
import './MobileMenu.css';
import { useStore } from '../../Context/store';

const MobileMenu = () => {
  const { state, dispatch } = useStore();
  return (
    <div id='mobile-menu'>
      <ul id='mobile-menu'>
        <li>
          <Link
            to='/about'
            onClick={() => dispatch({ type: 'TOGGLE_HAMBURGER' })}
          >
            About
          </Link>
        </li>
        <li>
          <Link
            to='/blog'
            onClick={() => dispatch({ type: 'TOGGLE_HAMBURGER' })}
          >
            Blog
          </Link>
        </li>
        <li>
          <Link
            to='/resume'
            onClick={() => dispatch({ type: 'TOGGLE_HAMBURGER' })}
          >
            Resume
          </Link>
        </li>
        <li>
          <Link
            to='/contact'
            onClick={() => {
              dispatch({ type: 'OPEN_CONTACT' });
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default MobileMenu;
