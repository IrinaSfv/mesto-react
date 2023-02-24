import React from "react";

function ImagePopup(props) {
    return (
        <div className={`popup ${props.type} ${props.card && "popup_opened"}`}>
            <div className={`popup__container ${props.type}__container`}>
                <button className={`popup__close-button ${props.type}__close-button`} type="button" aria-label="Кнопка закрытия данного попапа" onClick={props.onClose}></button>
                <figure className="picture-popup__figure">
                    <img className="picture-popup__image" src={`${props.card && props.card.link}`} alt={`${props.card && props.card.name}`} />
                    <figcaption className="picture-popup__caption">{`${props.card && props.card.name}`}</figcaption>
                </figure>
            </div>
        </div>
    );
}

export default ImagePopup;