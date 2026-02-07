const api = "http://localhost:8080/employees";

function loadEmployees(url = api) {
  fetch(url)
    .then(res => res.json())
    .then(data => {
      employeeTable.innerHTML = "";
      data.forEach(e => {
        employeeTable.innerHTML += `
          <tr>
            <td>${e.firstName} ${e.lastName}</td>
            <td>${e.email}</td>
            <td>${e.phone}</td>
            <td>${e.designation}</td>
            <td>${e.salary}</td>
            <td>
              <button class="action-btn edit" onclick="editEmployee(${e.id})">Edit</button>
              <button class="action-btn delete" onclick="deleteEmployee(${e.id})">Delete</button>
            </td>
          </tr>
        `;
      });
    });
}

function saveEmployee() {
  const id = empId.value;

  const emp = {
    firstName: firstName.value,
    lastName: lastName.value,
    email: email.value,
    phone: phone.value,
    salary: salary.value,
    designation: designation.value
  };

  fetch(id ? `${api}/${id}` : api, {
    method: id ? "PUT" : "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(emp)
  })
  .then(res => {
    if (!res.ok) return res.text().then(t => { throw t });
    return res.json();
  })
  .then(() => {
    clearForm();
    loadEmployees();
  })
  .catch(err => error.innerText = err);
}

function editEmployee(id) {
  fetch(`${api}/${id}`)
    .then(res => res.json())
    .then(e => {
      empId.value = e.id;
      firstName.value = e.firstName;
      lastName.value = e.lastName;
      email.value = e.email;
      phone.value = e.phone;
      salary.value = e.salary;
      designation.value = e.designation;
      formTitle.innerText = "Edit Employee";
    });
}

function deleteEmployee(id) {
  fetch(`${api}/${id}`, { method: "DELETE" })
    .then(() => loadEmployees());
}

function searchEmployee() {
  const key = search.value;
  if (!key) loadEmployees();
  else loadEmployees(`${api}/search?keyword=${key}`);
}

function clearForm() {
  empId.value = "";
  firstName.value = lastName.value = email.value =
  phone.value = salary.value = designation.value = "";
  error.innerText = "";
  formTitle.innerText = "Add Employee";
}

loadEmployees();
