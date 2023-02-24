import React from "react";
import profileAvatar from '../images/Profile_Avatar.jpg';
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {
    const [userName, setUserName] = React.useState("Жак-Ив Кусто");
    const [userDescription, setUserDescription] = React.useState("Исследователь океана");
    const [userAvatar, setUserAvatar] = React.useState({profileAvatar});
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        api.getUserData()
        .then((resUser) => {
            setUserName(resUser.name);
            setUserDescription(resUser.about);
            setUserAvatar(resUser.avatar);
        })
        .catch(() => {
            console.log(`Ошибка при загрузке данных пользователя.`)
        })
    }, []);

    React.useEffect(() => {
        api.getInitialCards()
        .then((resCards) => {
            setCards(resCards);
            console.log(resCards);
        })
        .catch(() => {
            console.log(`Ошибка при загрузке карточек.`)
        })
    }, []);

    return (
        <main className="content page__content">
          <section className="profile">
              <div className="profile__avatar-container">
                  <button className="profile__avatar-edit-button" type="button" aria-label="Кнопка редактирования аватара пользователя" onClick={props.onEditAvatar}></button>
                  <img className="profile__avatar" src={userAvatar} alt="Аватар" />
              </div>
              <div className="profile__avatar-info">
                  <h1 className="profile__title">{userName}</h1>
                  <button className="profile__edit-button" type="button" aria-label="Кнопка редактирования профиля пользователя" onClick={props.onEditProfile}></button>
                  <p className="profile__description">{userDescription}</p>
              </div>
              <button className="profile__add-button" type="button" aria-label="Кнопка добавления новой карточки места" onClick={props.onAddPlace}></button>
          </section>
          <section className="elements" aria-label="Элементы">
              <ul className="elements__list">
                    {cards.map(item => {
                            return (
                                <Card card={item} key={item._id} onCardClick={props.onCardClick} />
                            )
                        }
                    )}
              </ul>
          </section>
      </main>
    );
}

export default Main;