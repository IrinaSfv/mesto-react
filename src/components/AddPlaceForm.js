import React from "react";

function AddPlaceForm() {
    return (
        <>
            <input className="popup__input popup__input_type_place" type="text" name="place" defaultValue="" placeholder="Название" id="place-input" minLength="2" maxLength="30" required />
            <span id="place-input-error" className="popup__error"></span>
            <input className="popup__input popup__input_type_link" type="url" name="pictureSrc" defaultValue="" placeholder="Ссылка на картинку" id="link-input" required />
            <span id="link-input-error" className="popup__error"></span>
        </>
    );
}

export default AddPlaceForm;