document.getElementById('login-form').addEventListener('submit', function (e) {
    e.preventDefault();
    
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    
    if (username && password) {
        window.location.href = 'categories.html';
    } else {
        alert('Please enter both username and password.');
    }
});
