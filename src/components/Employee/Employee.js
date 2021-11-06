import React from "react";

function Emploee({
  firstName,
  lastName,
  userTag,
  position,
  avatarUrl,
  preloader,
}) {
  return (
    <li className="emploee">
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
    </li>
  );
}

export default Emploee;
