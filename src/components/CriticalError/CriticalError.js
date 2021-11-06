import React from "react";
import image from "../../images/critical-error-image.png";

function CriticalError() {
  return (
    <div className="critical-error">
      <img
        src={image}
        alt="Критическая ошибка"
        className="critical-error__image"
      ></img>
      <h1 className="critical-error__title">Какой-то сверхразум все сломал</h1>
      <p className="critical-error__description">Постараемся быстро починить</p>
      <button className="critical-error__button">Попробовать снова</button>
    </div>
  );
}

export default CriticalError;
