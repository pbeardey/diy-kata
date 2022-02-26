const getEmployerRole = (employeeName, employees) => {
    return employees.find(e => e.name === employeeName).role;
};
  
module.exports = getEmployerRole;
