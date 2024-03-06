const formDeleteUser = document.getElementById('deleteForm');
const deleteModalClose = document.getElementById('deleteModalClose');

function deleteModal(id) {
    fetch("http://localhost:8080/api/admin/" + id)
        .then(response => response.json())
        .then(deleteUser => {
            formDeleteUser.idDelete.value = deleteUser.id;
            formDeleteUser.nameDelete.value = deleteUser.name;
            formDeleteUser.ageDelete.value = deleteUser.age;
            formDeleteUser.emailDelete.value = deleteUser.email;
            const roles = deleteUser.roles;
            const roleDeleteSelect = document.getElementById('roleDelete');
            Array.from(roleDeleteSelect.options).forEach(option => {
                option.selected = false;
            });
            roles.forEach(role => {
                const option = roleDeleteSelect.querySelector(`option[value="${role.id}"]`);
                if (option) {
                    option.selected = true;
                }
            });
        });
}

formDeleteUser.addEventListener('submit', deleteUser => {
    deleteUser.preventDefault();
    let method = {
        method: 'DELETE'
    };

    fetch("http://localhost:8080/api/admin/" + formDeleteUser.idDelete.value, method)
        .then(() => {
            adminPage();
            deleteModalClose.click();
        });
});
