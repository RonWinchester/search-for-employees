export function handleSelectionProfession(employees, profession) {
  let result = [];
  employees.forEach((employee) => {
    employee.department === profession && result.push(employee);
  });

  localStorage.setItem(`${profession}`, JSON.stringify(result));
  return result;
}

export function handleFilter(employees, query) {
  let result = [];
  if (query.length !== 0) {
    result = employees.filter((employee) => {
      return (
        employee.firstName.toLowerCase().includes(query.toLowerCase()) ||
        employee.lastName.toLowerCase().includes(query.toLowerCase()) ||
        employee.userTag.toLowerCase().includes(query.toLowerCase())
      );
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

    case "/designer":
      return {};

    case "/analysts":
      return {};

    case "/managers":
      return {};

    case "/ios":
      return {};

    case "/android":
      return {};

    default:
      return employees.find((employee) => employee.id === url.slice(1));
  }
};

export function setSort(arr, value) {

  function abc (a, b){
    if(a.firstName.toLowerCase() < b.firstName.toLowerCase()) return -1;
    if(a.firstName.toLowerCase() > b.firstName.toLowerCase()) return 1;
  }

  function ByBirthday (a, b){
    return new Date(b.birthday) - new Date(a.birthday);
  }

  if(value === 'ByABC') {
    return arr.sort(abc)} else { return arr.sort(ByBirthday)}
}
