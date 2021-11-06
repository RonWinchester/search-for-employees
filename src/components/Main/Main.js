import React from "react";
import CriticalError from "../CriticalError/CriticalError";
import EmploeesList from "../EmploeesList/EmploeesList";

function Main() {
  const [error, setError] = React.useState(false);

  return (
    <>
      {error ? (
        <CriticalError />
      ) : (
        <main className="main">
          <EmploeesList />
        </main>
      )}
    </>
  );
}

export default Main;
