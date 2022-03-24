import React from 'react';

class Card extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <li className="element" key={this.props.currentCard._id}>
                <img className="element__picture" src={this.props.currentCard.link} alt="Фото локации"></img>
                <button className="element__delete" type="button"></button>
                <div className="element__location-box">
                    <h2 className="element__location">{this.props.currentCard.name}</h2>
                    <div className="element__like-box">
                        <button className="element__like" type="button"></button>
                        <span className="element__likes-counter">{this.props.currentCard.likes.length}</span>
                    </div>
                </div>
            </li>
        );
    }
}

export default Card;