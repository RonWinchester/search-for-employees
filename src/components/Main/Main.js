import React from "react";
import CriticalError from "../CriticalError/CriticalError";
import EmploeesList from "../EmploeesList/EmploeesList";


function Main({ employees, preloader, error }) {
  const arr = Array.from({ length: 8 }, () => ({}));

  return (
    <>
      {error ? (
        <CriticalError />
      ) : (
        <main className="main">
          {preloader ? (
            <EmploeesList employees={arr} preloader={preloader} />
          ) : (
            <EmploeesList employees={employees} preloader={preloader} />
          )}
        </main>
      )}
    </>
  );
}

export default Main;
