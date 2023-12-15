import React from "react";
import "./AuthMain.css";

const AuthMain = ({ labelText, error, isLoading, ...inputAttributes }) => {
  return (
    <label className="auth__main-container">
      <span className="auth__main-label">{labelText}</span>
      <input
        className={`auth__main ${error ? "auth__main_incorrect" : ""}`}
        disabled={isLoading}
        {...inputAttributes}
      />
      <span className="auth__main-error">{error}</span>
    </label>
  );
};

export default AuthMain;
