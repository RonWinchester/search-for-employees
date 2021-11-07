import React from "react";
import { useHistory } from "react-router-dom";

function Profile(props) {
  const history = useHistory();
  const { firstName, lastName, userTag, position, avatarUrl, birthday, phone } =  props.employee;

  return (
    <div className="profile">
      <div className="profile__info">
        <button className='profile__button' onClick={() => history.goBack()}></button>
        <article className='profile__bio'>
          <img src={avatarUrl} alt={`${firstName} ${lastName}`} className='profile__image'></img>
          <h1 className='profile__title'>
          {`${firstName} ${lastName}`}<span className='profile__initials'>{userTag}</span>
          </h1>
          <p className='profile__specialization'>{position}</p>
        </article>
      </div>
      <div className="profile__contact">
        <p className='profile__date'>{birthday}</p>
        <span className='profile__years'>24 года</span>
        <a href="tel" className='profile__tel'>{phone}</a>
      </div>
    </div>
  );
}

export default Profile;
