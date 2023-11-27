import React from 'react';
import { Link, useLocation } from "react-router-dom";
import logo from '../../images/logo.png'
import './Header.css';
import { headerPathNames } from '../../utils/PathNames';

const Header = () => {
  const location = useLocation()

  return (
    <header className='header'>
        <Link to='/' className='header__logo-link'>
            <img className='header__logo' src={logo} alt='Логотип'/>
        </Link>
        <div className='header__buttons'>
            <button type='button' className='header__button header__button_type-reg'>Регистрация</button>
            <button type='button' className='header__button header__button_type-ent'>Войти</button>
        </div>
    </header>
  );
};

export default Header;