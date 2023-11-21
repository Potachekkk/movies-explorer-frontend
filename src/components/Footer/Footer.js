import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
  <footer className='footer'>
    <p className='footer__title'>Учебный проект Яндекс.Практикум х BeatFilm.</p>
    <div className='footer__container'>
      <p className='footer__year'>© 2023</p>
      <nav className='footer__nav'>
        <ul className='footer__list'>
          <li className='footer__item'>
            <a rel='noreferrer'target='_blank' className='footer__link' href='https://practicum.yandex.ru'>Яндекс.Практикум</a>
          </li>
          <li className='footer__item'>
            <a rel='noreferrer'target='_blank' className='footer__link' href='https://github.com/Potachekkk'>Github</a>
          </li>
        </ul>
      </nav>
    </div>
  </footer>
  );
};

export default Footer;