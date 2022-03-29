import React, { useState, useEffect } from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import api from '../utils/api';
import '../index.css';
import { CurrentUserContext } from '../contexts/CurrentUserContext';
import { defaultUser } from '../utils/utils';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = useState(false);
  const [selectedCard, setSelectedCard] = useState({ name: '', link: '' });
  const [currentUser, setCurrentUser] = useState(defaultUser);

  useEffect(() => {
    api.getUserInfo()
      .then(res => {
        setCurrentUser(res);
      })
      .catch((error) => {
        console.log(error);
      });
  });

  function handleEditAvatarClick() {
    setIsEditAvatarPopupOpen(true);
  }

  function handleEditProfileClick() {
    setIsEditProfilePopupOpen(true);
  }

  function handleAddPlaceClick() {
    setIsAddPlacePopupOpen(true);
  }

  function handleCardClick(data) {
    setSelectedCard({ name: data.name, link: data.link });
  }

  function closeAllPopups() {
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsAddPlacePopupOpen(false);
    setSelectedCard({ name: '', link: '' });
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <body>
        <div className="root">
          <Header />
          <Main onEditProfile={handleEditProfileClick}
            onAddPlace={handleAddPlaceClick}
            onEditAvatar={handleEditAvatarClick}
            onCardClick={handleCardClick} />
          <PopupWithForm
            name="edit"
            title="Редактировать профиль"
            buttonText="Сохранить"
            isOpen={isEditProfilePopupOpen}
            onClosePopups={closeAllPopups}
          >
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_el_name" type="text" name="name"
                id="name-input" required minLength="2" maxLength="40" placeholder="Имя"></input>
              <span className="popup-form__input-error name-input-error"></span>
            </label>
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_el_about" type="text" name="about"
                id="about-input" required minLength="2" maxLength="200"
                placeholder="Профессиональная деятельность"></input>
              <span className="popup-form__input-error about-input-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            name="new-card"
            title="Новое место"
            buttonText="Создать"
            isOpen={isAddPlacePopupOpen}
            onClosePopups={closeAllPopups}
          >
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_el_name" type="text" name="name"
                placeholder="Название" id="name" required minLength="2" maxLength="30"></input>
              <span className="popup-form__input-error name-error"></span>
            </label>
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_el_link" type="url" name="link"
                placeholder="Ссылка на картинку" id="link" required></input>
              <span className="popup-form__input-error link-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            name="new-avatar"
            title="Обновить аватар"
            buttonText="Сохранить"
            isOpen={isEditAvatarPopupOpen}
            onClosePopups={closeAllPopups}
          >
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_avatar_link" type="url" name="link-avatar"
                placeholder="Ссылка на аватар" id="avatar-link" required></input>
              <span className="popup-form__input-error avatar-link-error"></span>
            </label>
          </PopupWithForm>

          <PopupWithForm
            name="delete"
            title="Вы уверены?"
            isOpen={false}
            onClosePopups={closeAllPopups}
            buttonText="Да"
          >
          </PopupWithForm>
          <ImagePopup card={selectedCard} onClose={closeAllPopups} />

          <Footer />
        </div>
      </body>
    </CurrentUserContext.Provider>
  );
}

export default App;
