import React from "react";

function Card(props) {
    function handleClick() {
       props.onCardClick(props.card);
    }

    return (
        <li className="elements__card">
            <article className="element" id={props.card._id}>
                <img className="element__photo" src={props.card.link} alt={props.card.name} onClick={handleClick} />
                <button className="element__trash-button" type="button" aria-label="Кнопка для удаления карточки места"></button>
                <div className="element__description">
                    <h2 className="element__title">{props.card.name}</h2>
                    <div className="element__like-container">
                        <button className="element__like-button" type="button" aria-label="Кнопка лайка карточке места"></button>
                        <p className="element__like-caption">{props.card.likes.length}</p>
                    </div>
                </div>
            </article>
        </li>
    );
}

export default Card;