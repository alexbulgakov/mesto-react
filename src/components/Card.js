import React from 'react';
import { CurrentUserContext } from '../contexts/CurrentUserContext';

function Card(props) {
    const { _id } = React.useContext(CurrentUserContext);
    const isOwn = props.currentCard.owner._id === _id;
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_visible' : 'element__delete_hidden'}`
    );
    const isLiked = props.currentCard.likes.some((i) => i._id === _id);
    const cardLikeButtonClassName = isLiked
        ? "element__like element__like_active"
        : "element__like";

    function handleClick() {
        props.onCardClick(props.currentCard);
    }

    return (
        <li className="element">
            <img onClick={handleClick} className="element__picture" src={props.currentCard.link} alt="Фото локации"></img>
            <button className={cardDeleteButtonClassName} type="button"></button>
            <div className="element__location-box">
                <h2 className="element__location">{props.currentCard.name}</h2>
                <div className="element__like-box">
                    <button className={cardLikeButtonClassName} type="button"></button>
                    <span className="element__likes-counter">{props.currentCard.likes.length}</span>
                </div>
            </div>
        </li>
    );
}

export default Card;