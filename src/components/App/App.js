import React from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch, Route } from "react-router-dom";
import Popup from "../Popup/Popup";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [employees, setEmployess] = React.useState({});
  const [preloader, setPreloader] = React.useState(true);
  const [error, setError] = React.useState(false);

  const options = {
    method: "GET",
    url: "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
    headers: {
      "Content-Type": "application/json",
      Prefer: "code=200, example=success",
    },
  };

  React.useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setError(false);
        setEmployess(response.data.items);
        setPreloader(false);
      })
      .catch(function (error) {
        setError(true);
        console.error(error);
      });
  }, []);

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
          <Main
            employees={employees}
            preloader={preloader}
            error={error}
          ></Main>
        </Route>
        <Route path="/page">
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
