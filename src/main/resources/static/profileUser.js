const table = document.getElementById('tableBody')

fetch("http://localhost:8080/api/user")
    .then((response) => {
        return response.json();
    })
    .then((user) => {
        let tr = `<tr><td>${user.id}</td>
                  <td>${user.name}</td>
                  <td>${user.age}</td>
                  <td>${user.email}</td>
                  <td>${user.roles.map(role => role.role.substring(5))}</td></tr>`
        table.innerHTML = tr
    });