import React from "react";
import NavigationMenu from "../NavigationMenu/NavigationMenu";

function NavigationBar({ setPopupOpen }) {
  const [query, setQuery] = React.useState("");

  function handleSearchChange(e) {
    setQuery(e.target.value);
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();
    console.log(query);
  };
  
  return (
    <header className="header">
      <form className="navigation-bar" onSubmit={handleSubmit}>
        <h1 className="navigation-bar__title">Поиск</h1>
        <fieldset className="navigation-bar__fieldset">
          <label className="navigation-bar__label">
            <input
              required
              type="text"
              minLength="1"
              onChange={handleSearchChange}
              value={query}
              className="navigation-bar__input"
              placeholder="Введи имя, тег, почту..."
            ></input>
          </label>
        </fieldset>
      </form>
      <button
        className="navigation-bar__filter"
        type="click"
        onClick={() => {
          setPopupOpen(true);
        }}
      ></button>
      <NavigationMenu></NavigationMenu>
    </header>
  );
}

export default React.memo(NavigationBar);
/* export default NavigationBar; */