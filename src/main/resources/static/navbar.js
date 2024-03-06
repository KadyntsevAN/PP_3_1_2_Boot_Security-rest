const navbar = document.getElementById('span')
fetch("http://localhost:8080/api/user").then((response => response.json())).then((user => authUser(user)))
function authUser(user) {
    let nav = `<b>${user.email}</b> with roles: ${user.roles.map(role => role.role.substring(5))}`
    navbar.innerHTML = nav
}