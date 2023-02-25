import React from "react";

function Card({card, onCardClick}) {
    function handleClick() {
        onCardClick(card);
    }

    return (
        <li className="elements__card">
            <article className="element" id={card._id}>
                <img className="element__photo" src={card.link} alt={card.name} onClick={handleClick} />
                <button className="element__trash-button" type="button" aria-label="Кнопка для удаления карточки места"></button>
                <div className="element__description">
                    <h2 className="element__title">{card.name}</h2>
                    <div className="element__like-container">
                        <button className="element__like-button" type="button" aria-label="Кнопка лайка карточке места"></button>
                        <p className="element__like-caption">{card.likes.length}</p>
                    </div>
                </div>
            </article>
        </li>
    );
}

export default Card;