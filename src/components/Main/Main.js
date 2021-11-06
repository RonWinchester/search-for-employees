import React from "react";
import CriticalError from "../CriticalError/CriticalError";
import EmploeesList from "../EmploeesList/EmploeesList";
import NoEmployees from "../NoEmployees/NoEmployees";

function Main() {
  const [error, setError] = React.useState(false);
  const [employees, setEmpoyess] = React.useState(true)

  return (
    <>
      {error ? (
        <CriticalError />
      ) : (
        <main className="main">
          {employees ? <EmploeesList /> : <NoEmployees/>}
        </main>
      )}
    </>
  );
}

export default Main;
