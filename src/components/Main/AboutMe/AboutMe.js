import React from "react";
import "./AboutMe.css";
import studentPhoto from "../../../images/student_photo.png";

const AboutMe = () => {
  return (
    <section className="about-me">
      <h2 className="about-me__title main__title">Студент</h2>
      <div className="about-me__container">
        <div className="about-me__info">
          <h3 className="about-me__name">Влад</h3>
          <p className="about-me__about">Фронтенд-разработчик, 28 лет</p>
          <p className="about-me__description">
            Живу в Москве, закончил РГГУ по специальности "Юрист в финансовой
            сфере. Люблю играть в игры, слушать музыку и смотреть кино. У меня
            есть собака, золотистый ретривер, зовут Хлоя". Ей 1 год и 9 месяцев.
          </p>
          <a
            rel="noreferrer"
            target="_blank"
            href="https://github.com/Potachekkk"
            className="about-me__link"
          >
            Github
          </a>
        </div>
        <img src={studentPhoto} alt="Фото" className="about-me__photo" />
      </div>
    </section>
  );
};

export default AboutMe;
