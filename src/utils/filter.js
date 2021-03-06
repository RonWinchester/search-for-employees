export function handleSelectionProfession(employees, profession) {
  let result = [];
  employees.forEach((employee) => {
    if (employee.newYear === true) {
      result.push(employee);
    } else if (employee.department === profession) {
      result.push(employee);
    }
  });

  localStorage.setItem(`${profession}`, JSON.stringify(result));
  return result;
}

export function handleFilter(employees, query) {
  let result = [];
  if (query.length !== 0) {
    result = employees.filter((employee) => {
      if (!employee.newYear) {
        return (
          employee.firstName.toLowerCase().includes(query.toLowerCase()) ||
          employee.lastName.toLowerCase().includes(query.toLowerCase()) ||
          employee.userTag.toLowerCase().includes(query.toLowerCase())
        );
      } else {
        // eslint-disable-next-line array-callback-return
        return;
      }
    });
  } else {
    result = employees;
  }
  return result;
}

export function getPageProfile(employees, url) {

  switch (url) {
    case "/":
      return {};

    case "/design":
      return {};

    case "/analytics":
      return {};

    case "/management":
      return {};

    case "/ios":
      return {};

    case "/android":
      return {};

    case "/qa":
      return {};

    case "/back_office":
      return {};

    case "/hr":
      return {};

    case "/pr":
      return {};

    case "/backend":
      return {};

    case "/support":
      return {};

    case "/frontend":
      return {};

    default:
      return employees.find((employee) => employee.id === url.slice(1));
  }
}

export function setSort(arr, value) {
  function abc(a, b) {
    if (a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
    if (a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
  }

  function ByBirthday(a, b) {
    if (new Date(a.birthday).getMonth() < new Date(b.birthday).getMonth()) {
      return -1;
    }
    if (new Date(a.birthday).getMonth() === new Date(b.birthday).getMonth()) {
      if (new Date(a.birthday).getDate() < new Date(b.birthday).getDate())
        return -1;
      if (new Date(a.birthday).getDate() > new Date(b.birthday).getDate())
        return 1;
      return 0;
    }
    if (new Date(a.birthday).getMonth() > new Date(b.birthday).getMonth())
      return 1;
  }

  const date = new Date();

  function setNearestDate(dates) {
    const after = [{ newYear: true }];
    const before = [];
    let now = [];
    for (let i = 0; i < dates.length; i++) {
      const arrDate = new Date(dates[i].birthday).getMonth();
      const diff = (arrDate - date.getMonth()) / (3600 * 24 * 1000);
      if (diff < 0) {
        after.push(dates[i]);
      } else {
        before.push(dates[i]);
      }
    }

    for (let i = 0; i < before.length; i++) {
      if (new Date(before[i].birthday).getMonth() === date.getMonth()) {
        const arrDate = new Date(before[i].birthday).getDate();
        const diff = (arrDate - date.getDate()) / (3600 * 24 * 1000);
        if (diff < 0) {
          after.push(before[i]);
        } else {
          now.push(before[i]);
        }
      } else {
        now.push(before[i]);
      }
    }

    let result = [];
    result = result.concat(now, after);
    return result;
  }

  if (value === "ByABC") {
    return arr.sort(abc);
  } else {
    arr.sort(ByBirthday);

    const nearstDates = setNearestDate(arr);

    return nearstDates;
  }
}
