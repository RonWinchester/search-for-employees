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
}
