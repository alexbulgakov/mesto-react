import React from 'react';
import pen from '../images/pen.svg';
import plus from '../images/plus.svg';

class Main extends React.Component {

    handleEditAvatarClick() {
        document.querySelector('.popup_type_new-avatar').classList.add('popup_opened');
    }

    handleEditProfileClick() {
        document.querySelector('.popup_type_edit').classList.add('popup_opened');
    }

    handleAddPlaceClick() {
        document.querySelector('.popup_type_new-card').classList.add('popup_opened');
    }

    render() {
        return (
            <main className="content">
                <section class="profile">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src="<%=require('./images/photo.jpg')%>" alt="Аватар"></img>
                        <button onClick={this.handleEditAvatarClick} type="button" className="profile__avatar-btn"><img className="profile__avatar-edit-img"
                            src={pen} alt="Кнопка редактирования"></img></button>
                    </div>
                    <div className="profile__profile-info">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <p className="profile__about">Исследователь океана</p>
                    </div>
                    <button onClick={this.handleEditProfileClick} className="profile__edit-button" type="button"><img className="profile__edit-button-img"
                        src={pen} alt="Кнопка редактирования"></img></button>
                    <button onClick={this.handleAddPlaceClick} className="profile__add-button" type="button">
                        <img className="profile__add-button-img" src={plus}
                            alt="Кнопка добавления"></img>
                    </button>
                </section>

                <section className="elements">
                    <ul className="elements__list"></ul>
                </section>
            </main>
        );
    }
}

export default Main;