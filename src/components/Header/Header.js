import React from 'react';
import { Link } from "react-router-dom";
import logo from '../../images/logo.png'
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <Link to='/' className='header__logo-link'>
            <img className='header__logo' src={logo} alt='Логотип'/>
        </Link>
        <Link className='header__navLink'>Регистрация</Link>
        <Link className='header__navLink'>Войти</Link>
    </header>

  );
};

export default Header;