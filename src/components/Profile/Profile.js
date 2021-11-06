import React from "react";
import goose from "../../images/goose.png";

function Profile() {
  return (
    <div className="profile">
      <div className="profile__info">
        <button className='profile__button'></button>
        <article className='profile__bio'>
          <img src={goose} alt={goose} className='profile__image'></img>
          <h1 className='profile__title'>
            Алиса Иванова<span className='profile__initials'>al</span>
          </h1>
          <p className='profile__specialization'>Designer</p>
        </article>
      </div>
      <div className="profile__contact">
        <p className='profile__date'>5 июня 1996</p>
        <span className='profile__years'>24 года</span>
        <a href="tel" className='profile__tel'>+7 (999) 900 90 90</a>
      </div>
    </div>
  );
}

export default Profile;
