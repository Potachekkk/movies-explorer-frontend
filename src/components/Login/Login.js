import React from "react";
import "./Login.css";
import Auth from "../Auth/Auth";
import AuthEmail from "../Auth/AuthEmail/AuthEmail";
import AuthPassword from "../Auth/AuthPassword/AuthPassword";
import useForm from "../FormValidator/FormValidator";

const Login = ({ onLogin, isLoading }) => {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onLogin({
      email: enteredValues.email,
      password: enteredValues.password,
    });
  };

  return (
    <Auth
      title="Рады видеть!"
      submitButtonText="Войти"
      questionText="Ещё не зарегистрированы?"
      linkRoute="/signup"
      linkText="Регистрация"
      onSubmit={handleSubmit}
      isLoading={isLoading}
      isValid={isFormValid}
    >
      <AuthEmail
        onChange={handleChange}
        isLoading={isLoading}
        value={enteredValues.email || ""}
        error={errors.email}
      />
      <AuthPassword
        onChange={handleChange}
        isLoading={isLoading}
        value={enteredValues.password || ""}
        error={errors.password}
      />
    </Auth>
  );
};

export default Login;
