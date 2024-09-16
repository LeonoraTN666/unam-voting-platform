// login.js

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Simple validation (ensure both fields are filled)
    if (username && password) {
        // Save username in localStorage or sessionStorage
        localStorage.setItem('username', username);
        
        // Redirect to the categories page after successful login
        window.location.href = 'categories.html';
    } else {
        alert("Please enter both username and password.");
    }
});
