// vote.js

// Retrieve the category from the URL
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category');

// Display the selected category title
document.getElementById('categoryTitle').textContent = category;

// Handle vote submission
document.getElementById('submitVoteBtn').addEventListener('click', function() {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    
    if (selectedCandidate) {
        // Store the vote in local storage (for demo purposes)
        localStorage.setItem(`${category}Vote`, selectedCandidate.value);

        // Redirect to a success page after the vote is submitted
        window.location.href = `success.html?category=${category}`;
    } else {
        alert('Please select a candidate before submitting your vote.');
    }
});
