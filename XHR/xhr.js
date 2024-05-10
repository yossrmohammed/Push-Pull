document.getElementById('getUserDataBtn').addEventListener('click', function () {
    var xhr = new XMLHttpRequest();
    console.log(xhr)
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                try {
                    var userData = JSON.parse(xhr.responseText);
                    console.log(userData)
                    displayUserData(userData);
                } catch (error) {
                    console.error("Error parsing JSON data:", error);
                }
            } else {
                console.error("Error fetching user data. Status:", xhr.status);
            }
        }
    };
    xhr.open('GET', 'get_users.php', true);
    xhr.send();
});

function displayUserData(userData) {
    console.log(userData)
    var tableHtml = '<table class="table">';
    tableHtml += '<tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th><th>Room No</th><th>Image</th></tr>';
    userData.forEach(function (user) {
        tableHtml += '<tr>';
        tableHtml += `<td>${user.id}</td>`;
        tableHtml += `<td>${user.name}</td>`;
        tableHtml += `<td>${user.email}</td>`;
        tableHtml += `<td>${user.password}</td>`;
        tableHtml += `<td>${user.room_no}</td>`;
        tableHtml += `<td>${user.image}</td>`;
        tableHtml += '</tr>';
    });
    tableHtml += '</table>';
    document.getElementById('userData').innerHTML = tableHtml;
}