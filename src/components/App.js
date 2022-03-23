import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  return (
    <body>
      <div className="root">
        <Header />
        <Main />
        <PopupWithForm name="edit"
          title="Редактировать профиль"
          children={
            <fieldset className="popup-form__input-container">
              <label className="popup-form__field">
                <input className="popup-form__item popup-form__item_el_name" type="text" name="name"
                  id="name-input" required minlength="2" maxlength="40" placeholder="Имя"></input>
                <span className="popup-form__input-error name-input-error"></span>
              </label>
              <label className="popup-form__field">
                <input className="popup-form__item popup-form__item_el_about" type="text" name="about"
                  id="about-input" required minlength="2" maxlength="200"
                  placeholder="Профессиональная деятельность"></input>
                <span className="popup-form__input-error about-input-error"></span>
              </label>
              <button className="popup-form__button" type="submit">Сохранить</button>
            </fieldset>
          }
        />

        <PopupWithForm name="new-card"
          title="Новое место"
          children={
            <fieldset className="popup-form__input-container">
              <label className="popup-form__field">
                <input className="popup-form__item popup-form__item_el_name" type="text" name="name"
                  placeholder="Название" id="name" required minlength="2" maxlength="30"></input>
                <span className="popup-form__input-error name-error"></span>
              </label>
              <label className="popup-form__field">
                <input className="popup-form__item popup-form__item_el_link" type="url" name="link"
                  placeholder="Ссылка на картинку" id="link" required></input>
                <span className="popup-form__input-error link-error"></span>
              </label>
              <button className="popup-form__button" type="submit">Создать</button>
            </fieldset>
          }
        />

        <PopupWithForm name="new-avatar"
          title="Обновить аватар"
          children={
            <fieldset className="popup-form__input-container">
              <label className="popup-form__field">
                <input className="popup-form__item popup-form__item_avatar_link" type="url" name="link-avatar"
                  placeholder="Ссылка на аватар" id="avatar-link" required></input>
                <span className="popup-form__input-error avatar-link-error"></span>
              </label>
              <button className="popup-form__button" type="submit">Сохранить</button>
            </fieldset>
          }
        />

        <PopupWithForm name="delete"
          title="Вы уверены?"
          children={
            <fieldset className="popup-form__input-container popup-form__input-container_type_delete">
              <button className="popup-form__button popup-form__button_type_delete" type="submit">Да</button>
            </fieldset>
          }
        />

        <ImagePopup />

        <Footer />
      </div>

      <template id="card">
        <li className="element">
          <img className="element__picture" src="#" alt="Фото локации"></img>
          <button className="element__delete" type="button"></button>
          <div className="element__location-box">
            <h2 className="element__location"></h2>
            <div className="element__like-box">
              <button className="element__like" type="button"></button>
              <span className="element__likes-counter"></span>
            </div>
          </div>
        </li>
      </template>
    </body>
  );
}

export default App;
