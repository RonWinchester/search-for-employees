import React from "react";
import { Link } from "react-router-dom";

function Emploee(props) {
  const {
    firstName,
    lastName,
    userTag,
    position,
    avatarUrl,
    preloader,
    id,
    getEmploye,
    birthday,
    sorting
  } = props;

  function setEmploye() {
    getEmploye(props);
  }

  const options = {
    month: "short",
    day: "numeric",
  };

  const years = new Date(birthday).toLocaleString("ru", options);

  return (
    <li className="emploee">
      <Link
        className="emploee__link"
        to={`${id}`}
        onClick={() => {
          setEmploye();
        }}
      >
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
      {sorting === 'ByBirthday' && <p className="emploee__years">{years.slice(0, years.length - 1)}</p>}
    </li>
  );
}

export default Emploee;
