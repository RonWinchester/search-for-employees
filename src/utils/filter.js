export function handleSelectionProfession (employees, profession) {
    let result = [];
    employees.forEach(employee => {
        employee.department === profession && result.push(employee)
    })
    return result
  }