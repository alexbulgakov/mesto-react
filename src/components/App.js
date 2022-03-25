import React from 'react';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({ name: '', link: '' });

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
    <body>
      <div className="root">
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick} />
        <PopupWithForm name="edit"
          title="Редактировать профиль"
          isOpen={isEditProfilePopupOpen}
          onClosePopups={closeAllPopups}
        >
          <fieldset className="popup-form__input-container">
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
            <button className="popup-form__button" type="submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="new-card"
          title="Новое место"
          isOpen={isAddPlacePopupOpen}
          onClosePopups={closeAllPopups}
        >
          <fieldset className="popup-form__input-container">
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
            <button className="popup-form__button" type="submit">Создать</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="new-avatar"
          title="Обновить аватар"
          isOpen={isEditAvatarPopupOpen}
          onClosePopups={closeAllPopups}
        >
          <fieldset className="popup-form__input-container">
            <label className="popup-form__field">
              <input className="popup-form__item popup-form__item_avatar_link" type="url" name="link-avatar"
                placeholder="Ссылка на аватар" id="avatar-link" required></input>
              <span className="popup-form__input-error avatar-link-error"></span>
            </label>
            <button className="popup-form__button" type="submit">Сохранить</button>
          </fieldset>
        </PopupWithForm>

        <PopupWithForm name="delete"
          title="Вы уверены?"
          isOpen={false}
          onClosePopups={closeAllPopups}
        >
          <fieldset className="popup-form__input-container popup-form__input-container_type_delete">
            <button className="popup-form__button popup-form__button_type_delete" type="submit">Да</button>
          </fieldset>
        </PopupWithForm>
        <ImagePopup card={selectedCard} onClose={closeAllPopups} />

        <Footer />
      </div>
    </body>
  );
}

export default App;
