import React from 'react';
import './Login.css';
import Auth from '../Auth/Auth';
import AuthEmail from '../Auth/AuthEmail/AuthEmail';
import AuthPassword from '../Auth/AuthPassword/AuthPassword';


const Login = () => {
  return (
    <Auth
     title='Рады видеть!'
     buttonText='Войти'
     linkText='Ещё не зарегистрированы?'
     linkTitle='Регистрация'
     link='/signup'
    >
      <AuthEmail />
      <AuthPassword />
    </Auth>
  );
};

export default Login;