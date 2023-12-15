import React from "react";
import "./More.css";

const More = ({ onMoreButtonClick }) => {
  const handleMoreButtonClick = () => {
    onMoreButtonClick();
  };
  return (
    <section className="more section">
      <button
        type="button"
        className="more__button"
        onClick={handleMoreButtonClick}
      >
        Ещё
      </button>
    </section>
  );
};

export default More;
