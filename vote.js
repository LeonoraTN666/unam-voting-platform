// Login functionality
document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (username && password) {
            localStorage.setItem('username', username);
            window.location.href = 'vote.html';
        } else {
            alert('Please enter both username and password.');
        }
    });

    const usernameDisplay = document.getElementById('usernameDisplay');
    if (usernameDisplay) {
        const username = localStorage.getItem('username');
        if (username) {
            usernameDisplay.textContent = `Hi, ${username}! Welcome to the 2024 UNAM SRC election.`;
        } else {
            window.location.href = 'index.html'; 
        }
    }
});

// Voting functionality
const categories = document.querySelectorAll('.category');
categories.forEach(category => {
    category.addEventListener('click', function () {
        localStorage.setItem('currentCategory', category.textContent.trim());
        window.location.href = 'candidates.html';
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const candidatesContainer = document.getElementById('candidates');
    const categoryTitle = document.getElementById('categoryTitle');

    if (candidatesContainer && categoryTitle) {
        const selectedCategory = localStorage.getItem('currentCategory');
        categoryTitle.textContent = `Category | ${selectedCategory}`;

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
        // Add more categories and candidates if needed
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

// Help Button functionality
const helpButton = document.getElementById('help-btn');
helpButton.addEventListener('click', function () {
    const helpMessage = document.createElement('div');
    helpMessage.className = 'help-popup';
    helpMessage.innerHTML = `
        <p>Contact the head of voting on 0817447484 or send an email to lnashipeta666@gmail.com. THANK YOU.</p>
        <button id="closeHelpBtn">Close</button>
    `;
    document.body.appendChild(helpMessage);

    const closeHelpBtn = document.getElementById('closeHelpBtn');
    closeHelpBtn.addEventListener('click', function () {
        helpMessage.remove();
    });
});

// Zoom feature
const zoomInButton = document.getElementById('zoom-in-btn');
const zoomOutButton = document.getElementById('zoom-out-btn');
let zoomLevel = 1;

zoomInButton.addEventListener('click', function () {
    zoomLevel += 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
});

zoomOutButton.addEventListener('click', function () {
    zoomLevel -= 0.1;
    document.body.style.transform = `scale(${zoomLevel})`;
});
