// categories.js

// Retrieve the username from localStorage or sessionStorage
const username = localStorage.getItem('username') || 'Guest';

// Display the greeting with the username
const greetingElement = document.getElementById('greeting');
greetingElement.textContent = `Hello, ${username}! Welcome to the voting platform.`;

// Handle logout functionality
document.getElementById('logoutBtn').addEventListener('click', function() {
    // Clear the local storage (or session storage)
    localStorage.removeItem('username');
    // Redirect to the login page
    window.location.href = 'index.html';
});

// Double-tap to zoom functionality
let zoomedIn = false;
const categoriesContainer = document.getElementById('categoriesContainer');
categoriesContainer.addEventListener('dblclick', function() {
    if (zoomedIn) {
        document.body.style.transform = "scale(1)";
        zoomedIn = false;
    } else {
        document.body.style.transform = "scale(1.5)";
        zoomedIn = true;
    }
});

// Voice assistance functionality (Tap and hold)
let isSpeaking = false;
categoriesContainer.addEventListener('touchstart', function(event) {
    if (!isSpeaking) {
        isSpeaking = true;
        const speech = new SpeechSynthesisUtterance();
        speech.text = "Please tap on a category to start voting. Your vote is anonymous. Double tap to zoom, and hold your finger for voice assistance.";
        speechSynthesis.speak(speech);
        speech.onend = () => {
            isSpeaking = false;
        };
    }
});

// Help button functionality
const helpModal = document.getElementById('helpModal');
const helpBtn = document.getElementById('helpBtn');
const backBtn = document.getElementById('backBtn');

helpBtn.addEventListener('click', function() {
    helpModal.style.display = 'block';
});

backBtn.addEventListener('click', function() {
    helpModal.style.display = 'none';
});
