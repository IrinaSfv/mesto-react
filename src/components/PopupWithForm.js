import React from "react";

function PopupWithForm(props) {
    return (
        <div className={`popup ${props.type} ${props.isOpen && "popup_opened"}`}>
            <div className={`popup__container ${props.type}__container`}>
                <button className={`popup__close-button ${props.type}__close-button`} type="button" aria-label="Кнопка закрытия данного попапа" onClick={props.onClose}></button>
                <h2 className={`popup__title ${props.type}__title`}>{props.title}</h2>
                <form className={`popup__form ${props.type}__form`} name={props.name}>
                    {props.children}
                    <button type="submit" className={`popup__submit-button popup__button ${props.type}__submit-button`}>{props.submitTitle}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;