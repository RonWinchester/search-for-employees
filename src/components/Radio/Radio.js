import React from "react";

function Radio({setSorting, onClose}) {
  const [checked, setChecked] = React.useState('ByABC');
  

  function handleRadio(e) {
    setChecked(e.target.value);
  }
  React.useEffect(()=>{
    setSorting(checked)
    onClose();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setSorting, checked])
  

  return (
    <form className="radio">
      <fieldset className="radio__fieldset">
        <input
          className="radio__input"
          type="radio"
          name="radio"
          id="radio-1"
          onChange={handleRadio}
          value='ByABC'
          checked={checked === 'ByABC'}
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
          value='ByBirthday'
          checked={checked === 'ByBirthday'}
        />
        <label htmlFor="radio">
          По дню рождения
        </label>
      </fieldset>
    </form>
  );
}

export default Radio;
