import React from "react";
import { useHistory } from "react-router-dom";
import goose from '../../images/goose.png'

function Profile(props) {
  const history = useHistory();
  const { firstName, lastName, userTag, position, birthday, phone } =
    props.employee;

  const options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  };

  const birthdate = new Date(birthday).toLocaleString("ru", options);
  const years = +new Date().getFullYear() - new Date(birthday).getFullYear();

  return (
    <div className="profile">
      <div className="profile__info">
        <button
          className="profile__button"
          onClick={() => history.goBack()}
        ></button>
        <article className="profile__bio">
          <img
            src={goose}
            alt={`${firstName} ${lastName}`}
            className="profile__image"
          ></img>
          <h1 className="profile__title">
            {`${firstName} ${lastName}`}
            <span className="profile__initials">{userTag}</span>
          </h1>
          <p className="profile__specialization">{position}</p>
        </article>
      </div>
      <div className="profile__contact">
        <p className="profile__date">
          {birthdate.slice(0, birthdate.length - 2)}
        </p>
        <span className="profile__years">
          {String(years).endsWith("1")
            ? `${years} год`
            : String(years).endsWith("2") |
              String(years).endsWith("3") |
              String(years).endsWith("4")
            ? `${years} года`
            : `${years} лет`}
        </span>
        <a href="tel" className="profile__tel">
          {phone}
        </a>
      </div>
    </div>
  );
}

export default Profile;
