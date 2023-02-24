import React from "react";

function EditProfileForm() {
    return (
        <>
            <input className="popup__input popup__input_type_name" type="text" name="name" defaultValue="Имя" placeholder="Имя" id="name-input" minLength="2" maxLength="40" required />
            <span id="name-input-error" className="popup__error"></span>
            <input className="popup__input popup__input_type_user-info" type="text" name="about" defaultValue="О себе" placeholder="О себе" id="userInfo-input" minLength="2" maxLength="200" required />
            <span id="userInfo-input-error" className="popup__error"></span>
        </>
    );
}

export default EditProfileForm;