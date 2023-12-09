import React, { useContext, useEffect, useState } from 'react';
import './Register.css';
import Auth from '../Auth/Auth';
import AuthName from '../Auth/AuthName/AuthName';
import AuthEmail from '../Auth/AuthEmail/AuthEmail';
import AuthPassword from '../Auth/AuthPassword/AuthPassword';
import useForm from '../FormValidator/FormValidator';
import { Navigate, useLocation } from 'react-router-dom';
import { LoggedInContext } from '../context/LoggedInContext';
import * as api from '../../utils/MainApi';
import { REQUEST_ERROR_TEXTS } from '../../utils/constant';


const Register = ({ onLogin }) => {
  const loggedIn = useContext(LoggedInContext);
  const location = useLocation();

  const [requestError, setRequestError] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const [values, errors, isValid, handleChange] = useForm();

  const handleSubmit = (evt) => {
    evt.preventDefault();

    setRequestError('');
    setIsLoading(true);

    api.register(values)
      .then(() => {
        const { email, password } = values;

        return api.authorize({ email, password })
          .then(({ token }) => {
            if (token) {
              onLogin(token);
            }
          });
      })
      .catch((err) => {
        // let message;
        
        // if (err.split(' ')[1] === '409') {
        //   message = REQUEST_ERROR_TEXTS.USER_ALREADY_EXISTS;
        // }
        // else if (err.split(' ')[1] === '500') {
        //   message = REQUEST_ERROR_TEXTS.INTERNAL_SERVER_ERROR;
        // }
        // else {
        //   message = REQUEST_ERROR_TEXTS.SIGNUP_ERROR;
        // }
        
        // setRequestError(message);
        console.log(err)
      });

    setIsLoading(false);
  };

  useEffect(() => {
    if (loggedIn && location.pathname === '/signup') {
      return <Navigate to='/movies' />;
    }
  }, [loggedIn]);


  return (
    <Auth
     title='Добро пожаловать!'
      submitButtonText='Зарегистрироваться'
      questionText='Уже зарегистрированы?'
      linkRoute='/signin'
      linkText='Войти'
      isValid={isValid}
      onSubmit={handleSubmit}
      isLoading={isLoading}
      requestError={requestError}
    >
      <AuthName
      onChange={handleChange}
      isLoading={isLoading}
      value={values.name || ''}
      error={errors.name} />
      <AuthEmail 
      onChange={handleChange}
      isLoading={isLoading}
      value={values.email || ''}
      error={errors.email}/>
      <AuthPassword
      onChange={handleChange}
      isLoading={isLoading}
      value={values.password || ''}
      error={errors.password}/>
    </Auth>
  );
};

export default Register;