const formEditUser = document.getElementById('formEdit');
const editModalClose = document.getElementById('editModalClose');

function editModal(id) {
    fetch("http://localhost:8080/api/admin/" + id)
        .then(response => response.json())
        .then(editUser => {
            formEditUser.idEdit.value = editUser.id;
            formEditUser.nameEdit.value = editUser.name;
            formEditUser.ageEdit.value = editUser.age;
            formEditUser.emailEdit.value = editUser.email;

            const roles = editUser.roles;

            const roleEditSelect = document.getElementById('roleEdit');

            Array.from(roleEditSelect.options).forEach(option => {
                option.selected = false;
            });

            roles.forEach(role => {
                const option = roleEditSelect.querySelector(`option[value="${role.id}"]`);
                if (option) {
                    option.selected = true;
                }
            });
        });
}

formEditUser.addEventListener('submit', editUser => {
    editUser.preventDefault();
    const editRole = document.querySelector('#roleEdit').selectedOptions;
    const roles = [];
    for (let i = 0; i < editRole.length; i++) {
        roles.push({
            id: editRole[i].value
        });
    }

    const method = {
        method: 'PATCH',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            id: formEditUser.idEdit.value,
            name: formEditUser.nameEdit.value,
            age: formEditUser.ageEdit.value,
            email: formEditUser.emailEdit.value,
            roles: roles
        })
    };

    fetch("http://localhost:8080/api/admin/" + formEditUser.idEdit.value, method)
        .then(() => {
            adminPage();
            editModalClose.click();
        });
});
