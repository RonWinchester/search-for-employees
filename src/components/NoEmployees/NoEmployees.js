import React from "react";
import image from '../../images/no-employees.png'

function NoEmployees() {
  return (
    <div className="no-employees">
      <img
        src={image}
        alt="Критическая ошибка"
        className="no-employees__image"
      ></img>
      <h1 className="no-employees__title">Мы никого не нашли</h1>
      <p className="no-employees__description">Попробуй скорректировать запрос</p>
    </div>
  );
}

export default NoEmployees;
