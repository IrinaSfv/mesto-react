import React from "react";

function ConfirmPopup(props) {
    return (
        <div className="deletion-confirm-popup popup">
            <div className="deletion-confirm-popup__container popup__container">
                <button className="deletion-confirm-popup__close-button popup__close-button" type="button" aria-label="Кнопка закрытия данного попапа"></button>
                <h2 className="deletion-confirm-popup__title popup__title">Вы уверены?</h2>
                <form className="deletion-confirm-popup__form popup__form" name="deletionPopup">
                    <button type="submit" className="deletion-confirm-popup__submit-button popup__submit-button popup__button">Да</button>
                </form>
            </div>
        </div>
    );
}

export default ConfirmPopup;