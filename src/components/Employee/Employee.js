import React from "react";

function Emploee({ name, ini, pro, img }) {
  const [preloader, setPreloader] = React.useState(true);

  return (
    <li className="emploee">
      {preloader ? (
        <>
          <img src={img} alt="" className="emploee__image" />
          <dl className="emploee__info">
            <dd className="emploee__name">
              {name}
              <span className="emploee__initials">{ini}</span>
            </dd>
            <dt className="emploee__specialization">{pro}</dt>
          </dl>
        </>
      ) : (
        <>
          <div className="emploee__image emploee__preload"></div>
          <dl className="emploee__info">
            <dd className="emploee__name emploee__preload emploee__preload_name">
              <span className="emploee__initials"></span>
            </dd>
            <dt className="emploee__specialization emploee__preload emploee__preload_specialization"></dt>
          </dl>
        </>
      )}
    </li>
  );
}

export default Emploee;
