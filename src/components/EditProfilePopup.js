import React from 'react';
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from '../contexts/CurrentUserContext'

class EditProfilePopup extends React.Component {
    static contextType = CurrentUserContext;
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            description: '',
        };
    }
    componentDidMount() {
        this.onComponentDidMount();
    }

    onComponentDidMount() {
        this.setState({ name: this.context.name, description: this.context.about });
    }

    handleNameChange(e) {
        this.setState({ name: e.target.value });
    }

    handleDescriptionChange(e) {
        this.setState({ description: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();

        this.props.onUpdateUser({
            name: this.state.name,
            about: this.state.description,
        });
    }
    render() {
        return (
            <PopupWithForm
                name="edit"
                title="Редактировать профиль"
                buttonText="Сохранить"
                isOpen={this.props.isOpen}
                onClosePopups={this.props.onClosePopups}
                onSubmit={this.handleSubmit.bind(this)}
            >
                <label className="popup-form__field">
                    <input
                        className="popup-form__item popup-form__item_el_name"
                        type="text"
                        name="name"
                        id="name-input"
                        required
                        minLength="2"
                        maxLength="40"
                        placeholder="Имя"
                        value={this.state.name || ''}
                        onChange={this.handleNameChange.bind(this)} >
                    </input>
                    <span className="popup-form__input-error name-input-error"></span>
                </label>
                <label className="popup-form__field">
                    <input className="popup-form__item popup-form__item_el_about"
                        type="text"
                        name="about"
                        id="about-input"
                        required
                        minLength="2"
                        maxLength="200"
                        placeholder="Профессиональная деятельность"
                        value={this.state.description || ''}
                        onChange={this.handleDescriptionChange.bind(this)}>
                    </input>
                    <span className="popup-form__input-error about-input-error"></span>
                </label>
            </PopupWithForm>
        );
    }
}

export default EditProfilePopup;
