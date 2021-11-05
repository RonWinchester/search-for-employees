import React from "react";

function Radio() {
  const [checked, setChecked] = React.useState(false);

  function handleRadio() {
    setChecked(!checked);
  }

  return (
    <form className="radio">
      <fieldset className="radio__fieldset">
        <input
          className="radio__input"
          type="radio"
          name="radio"
          id="radio-1"
          onChange={handleRadio}
          checked
        />
        <label htmlFor="radio">
          По алфавиту
        </label>
      </fieldset>
      <fieldset className="radio__fieldset">
        <input
          className="radio__input"
          type="radio"
          name="radio"
          id="radio-2"
          onChange={handleRadio}

        />
        <label htmlFor="radio">
          По дню рождения
        </label>
      </fieldset>
    </form>
  );
}

export default Radio;
