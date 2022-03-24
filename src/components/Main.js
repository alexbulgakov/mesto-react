import React from 'react';
import api from '../utils/api';
import pen from '../images/pen.svg';
import plus from '../images/plus.svg';

class Main extends React.Component {

    constructor() {
        super();

        this.state = {
            userName: '',
            userDescription: '',
            userAvatar: '',
            cards: [],
        };
    }

    componentDidMount() {
        api.getUserInfo()
            .then(res => {
                this.setState({ userName: res.name });
                this.setState({ userDescription: res.about });
                this.setState({ userAvatar: res.avatar });
            })
            .catch((error) => {
                console.log(error);
            });

        api.getCards()
            .then(res => {
                this.setState({ cards: res })
                console.log(this.state.cards);
            })
            .catch((error) => {
                console.log(error);
            });
    }


    render() {
        return (
            <main className="content">
                <section className="profile">
                    <div className="profile__avatar-box">
                        <img className="profile__avatar" src={this.state.userAvatar} alt="Аватар"></img>
                        <button onClick={this.props.onEditAvatar} type="button" className="profile__avatar-btn"><img className="profile__avatar-edit-img"
                            src={pen} alt="Кнопка редактирования"></img></button>
                    </div>
                    <div className="profile__profile-info">
                        <h1 className="profile__name">{`${this.state.userName}`}</h1>
                        <p className="profile__about">{this.state.userDescription}</p>
                    </div>
                    <button onClick={this.props.onEditProfile} className="profile__edit-button" type="button"><img className="profile__edit-button-img"
                        src={pen} alt="Кнопка редактирования"></img></button>
                    <button onClick={this.props.onAddPlace} className="profile__add-button" type="button">
                        <img className="profile__add-button-img" src={plus}
                            alt="Кнопка добавления"></img>
                    </button>
                </section>

                <section className="elements">
                    <ul className="elements__list">
                        {this.state.cards.map((card, i) => (
                                <li className="element" key={card._id}>
                                    <img className="element__picture" src={card.link} alt="Фото локации"></img>
                                    <button className="element__delete" type="button"></button>
                                    <div className="element__location-box">
                                        <h2 className="element__location">{card.name}</h2>
                                        <div className="element__like-box">
                                            <button className="element__like" type="button"></button>
                                            <span className="element__likes-counter">{card.likes.length}</span>
                                        </div>
                                    </div>
                                </li>
                        ))}
                    </ul>
                </section>
            </main>
        );
    }
}

export default Main;