import Header from './Header';
import '../index.css';
import pen from '../images/pen.svg';
import plus from '../images/plus.svg';

function App() {
  return (
    <body>
      <div className="root">
        <Header />
        <main className="content">
          <section class="profile">
            <div className="profile__avatar-box">
              <img className="profile__avatar" src="<%=require('./images/photo.jpg')%>" alt="Аватар"></img>
              <button type="button" className="profile__avatar-btn"><img className="profile__avatar-edit-img"
                src="<%=require('./images/pen.svg')%>" alt="Кнопка редактирования"></img></button>
            </div>
            <div className="profile__profile-info">
              <h1 className="profile__name">Жак-Ив Кусто</h1>
              <p className="profile__about">Исследователь океана</p>
            </div>
            <button className="profile__edit-button" type="button"><img className="profile__edit-button-img"
              src={pen} alt="Кнопка редактирования"></img></button>
            <button className="profile__add-button" type="button">
              <img className="profile__add-button-img" src={plus}
                alt="Кнопка добавления"></img>
            </button>
          </section>

          <section className="elements">
            <ul className="elements__list"></ul>
          </section>
        </main>

        <section className="popup popup_type_edit">
          <div clasNames="popup__container">
            <button className="popup__close-icon" type="button"></button>
            <form className="popup-form" name="popup-form-edit" novalidate>
              <h2 className="popup-form__heading">Редактировать профиль</h2>
              <fieldset clasNames="popup-form__input-container">
                <label className="popup-form__field">
                  <input className="popup-form__item popup-form__item_el_name" type="text" name="name"
                    id="name-input" required minlength="2" maxlength="40" placeholder="Имя"></input>
                  <span class="popup-form__input-error name-input-error"></span>
                </label>
                <label className="popup-form__field">
                  <input className="popup-form__item popup-form__item_el_about" type="text" name="about"
                    id="about-input" required minlength="2" maxlength="200"
                    placeholder="Профессиональная деятельность"></input>
                  <span className="popup-form__input-error about-input-error"></span>
                </label>
                <button className="popup-form__button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section>

        <section className="popup popup_type_new-card">
          <div className="popup__container">
            <button className="popup__close-icon" type="button"></button>
            <form className="popup-form" name="popup-form-add" novalidate>
              <h2 className="popup-form__heading">Новое место</h2>
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
            </form>
          </div>
        </section>

        <section className="popup popup_type_new-avatar">
          <div className="popup__container">
            <button className="popup__close-icon" type="button"></button>
            <form className="popup-form" name="popup-form-add" novalidate>
              <h2 className="popup-form__heading">Обновить аватар</h2>
              <fieldset className="popup-form__input-container">
                <label className="popup-form__field">
                  <input className="popup-form__item popup-form__item_avatar_link" type="url" name="link-avatar"
                    placeholder="Ссылка на аватар" id="avatar-link" required></input>
                  <span className="popup-form__input-error avatar-link-error"></span>
                </label>
                <button className="popup-form__button" type="submit">Сохранить</button>
              </fieldset>
            </form>
          </div>
        </section>

        <section className="popup popup_type_delete">
          <div className="popup__container">
            <button className="popup__close-icon" type="button"></button>
            <form className="popup-form" name="popup-form-delete" novalidate>
              <h2 className="popup-form__heading">Вы уверены?</h2>
              <fieldset className="popup-form__input-container popup-form__input-container_type_delete">
                <button className="popup-form__button popup-form__button_type_delete" type="submit">Да</button>
              </fieldset>
            </form>
          </div>
        </section>

        <section className="popup popup_type_image">
          <div className="popup__container-img">
            <button className="popup__close-icon" type="button"></button>
            <img className="popup__picture" src="#" alt="Фото локации"></img>
            <p className="popup__location-name"></p>
          </div>
        </section>

        <footer className="footer">
          <p className="footer__author">&#169; 2022 Алексей Булгаков</p>
        </footer>
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
