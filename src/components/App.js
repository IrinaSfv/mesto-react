import React from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import EditAvatarForm from "./EditAvatarForm";
import EditProfileForm from "./EditProfileForm";
import AddPlaceForm from "./AddPlaceForm";
import ImagePopup from "./ImagePopup";

function App() {
    const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
    const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
    const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    function handleEditAvatarClick() {
        setIsEditAvatarPopupOpen(true);
    }

    function handleEditProfileClick() {
        setIsEditProfilePopupOpen(true);
    }

    function handleAddPlaceClick() {
        setIsAddPlacePopupOpen(true);
    }

    function closeAllPopups() {
        setIsEditAvatarPopupOpen(false);
        setIsEditProfilePopupOpen(false);
        setIsAddPlacePopupOpen(false);
        setSelectedCard(null);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

  return (
    <div className="page">
      <Header />
      <Main 
      onEditProfile={handleEditProfileClick} 
      onAddPlace={handleAddPlaceClick} 
      onEditAvatar={handleEditAvatarClick} 
      onCardClick={handleCardClick}  
      />
      <Footer />

      <PopupWithForm 
      type="edit-popup" 
      name="editPopup" 
      title="Редактировать профиль" 
      submitTitle="Сохранить"
      isOpen={isEditProfilePopupOpen}
      children={<EditProfileForm />} 
      onClose={closeAllPopups} 
      />

      <PopupWithForm 
      type="add-popup" 
      name="addPopup" 
      title="Новое место"
      submitTitle="Добавить" 
      isOpen={isAddPlacePopupOpen}
      children={<AddPlaceForm />} 
      onClose={closeAllPopups}  
      />

      <PopupWithForm 
      type="new-avatar-popup" 
      name="newAvatarPopup" 
      title="Обновить аватар" 
      submitTitle="Обновить"
      isOpen={isEditAvatarPopupOpen}
      children={<EditAvatarForm />}
      onClose={closeAllPopups}   
      />

      <ImagePopup 
      type="picture-popup"
      card={selectedCard}
      onClose={closeAllPopups}
      />
    </div>
  );
}

export default App;
