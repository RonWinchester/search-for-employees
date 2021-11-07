export function handleSelectionProfession(employees, profession) {
  let result = [];
  employees.forEach((employee) => {
    employee.department === profession && result.push(employee);
  });
  return result;
}

export function handleFilter(employees, query) {
  let result = [];
  if (query.length !== 0) {
    result = employees.filter((employee) => {
      return employee.firstName.toLowerCase().includes(query.toLowerCase()) ||
      employee.lastName.toLowerCase().includes(query.toLowerCase()) ||
      employee.userTag.toLowerCase().includes(query.toLowerCase());
    });
  } else {
    result = employees;
  }
  return result;
}
