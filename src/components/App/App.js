import React from "react";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch, Route } from "react-router-dom";
import Popup from "../Popup/Popup";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";

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
      <Switch>
        <Route exact path="/">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
          <Main></Main>
        </Route>
        <Route path='/page'>
          <Profile></Profile>
        </Route>
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
