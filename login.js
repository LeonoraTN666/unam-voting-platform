// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Validate login (simple validation for demo purposes)
    if (username && password) {
        localStorage.setItem('username', username);
        window.location.href = 'categories.html';
    } else {
        document.getElementById('errorMessage').textContent = "Please enter both username and password.";
    }
});
