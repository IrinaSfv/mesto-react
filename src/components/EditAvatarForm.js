import React from "react";

function EditAvatarForm() {
    return (
        <>
            <input className="popup__input popup__input_type_avatar" type="url" name="avatarSrc" defaultValue="" placeholder="Ссылка на аватар" id="avatar-input" required />
            <span id="avatar-input-error" className="popup__error"></span>
        </>
    );
}

export default EditAvatarForm;