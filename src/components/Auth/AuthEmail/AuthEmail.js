import React from 'react';
import AuthMain from '../AuthMain/AuthMain';

const AuthEmail = () => {
  return (
    <AuthMain
      labelText='E-mail'
      type='email'
      name='email'
      placeholder='Введите почту'
      required
    />
  );
};

export default AuthEmail;