import React from 'react';
import './Profile.css';
import { useState } from 'react';
import Header from '../Header/Header';


const Profile = () => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditButtonClick = () => {
    setIsEditing(true);
  };

  const handleSaveButtonClick = () => {
    setIsEditing(false);
  };

  return (
    <main className='profile section'>
      <div className='profile__container'>
        <div className='profile__column'>
          <h1 className='profile__title'>Привет, Виталий!</h1>
          <form name='profile'className='profile__form'>
            <label className='profile__input-container'>
              <span className='profile__input-label'>Имя</span>
              <input className='profile__input' name='name' type='text' placeholder='Введите имя' minLength='2' maxLength='30' required />
              <span className='profile__input-error'>Ошибка</span>
            </label>
            <label className='profile__input-container'>
              <span className='profile__input-label'>E-mail</span>
               <input className='profile__input profile__input_type_email' name='email' type='email' placeholder='Введите почту' required />
              <span className='profile__input-error'>Ошибка</span>
            </label>
          </form>
        </div>
        <div className='profile__footer'>
        {!isEditing ? (<>
            <button type='button' onClick={handleEditButtonClick} className='profile__button profile__edit-button'>Редактировать</button>
            <button type='button' className='profile__button profile__sign-out-button'>Выйти из аккаунта</button>
          </>) : (<>
            <span className='profile__edit-error'>При обновлении профиля произошла ошибка.</span>
            <button type='submit' onClick={handleSaveButtonClick} className='profile__button profile__save-button profile__save-button_inactive' disabled>Сохранить</button>
          </>)}
        </div>
      </div>
    </main>
  );
};

export default Profile;