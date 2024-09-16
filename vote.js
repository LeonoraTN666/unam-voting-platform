// Login functionality
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        // Basic validation for username and password
        if (username && password) {
            // Save the username in localStorage and redirect to the voting page
            localStorage.setItem('username', username);
            window.location.href = 'vote.html';
        } else {
            alert('Please enter both username and password.');
        }
    });

    // Show username on vote.html
    const usernameDisplay = document.getElementById('usernameDisplay');
    if (usernameDisplay) {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = `Hi, ${username}! Welcome to the 2024 UNAM SRC election.`;
        } else {
            window.location.href = 'index.html'; // Redirect to login if no username is found
        }
    }
});

// Voice Assistance Feature
let voiceAssistanceOn = false;

document.getElementById('voice-assist-btn').addEventListener('click', function () {
    const voiceAssistStatus = document.getElementById('voice-assist-status');
    voiceAssistanceOn = !voiceAssistanceOn;
    if (voiceAssistanceOn) {
        voiceAssistStatus.textContent = 'Voice assistance activated';
        activateVoiceAssistance();
    } else {
        voiceAssistStatus.textContent = 'Voice assistance deactivated';
        deactivateVoiceAssistance();
    }
});

function activateVoiceAssistance() {
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            const text = button.textContent || button.value;
            readOutLoud(text);
        });
    });
}

function deactivateVoiceAssistance() {
    const buttons = document.querySelectorAll('button, input[type="submit"]');
    buttons.forEach(button => {
        button.removeEventListener('click', readOutLoud);
    });
}

function readOutLoud(message) {
    const speech = new SpeechSynthesisUtterance(message);
    window.speechSynthesis.speak(speech);
}

// Voting functionality
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function () {
        localStorage.setItem('currentCategory', category.textContent.trim());
        window.location.href = 'candidates.html';
    });
});

// Load candidates based on selected category
document.addEventListener('DOMContentLoaded', function () {
    const candidatesContainer = document.getElementById('candidates');
    const categoryTitle = document.getElementById('categoryTitle');

    if (candidatesContainer && categoryTitle) {
        const selectedCategory = localStorage.getItem('currentCategory');
        categoryTitle.textContent = `Category | ${selectedCategory}`;

        // Load candidates dynamically
        const candidates = getCandidatesByCategory(selectedCategory);
        candidates.forEach(candidate => {
            const candidateItem = `
                <div class="candidate">
                    <img src="${candidate.image}" alt="${candidate.name}">
                    <span>${candidate.name}</span>
                    <input type="radio" name="candidate" value="${candidate.name}">
                </div>
            `;
            candidatesContainer.innerHTML += candidateItem;
        });
    }
});

function getCandidatesByCategory(category) {
    const candidateList = {
        "Vice President": [
            { name: "Anna de Kler", image: "images/anna.jpg" },
            { name: "Heather Leo", image: "images/heather.jpg" },
            { name: "Kia Noel", image: "images/kia.jpg" },
            { name: "Jasmine Makeba", image: "images/jasmine.jpg" }
        ],
        "Secretary": [
            { name: "John Shiweda", image: "images/john.jpg" },
            { name: "Leon Kent", image: "images/leon.jpg" },
            { name: "Love Dehate", image: "images/love.jpg" }
        ],
        "Finance": [
            { name: "Martha Louw", image: "images/martha.jpg" },
            { name: "Peter Clarke", image: "images/peter.jpg" },
            { name: "Gwen Doe", image: "images/gwen.jpg" }
        ],
        "Public Relations": [
            { name: "Nick Jonas", image: "images/nick.jpg" },
            { name: "Sophie Wells", image: "images/sophie.jpg" },
            { name: "Amanda Radebe", image: "images/amanda.jpg" }
        ],
        // Add more categories and candidates as needed
    };
    return candidateList[category] || [];
}

// Submit vote and navigate back to categories
const submitVoteBtn = document.getElementById('submitVote');
submitVoteBtn.addEventListener('click', function () {
    const selectedCandidate = document.querySelector('input[name="candidate"]:checked');
    if (selectedCandidate) {
        alert(`You have selected ${selectedCandidate.value}.`);
        window.location.href = 'vote-success.html';
    } else {
        alert('Please select a candidate.');
    }
});

// Logout functionality
const logoutBtn = document.getElementById('logoutBtn');
logoutBtn.addEventListener('click', function () {
    localStorage.removeItem('username');
    window.location.href = 'index.html';
});
