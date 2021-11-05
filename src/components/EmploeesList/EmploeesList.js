import React from "react";
import Emploee from "../Employee/Employee";
import goose from "../../images/goose.png";

function EmploeesList() {
  const arr = Array.from({ length: 8 }, () => ({
    name: 'Имя Фамилия',
    ini: 'Na',
    pro: 'Специальность',
    img: goose
  }))

  return (
    <ul className="emploees-list">
      {arr.map((i, index) => (
        <Emploee key={index} {...i}></Emploee>
      ))}
    </ul>
  );
}

export default EmploeesList;
