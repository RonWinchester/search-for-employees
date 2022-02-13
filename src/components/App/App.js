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
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import { useDispatch, useSelector } from "react-redux";

function App() {
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [employees, setEmployess] = React.useState({});
  const [preloader, setPreloader] = React.useState(true);
  const [error, setError] = React.useState(false);
  const [sorting, setSorting] = React.useState("");
  const [restart, setRestart] = React.useState(false);
  const [status, setStatus] = React.useState(true);
  const [connection, setConnection] = React.useState(false);
  const [pageProfile, setPageProfile] = React.useState({});
  const [online, setOnline] = React.useState(false);
  const [employeePageDate, setEmployeePageDate] = React.useState({});

  const dispatch = useDispatch();
  const store = useSelector((state) => state);

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
    Object.keys(department).forEach((key) => {
      dispatch({
        type: key,
        payload: handleSelectionProfession(employees, key),
      });
    });
  };

  React.useEffect(
    () => (status ? setRestart(true) : setRestart(false)),
    [status]
  );

  window.addEventListener("online", () => setStatus(window.navigator.onLine));
  window.addEventListener("offline", () => {
    setStatus(window.navigator.onLine);
    setOnline(true);
  });

  React.useEffect(() => {
    setPreloader(true);
    setConnection(true);
    restart && setOnline(true);
    axios
      .request(options)
      .then((response) => {
        setError(false);
        localStorage.setItem(
          "employeesData",
          JSON.stringify(setSort(response.data.items, sorting))
        );
        localStorage.setItem(
          "employeesDataByABC",
          JSON.stringify(setSort(response.data.items, "ByABC"))
        );
        const employeesData = JSON.parse(localStorage.getItem("employeesData"));
        setEmployess(employeesData);
        setDepartments(employeesData);

        setPageProfile(getPageProfile(employeesData, location.pathname));
        setPreloader(false);
        setRestart(false);
        setConnection(false);
        setOnline(false);
      })
      .catch((e) => {
        if (localStorage.getItem("employeesData") !== null) {
          setConnection(false);
          setPreloader(false);
          const employeesData = JSON.parse(
            localStorage.getItem("employeesDataByABC")
          );
          e.response.data.key === "InternalServerError"
            ? setOnline(false)
            : setOnline(true);
          return setEmployess(setSort(employeesData, sorting));
        }
        setError(true);
        setRestart(false);
        setConnection(false);
        e.response.data.key === "InternalServerError"
          ? setOnline(false)
          : setOnline(true);
        console.error(error);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location, sorting, restart]);

  let departments = Object.assign({}, department);

  for (let key in departments) {
    departments[key] = JSON.parse(localStorage.getItem(`${key}`));
  }

  function handleSearchEmployees(query) {
    const employeesData = JSON.parse(localStorage.getItem("employeesData"));
    setEmployess(handleFilter(employeesData, query));
    if (location.pathname === "/") {
      return handleFilter(employeesData, query);
    } else {
      return dispatch({
        type: location.pathname.slice(1),
        payload: handleFilter(departments[location.pathname.slice(1)], query),
      });
    }
  }

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

  const routePages = [
    { link: "/", employees: employees },
    { link: "/design", employees: store.design },
    { link: "/analytics", employees: store.analytics },
    { link: "/management", employees: store.management },
    { link: "/ios", employees: store.ios },
    { link: "/android", employees: store.android },
    { link: "/qa", employees: store.qa },
    { link: "/back_office", employees: store.back_office },
    { link: "/hr", employees: store.hr },
    { link: "/pr", employees: store.pr },
    { link: "/backend", employees: store.backend },
    { link: "/support", employees: store.support },
    { link: "/frontend", employees: store.frontend },
  ];

  return (
    <div className="page__container">
      <ErrorMessage status={status} connection={connection} online={online} />
      <Switch>
        {routePages.map((page, index) => (
          <Route exact path={page.link} key={index}>
            <NavigationBar
              setPopupOpen={setPopupOpen}
              handleSearchEmployees={handleSearchEmployees}
              error={error}
            ></NavigationBar>
            <Main
              employees={page.employees}
              preloader={preloader}
              error={error}
              getEmploye={getEmploye}
              sorting={sorting}
              setRestart={setRestart}
            ></Main>
          </Route>
        ))}
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
