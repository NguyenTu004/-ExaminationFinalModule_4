function displayDepartment() {
    $.ajax({
        type: "GET",
        url: "http://localhost:8080/department",
        success: function (data) {
            let content = "";
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
function save() {
    let code = $("#code").val();
    let name = $("#name").val();
    let age = $("#age").val();
    let salary = $("#salary").val();
    let departmentId = $("#department").val();
    let newEmployee = {
        id:0,
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
                alert("Create successful employees")
            }else {
                alert("Employee creation failed")
            }

        }
    })
    event.preventDefault();
}
