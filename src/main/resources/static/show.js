const bodyTable = document.getElementById('tbody')

function adminPage () {
    let tr = ''
    fetch("http://localhost:8080/api/admin").then((response => response.json()))
        .then((users => {
            for (let user of users) {
                tr += `<tr><td>${user.id}</td>
                  <td>${user.name}</td>         
                  <td>${user.age}</td>         
                  <td>${user.email}</td>         
                  <td>${user.pass}</td>         
                  <td>${user.roles.map(role => role.role.substring(5))}</td>         
                  <td><button class="btn btn-info" data-toggle="modal" data-target="#editModal" onclick="editModal(${user.id})">Edit</button></td>         
                  <td><button class="btn btn-danger" data-toggle="modal" data-target="#deleteModal" onclick="deleteModal(${user.id})">Delete</button></td>
                  </tr>`
            }

            bodyTable.innerHTML = tr
        }))

}

adminPage()