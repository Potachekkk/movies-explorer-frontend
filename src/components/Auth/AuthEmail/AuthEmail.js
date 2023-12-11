import React from "react";
import AuthMain from "../AuthMain/AuthMain";

const AuthEmail = ({ ...validationParams }) => {
  return (
    <AuthMain
      labelText="E-mail"
      type="email"
      name="email"
      placeholder="Введите почту"
      required
      {...validationParams}
    />
  );
};

export default AuthEmail;
