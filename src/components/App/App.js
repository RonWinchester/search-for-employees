import React from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch, Route, useLocation } from "react-router-dom";
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
      Prefer: "code=500, example=error-500",
    },
  };

  const location = useLocation();

  React.useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setError(false);
        localStorage.setItem(
          "employeesData",
          JSON.stringify(response.data.items)
        );
        const employeesData = JSON.parse(localStorage.getItem("employeesData"));
        setEmployess(employeesData);
        setPreloader(false);
        console.log("Обновление данных");
      })
      .catch(function (error) {
        if (localStorage.getItem("employeesData") !== null) {
          setPreloader(false);
          const employeesData = JSON.parse(
            localStorage.getItem("employeesData")
          );
         return setEmployess(employeesData);
        } 
        setError(true);
        console.error(error);
      });
  }, [location]);

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
        <Route path="/designer">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
        </Route>
        <Route path="/analysts">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
        </Route>
        <Route path="/managers">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
        </Route>
        <Route path="/ios">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
        </Route>
        <Route path="/android">
          <NavigationBar setPopupOpen={setPopupOpen}></NavigationBar>
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
