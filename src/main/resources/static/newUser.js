const formNewUser = document.getElementById('addUser');

formNewUser.addEventListener('submit', event => {
    event.preventDefault();

    const selectedRoles = Array.from(document.getElementById('role').selectedOptions).map(option => option.value);

    const formData = {
        name: formNewUser.querySelector('#name').value,
        age: formNewUser.querySelector('#age').value,
        email: formNewUser.querySelector('#email').value,
        pass: formNewUser.querySelector('#pass').value,
        roles: selectedRoles
    };

    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    };

    const usersTab = document.getElementById('users-tab');
    fetch("http://localhost:8080/api/admin/new", options)
        .then(response => {
            if (response.ok) {
                formNewUser.reset();
                adminPage()
                usersTab.click();
            } else {
                throw new Error('Failed to add new user');
            }
        })
        .catch(error => {
            console.error('Error:', error);
        });
});
