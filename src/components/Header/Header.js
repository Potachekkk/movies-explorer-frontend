import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
        <Link className='header__navLink'>Регистрация</Link>
        <Link className='header__navLink'>Войти</Link>
    </header>

  );
};

export default Header;