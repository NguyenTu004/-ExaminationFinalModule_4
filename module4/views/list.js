
function getAllEmployee() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/employee",
        success: function (a) {
            let content = '<tr>\n' +
                '           <td>EmployeeCode</td>\n' +
                '           <td>Name</td>\n' +
                '           <td>Age</td>\n' +
                '           <td>Salary</td>\n' +
                '           <td>Department</td>\n' +
                '        <td style="padding-left:  50px">Action</td>\n' +
                '           </tr>';
            for (let i = 0; i < a.length; i++) {
                content += getListEmployee(a[i]);
            }
            document.getElementById("list-product").innerHTML = content;
        }
    });
}
function getListEmployee(employee) {
    return` <tr>
 <td>${employee.code}</td>
 <td onclick="detailEmployee(${employee.id})" style="color: #d32525">${employee.name}</td>
 <td>${employee.age}</td>
 <td>${employee.salary} $</td>
 <td>${employee.department.name}</td>
 <td><button class="btn-primary" onclick="updateEmployee(${employee.id})">Update</button>
    <button class="btn-warning" onclick="deleteEmployee(${employee.id})">Delete</button>
 </td>
</tr>`
}
function updateEmployee(id) {
    sessionStorage.setItem("employeeId", id);
    location.href='update.html'
}
function detailEmployee(id) {
    sessionStorage.setItem("employeeId", id);
    location.href='detail.html'
}
function deleteEmployee(id) {
    if(confirm("Are you sure you want to delete?")){
        $.ajax({
            type: "DELETE",
            url: "http://localhost:8080/employee/"+id,
            success: function (data) {
                getAllEmployee()
            }
        });
    }

}
function sortEmployee() {
    let value = $("#sort").val();
    document.getElementById("list-product").innerHTML = ""
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/employee/sort/"+value,
        success: function (data) {
            let content = '<tr>\n' +
                '           <td>EmployeeCode</td>\n' +
                '           <td>Name</td>\n' +
                '           <td>Age</td>\n' +
                '           <td>Salary</td>\n' +
                '           <td>Department</td>\n' +
                '        <td style="padding-left:  50px">Action</td>\n' +
                '           </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getListEmployee(data[i]);
            }
            document.getElementById("list-product").innerHTML = content;
        }
    });
}
function displayDepartment() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/department",
        success: function (data) {
            let content = `<option value="0">Department</option>`;
            for (let i = 0; i < data.length; i++) {
                content += getDepartment(data[i])
            }
            document.getElementById("department").innerHTML =content;
        }
    });
}
function getDepartment(department){
    return `<option value="${department.id}">${department.name}</option>`
}
function departEmployee() {
    let value = $("#department").val();
    document.getElementById("list-product").innerHTML = ""
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/employee/department/"+value,
        success: function (data) {
            let content = '<tr>\n' +
                '           <td>EmployeeCode</td>\n' +
                '           <td>Name</td>\n' +
                '           <td>Age</td>\n' +
                '           <td>Salary</td>\n' +
                '           <td>Department</td>\n' +
                '        <td style="padding-left:  50px">Action</td>\n' +
                '           </tr>';
            for (let i = 0; i < data.length; i++) {
                content += getListEmployee(data[i]);
            }
            document.getElementById("list-product").innerHTML = content;
        }
    });
}