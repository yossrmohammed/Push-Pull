let btn = document.getElementById('getUserDataBtn');


btn.addEventListener('click', function () {
    function longPolling() {
        $.ajax({
            method: "GET",
            url: 'get_users.php',
            success: function (res) {
                var userData = JSON.parse(res);
                displayUserData(userData);

                setTimeout(longPolling, 10000);
            },
            error: function () {
                console.log('error');
                setTimeout(longPolling, 8000);
            },
        });
    }

    longPolling();
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