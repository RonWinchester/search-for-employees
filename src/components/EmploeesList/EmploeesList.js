import React from "react";
import Emploee from "../Employee/Employee";
import NoEmployees from "../NoEmployees/NoEmployees";

function EmploeesList({ employees, preloader }) {
  return (
    <>
      {employees.length > 0 ? (
        <ul className="emploees-list">
          {employees.map((i, index) => (
            <Emploee key={index} {...i} preloader={preloader}></Emploee>
          ))}
        </ul>
      ) : (
        <NoEmployees></NoEmployees>
      )}
    </>
  );
}

export default EmploeesList;
