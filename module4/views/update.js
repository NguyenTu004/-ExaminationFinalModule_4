function updateForm(employee) {
    $("#code").val(`${employee.code}`);
    $("#name").val(`${employee.name}`);
    $("#age").val(`${employee.age}`);
    $("#salary").val(`${employee.salary}`);
}
function displayDepartmentDetail() {
    let id = sessionStorage.getItem("employeeId")
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/employee/"+id,
        success: function (data) {
            updateForm(data);
            displayDepartment(data)
        }
    });
}
function displayDepartment(employee) {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/department",
        success: function (data) {
            let content = "";
            if (employee !== undefined){
                content+=`<option value="${employee.department.id}">${employee.department.name}</option>`
            }
            for (let i = 0; i < data.length; i++) {
                if (employee.department.name !== data[i].name) {
                    content += getDepartment(data[i])
                }
            }
            document.getElementById("department").innerHTML =content;
        }
    });
}
function getDepartment(department){
    return `<option value="${department.id}">${department.name}</option>`
}
function save() {
    let id = sessionStorage.getItem("employeeId");
    let code = $("#code").val();
    let name = $("#name").val();
    let age = $("#age").val();
    let salary = $("#salary").val();
    let departmentId = $("#department").val();
    let newEmployee = {
        id:id,
        code:code,
        name:name,
        age:age,
        salary:salary,
        department: {
            id:departmentId
        }
    }
    $.ajax({
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        type: "POST",
        url: "http://localhost:8080/employee",
        data: JSON.stringify(newEmployee),
        success: function (data) {
            if (data !== undefined){
                location.href='list.html'
                alert("Save successful employees")
            }else {
                alert("Save false employees")
            }

        }
    })
    event.preventDefault();
}