import React from 'react';
import logo from '../assets/logo.png';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className='header'>
      <nav className='nav'>
        <Link to='/'>
          <img src={logo} alt="Logo" style={{ width: '100px', height: 'auto' }} />
        </Link>
      </nav>
    </header>
  );
};

export default Header;
