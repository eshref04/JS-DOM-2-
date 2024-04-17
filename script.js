let employees = [];

document.getElementById("addEmployee").addEventListener("click", function(e) {
    e.preventDefault(); 

    let name = document.getElementById("name").value;
    let surname = document.getElementById("surname").value;
    let age = document.getElementById("age").value;
    let nationality = document.getElementById("nationality").value;
    let position = document.getElementById("position").value;
    let experience = document.getElementById("experience").value;

    let employee = {
        name: name,
        surname: surname,
        age: age,
        nationality: nationality,
        position: position,
        experience: experience
    };

    employees.push(employee);
    displayEmployees();
    clearForm();
});

function displayEmployees() {
    let tableBody = document.getElementById("employeeList");
    tableBody.innerHTML = "";

    for (let i = 0; i < employees.length; i++) {
        let employee = employees[i];
        let rowHTML = `
            <tr>
                <td>${employee.name}</td>
                <td>${employee.surname}</td>
                <td>${employee.age}</td>
                <td>${employee.nationality}</td>
                <td>${employee.position}</td>
                <td>${employee.experience}</td>
                <td><button onclick="editEmployee(${i})" class="btn btn-primary">Edit</button></td>
                <td><button onclick="deleteEmployee(${i})" class="btn btn-danger">Delete</button></td>
            </tr>
        `;
        tableBody.innerHTML += rowHTML;
    }
}



function editEmployee(index) {
    let employee = employees[index];
    document.getElementById("name").value = employee.name;
    document.getElementById("surname").value = employee.surname;
    document.getElementById("age").value = employee.age;
    document.getElementById("nationality").value = employee.nationality;
    document.getElementById("position").value = employee.position;
    document.getElementById("experience").value = employee.experience;
}

function deleteEmployee(index) {
    employees.splice(index, 1);
    displayEmployees();
}

function clearForm() {
    document.getElementById("name").value = "";
    document.getElementById("surname").value = "";
    document.getElementById("age").value = "";
    document.getElementById("nationality").value = "";
    document.getElementById("position").value = "";
    document.getElementById("experience").value = "";
}
