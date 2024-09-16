// success.js

// Retrieve the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Display the category in the thank-you message
document.getElementById('categoryTitle').textContent = category;

// Handle "Back to Categories" button
document.getElementById('backToCategoriesBtn').addEventListener('click', function() {
    window.location.href = 'categories.html';
});

// Handle logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    localStorage.removeItem('username'); // Clear login data
    window.location.href = 'index.html'; // Redirect to login page
});
