document.addEventListener('DOMContentLoaded', function () {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');

    if (username) {
        usernameDisplay.textContent = `Hi, ${username}! Welcome to the 2024 UNAM SRC election.`;
    } else {
        window.location.href = 'index.html'; 
    }

    const categories = document.querySelectorAll('.category');
    categories.forEach(category => {
        category.addEventListener('click', function () {
            localStorage.setItem('currentCategory', category.textContent.trim());
            window.location.href = 'candidates.html';
        });
    });

    document.getElementBy
