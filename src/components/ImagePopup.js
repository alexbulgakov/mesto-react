import React from 'react';

class ImagePopup extends React.Component {
    render() {
        return (
            <section className="popup popup_type_image">
                <div className="popup__container-img">
                    <button className="popup__close-icon" type="button"></button>
                    <img className="popup__picture" src="#" alt="Фото локации"></img>
                    <p className="popup__location-name"></p>
                </div>
            </section>
        );
    }
}

export default ImagePopup;