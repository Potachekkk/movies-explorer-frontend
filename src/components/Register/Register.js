import React from "react";
import "./Register.css";
import Auth from "../Auth/Auth";
import AuthName from "../Auth/AuthName/AuthName";
import AuthEmail from "../Auth/AuthEmail/AuthEmail";
import AuthPassword from "../Auth/AuthPassword/AuthPassword";
import useForm from "../FormValidator/FormValidator";

const Register = ({ onRegister, isLoading }) => {
  const { enteredValues, errors, handleChange, isFormValid } = useForm();
  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister({
      name: enteredValues.name,
      email: enteredValues.email,
      password: enteredValues.password,
    });
  };

  return (
    <Auth
      title="Добро пожаловать!"
      submitButtonText="Зарегистрироваться"
      questionText="Уже зарегистрированы?"
      linkRoute="/signin"
      linkText="Войти"
      isValid={isFormValid}
      onSubmit={handleSubmit}
      isLoading={isLoading}
    >
      <AuthName
        onChange={handleChange}
        isLoading={isLoading}
        value={enteredValues.name || ""}
        error={errors.name}
      />
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

export default Register;
