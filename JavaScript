// Redirect to category selection if login credentials are entered
document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.querySelector('form');
    
    loginForm.addEventListener('submit', (event) => {
        const username = document.getElementById('username').value.trim();
        const password = document.getElementById('password').value.trim();

        // Check if username and password are not empty
        if (username === "" || password === "") {
            event.preventDefault();
            alert("Please enter both username and password.");
        }
    });

    // Retrieve the query parameter (selected candidate) for confirmation
    const urlParams = new URLSearchParams(window.location.search);
    const selectedCandidate = urlParams.get('candidate');

    if (selectedCandidate) {
        document.querySelector('.selected-candidate p').textContent = selectedCandidate;
    }
});
