// login.js
document.getElementById('loginForm').addEventListener('submit', function (event) {
    const username = document.getElementById('username').value;

    if (!username) {
        alert('Please enter your username');
        event.preventDefault();
    } else {
        sessionStorage.setItem('username', username);
    }
});
