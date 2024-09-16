document.addEventListener('DOMContentLoaded', function () {
    const usernameDisplay = document.getElementById('usernameDisplay');
    const username = localStorage.getItem('username');
    usernameDisplay.textContent = username;

    // Handle Voice Assistance
    let voiceAssist = false;
    const voiceAssistBtn = document.getElementById('voice-assist-btn');
    voiceAssistBtn.addEventListener('click', () => {
        voiceAssist = !voiceAssist;
        voiceAssistBtn.textContent = voiceAssist ? 'Voice Assistance: ON' : 'Voice Assistance: OFF';
        if (voiceAssist) {
            alert('Voice Assistance Activated');
        }
    });

    document.querySelectorAll('button').forEach(button => {
        button.addEventListener('click', function () {
            if (voiceAssist) {
                let speech = new SpeechSynthesisUtterance(button.textContent);
                window.speechSynthesis.speak(speech);
            }
        });
    });

    // Voting logic
    // Add event listeners for category buttons
    const categoryButtons = document.querySelectorAll('.category-btn');
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.getAttribute('data-category');
            localStorage.setItem('selectedCategory', category);
            window.location.href = 'vote-category.html'; // Redirect to category-specific voting page
        });
    });

    // Logout function
    function logout() {
        localStorage.removeItem('username');
        window.location.href = 'index.html';
    }

    // Back to Categories function
    function backToCategories() {
        window.location.href = 'vote.html';
    }

    // Help button action (if it's on the page)
    const helpBtn = document.getElementById('help-btn');
    if (helpBtn) {
        helpBtn.addEventListener('click', () => {
            window.location.href = 'help.html';
        });
    }
});
