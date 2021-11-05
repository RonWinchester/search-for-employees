import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch } from "react-router-dom";
import Popup from "../Popup/Popup";
import Main from "../Main/Main";

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);


  //Работа Popup
  function closeAllPopups() {
    setPopupOpen(false);
  }

  function handleOverlayClose(evt) {
    if (evt.target === evt.currentTarget) {
      closeAllPopups();
    }
  }

  React.useEffect(() => {
    function handleEscClose(evt) {
      if (evt.key === "Escape") {
        closeAllPopups();
      }
    }
    document.addEventListener("keyup", handleEscClose);

    return () => {
      document.removeEventListener("keyup", handleEscClose);
    };
  });
  return (
    <div className="page__container">
      <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
      <Switch>
        <Main exact path="/"></Main>
      </Switch>

      <Popup
          handleOverlayClose={handleOverlayClose}
          isOpen={popupOpen}
          onClose={closeAllPopups}
        ></Popup>
    </div>
  );
}

export default App;
