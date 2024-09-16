const category = new URLSearchParams(window.location.search).get('category');
document.getElementById('category-title').textContent = `Vote for ${category.replace('-', ' ')}`;

const candidates = {
    'vice-president': [
        { name: 'Anna de Kler', img: 'anna.jpg' },
        { name: 'Hether Leo', img: 'hether.jpg' },
        { name: 'Kia Noel', img: 'kia.jpg' },
        { name: 'Jasmine Makeba', img: 'jasmine.jpg' }
    ],
    'secretary': [
        { name: 'John Shiweda', img: 'john.jpg' },
        { name: 'Leon Kent', img: 'leon.jpg' },
        { name: 'Love Dehate', img: 'love.jpg' }
    ],
    'finance-manager': [
        { name: 'Brian N', img: 'brian.jpg' },
        { name: 'Catherine T', img: 'catherine.jpg' },
        { name: 'David Z', img: 'david.jpg' }
    ],
    // Add similar objects for other categories
};

function generateCandidates() {
    const candidatesDiv = document.querySelector('.candidates');
    candidates[category].forEach(candidate => {
        const div = document.createElement('div');
        div.classList.add('candidate');
        div.innerHTML = `<img src="${candidate.img}" alt="${candidate.name}">
                         <p>${candidate.name}</p>`;
        candidatesDiv.appendChild(div);
    });
}

generateCandidates();

document.getElementById('submit-vote').addEventListener('click', function () {
    alert('Vote submitted successfully!');
    window.location.href = 'categories.html';
});

document.getElementById('go-back').addEventListener('click', function () {
    window.location.href = 'categories.html';
});
