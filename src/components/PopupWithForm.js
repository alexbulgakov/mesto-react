import React from 'react';

class PopupWithForm extends React.Component {

    render() {
        return (
            <section className={`popup popup_type_${this.props.name} ${this.props.isOpen ? `popup_opened`: ``}`}>
                <div className="popup__container">
                    <button onClick={this.props.onClosePopups} className="popup__close-icon" type="button"></button>
                    <form className="popup-form" name={`popup_form_${this.props.name}`} noValidate>
                        <h2 className="popup-form__heading">{this.props.title}</h2>
                        {this.props.children}
                    </form>
                </div>
            </section>
        );
    }
}

export default PopupWithForm;