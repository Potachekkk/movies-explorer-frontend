import React from 'react';
import { Link, useLocation } from "react-router-dom";
import Navigation from '../Navigation/Navigation'
import logo from '../../images/logo.png'
import './Header.css';
import { headerPathNames } from '../../utils/constant';

const Header = () => {
  const location = useLocation()
   
  return (<> {
    headerPathNames.indexOf(location.pathname) !== -1 && (
    <header className='header'>
        <Link to='/' className='header__logo-link'>
            <img className='header__logo' src={logo} alt='Логотип'/>
        </Link>
        <Navigation />
    </header>
    )
  } </>
  );
};

export default Header;