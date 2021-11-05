import React from "react";
import Radio from "../Radio/Radio";

function Popup({ isOpen, handleOverlayClose, onClose }) {
  return (
    <div
      className={`sort ${isOpen ? "sort_opened" : ""}`}
      onClick={handleOverlayClose}
    >
      <div className="sort__content">
        <h2 className="sort__title">Сортировка</h2>
        <button
          className="sort__close-button"
          type="button"
          onClick={onClose}
        />
        <Radio></Radio>
      </div>
    </div>
  );
}

export default Popup;
