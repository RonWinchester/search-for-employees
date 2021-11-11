import React from "react";

function ErrorMessage({ status, connection, online }) {
  return (
    <div
      className={`error-message ${connection && "error-message_ok"} ${
        online && "error-message_active"
      }`}
    >
      <h1 className="error-message_title">Поиск</h1>
      <p className="error-message_desc">
        {status === false
          ? "Не могу обновить данные. Проверь соединение с интернетом."
          : "Секундочку, гружусь..."}
      </p>
    </div>
  );
}

export default ErrorMessage;
