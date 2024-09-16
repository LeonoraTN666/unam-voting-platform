// categories.js
document.addEventListener('DOMContentLoaded', function () {
    const username = sessionStorage.getItem('username');
    if (username) {
        document.getElementById('greeting').textContent = `Hi, ${username}! Welcome to the 2024 UNAM SRC election.`;
    }

    document.getElementById('logoutBtn').addEventListener('click', function () {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });
});
