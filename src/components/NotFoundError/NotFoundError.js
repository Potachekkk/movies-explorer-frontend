import React from "react";
import "./NotFoundError.css";

const NotFoundError = ({ title }) => {
  return (
    <div className="not-found-error__container">
      <h2 className="not-found-error__text">{title}</h2>
    </div>
  );
};

export default NotFoundError;
