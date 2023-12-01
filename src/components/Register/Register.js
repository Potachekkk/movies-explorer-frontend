import React from 'react';
import './Register.css';
import Auth from '../Auth/Auth';
import AuthName from '../Auth/AuthName/AuthName';
import AuthEmail from '../Auth/AuthEmail/AuthEmail';
import AuthPassword from '../Auth/AuthPassword/AuthPassword';


const Register = () => {
  return (
    <Auth
     title='Добро пожаловать!'
     buttonText='Зарегистрироваться'
     linkText='Уже зарегистрированы?'
     linkTitle='Войти'
     link='/signin'
    >
      <AuthName />
      <AuthEmail />
      <AuthPassword />
    </Auth>
  );
};

export default Register;