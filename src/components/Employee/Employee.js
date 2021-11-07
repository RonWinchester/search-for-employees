import React from "react";
import { Link } from "react-router-dom";

function Emploee(props) {

  const { firstName, lastName, userTag, position, avatarUrl, preloader, id, getEmploye } =  props;

  function setEmploye () {
    getEmploye(props);
  };

  return (
    <li className="emploee">
      <Link className="emploee__link" to={`${id}`} onClick={()=>{setEmploye()}}>
        {preloader ? (
          <>
            <div className="emploee__image emploee__preload"></div>
            <dl className="emploee__info">
              <dd className="emploee__name emploee__preload emploee__preload_name">
                <span className="emploee__initials"></span>
              </dd>
              <dt className="emploee__specialization emploee__preload emploee__preload_specialization"></dt>
            </dl>
          </>
        ) : (
          <>
            <img src={avatarUrl} alt="" className="emploee__image" />
            <dl className="emploee__info">
              <dd className="emploee__name">
                {`${firstName} ${lastName}`}
                <span className="emploee__initials">{userTag}</span>
              </dd>
              <dt className="emploee__specialization">{position}</dt>
            </dl>
          </>
        )}
      </Link>
    </li>
  );
}

export default Emploee;
