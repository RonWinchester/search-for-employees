import React from "react";
import axios from "axios";
import NavigationBar from "../NavigationBar/NavigationBar";
import { Switch, Route, useLocation } from "react-router-dom";
import Popup from "../Popup/Popup";
import Main from "../Main/Main";
import Profile from "../Profile/Profile";
import {
  handleSelectionProfession,
  handleFilter,
  getPageProfile,
  setSort,
} from "../../utils/filter";
import { department } from "../../constants/constants";

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [employees, setEmployess] = React.useState({});
  const [preloader, setPreloader] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [designers, setDesigners] = React.useState([]);
  const [analytics, setAnalytics] = React.useState([]);
  const [managers, setManagers] = React.useState([]);
  const [iosDevelopers, setIosDevelopers] = React.useState([]);
  const [androidDevelopers, setAndroidDevelopers] = React.useState([]);
  const [sorting, setSorting] = React.useState('')

  const [pageProfile, setPageProfile] = React.useState({});

  const options = {
    method: "GET",
    url: "https://stoplight.io/mocks/kode-education/trainee-test/25143926/users",
    headers: {
      "Content-Type": "application/json",
      Prefer: "code=200, example=success",
    },
  };

  const location = useLocation();

  const setDepartments = (employees) => {
    setDesigners(handleSelectionProfession(employees, department.design));
    setAnalytics(handleSelectionProfession(employees, department.analytics));
    setManagers(handleSelectionProfession(employees, department.management));
    setIosDevelopers(handleSelectionProfession(employees, department.ios));
    setAndroidDevelopers(
      handleSelectionProfession(employees, department.android)
    );
  };

  React.useEffect(() => {
    axios
      .request(options)
      .then((response) => {
        setError(false);
        const data = response.data.items
        setSort(data, sorting)
        localStorage.setItem(
          "employeesData",
          JSON.stringify(data)
        );
        const employeesData = JSON.parse(localStorage.getItem("employeesData"));
        setEmployess(employeesData);
        setDepartments(employeesData);

        setPageProfile(getPageProfile(employeesData, location.pathname));
        setPreloader(false);
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
  }, [location, sorting]);

  let departments = Object.assign({}, department);

  for (let key in departments) {
    departments[key] = JSON.parse(localStorage.getItem(`${key}`));
  }

  function handleSearchEmployees(query) {
    const employeesData = JSON.parse(localStorage.getItem("employeesData"));

    setEmployess(handleFilter(employeesData, query));
    setDesigners(handleFilter(departments.design, query));
    setAnalytics(handleFilter(departments.analytics, query));
    setManagers(handleFilter(departments.management, query));
    setIosDevelopers(handleFilter(departments.ios, query));
    setAndroidDevelopers(handleFilter(departments.android, query));
  }

  const [employeePageDate, setEmployeePageDate] = React.useState({});
  function getEmploye(employee) {
    setEmployeePageDate(employee);
  }

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
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={employees}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        <Route path="/designer">
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={designers}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        <Route path="/analysts">
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={analytics}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        <Route path="/managers">
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={managers}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        <Route path="/ios">
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={iosDevelopers}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        <Route path="/android">
          <NavigationBar
            setPopupOpen={setPopupOpen}
            handleSearchEmployees={handleSearchEmployees}
            error={error}
          ></NavigationBar>
          <Main
            employees={androidDevelopers}
            preloader={preloader}
            error={error}
            getEmploye={getEmploye}
            sorting={sorting}
          ></Main>
        </Route>
        {employeePageDate.hasOwnProperty("id") ? (
          <Route path={`/${employeePageDate.id}`}>
            <Profile employee={employeePageDate}></Profile>
          </Route>
        ) : (
          <Route path={`/${pageProfile.id}`}>
            <Profile employee={pageProfile}></Profile>
          </Route>
        )}
      </Switch>
      <Popup
        handleOverlayClose={handleOverlayClose}
        isOpen={popupOpen}
        onClose={closeAllPopups}
        setSorting={setSorting}
      ></Popup>
    </div>
  );
}

export default App;
