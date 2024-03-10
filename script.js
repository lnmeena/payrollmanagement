const employeeList = document.getElementById('employee-list');
const employeeDetails = document.getElementById('employee-details');

employeeList.addEventListener('click', (e) => {
  const selectedEmployee = e.target.textContent;
  employeeDetails.innerHTML = `
    <h3>${selectedEmployee}</h3>
    <p>Salary: $5000</p>
    <p>Benefits: Health Insurance, Retirement Plan</p>
    <p>Leave Balance: 20 days</p>
  `;
});
