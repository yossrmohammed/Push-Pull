$(document).ready(function () {
    $('#getUserDataBtn').click(function () {
        $.ajax({
            url: 'get_users.php',
            type: 'GET',
            dataType: 'json',
            success: function (userData) {
                displayUserData(userData);
            },
            error: function (xhr, textStatus, errorThrown) {
                console.error("Error fetching user data. Status:", xhr.status);
            }
        });
    });
});

function displayUserData(userData) {
    var tableHtml = '<table class="table">';
    tableHtml += '<tr><th>ID</th><th>Name</th><th>Email</th><th>Password</th><th>Room No</th><th>Image</th></tr>';
    $.each(userData, function (index, user) {
        tableHtml += '<tr>';
        tableHtml += '<td>' + user.id + '</td>';
        tableHtml += '<td>' + user.name + '</td>';
        tableHtml += '<td>' + user.email + '</td>';
        tableHtml += '<td>' + user.password + '</td>';
        tableHtml += '<td>' + user.room_no + '</td>';
        tableHtml += '<td>' + user.image + '</td>';
        tableHtml += '</tr>';
    });
    tableHtml += '</table>';
    $('#userData').html(tableHtml);
}