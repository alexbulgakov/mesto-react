function Card(props) {
    function handleClick() {
        props.onCardClick(props.currentCard);
    }

        return (
            <li className="element">
                <img onClick={handleClick} className="element__picture" src={props.currentCard.link} alt="Фото локации"></img>
                <button className="element__delete" type="button"></button>
                <div className="element__location-box">
                    <h2 className="element__location">{props.currentCard.name}</h2>
                    <div className="element__like-box">
                        <button className="element__like" type="button"></button>
                        <span className="element__likes-counter">{props.currentCard.likes.length}</span>
                    </div>
                </div>
            </li>
        );
}

export default Card;