// vote.js
const candidatesData = {
    VicePresident: [
        { name: 'Anna de Kler', image: 'anna.jpg' },
        { name: 'Hether Leo', image: 'hether.jpg' },
        { name: 'Kia Noel', image: 'kia.jpg' },
        { name: 'Jasmine Makeba', image: 'jasmine.jpg' }
    ],
    Secretary: [
        { name: 'John Shiweda', image: 'john.jpg' },
        { name: 'Leon Kent', image: 'leon.jpg' },
        { name: 'Love Dehate', image: 'love.jpg' }
    ],
    Finance: [
        { name: 'Victor Smith', image: 'victor.jpg' },
        { name: 'Betty Brown', image: 'betty.jpg' },
        { name: 'Steve Campbell', image: 'steve.jpg' }
    ],
    AcademicAffairs: [
        { name: 'Liza Mwiya', image: 'liza.jpg' },
        { name: 'George Ndumba', image: 'george.jpg' },
        { name: 'Sonia Hart', image: 'sonia.jpg' }
    ]
};

document.addEventListener('DOMContentLoaded', function () {
    const urlParams = new URLSearchParams(window.location.search);
    const category = urlParams.get('category');
    const candidatesList = document.getElementById('candidatesList');
    const categoryTitle = document.getElementById('categoryTitle');

    if (category && candidatesData[category]) {
        categoryTitle.textContent = `Vote for ${category.replace(/([A-Z])/g, ' $1').trim()}`;
        candidatesData[category].forEach(candidate => {
            const candidateDiv = document.createElement('div');
            candidateDiv.innerHTML = `
                <label>
                    <input type="checkbox" name="candidate" value="${candidate.name}">
                    <img src="${candidate.image}" alt="${candidate.name}">
                    ${candidate.name}
                </label>
            `;
            candidatesList.appendChild(candidateDiv);
        });
    }

    document.getElementById('backToCategoriesBtn').addEventListener('click', function () {
        window.location.href = 'categories.html';
    });

    document.getElementById('logoutBtn').addEventListener('click', function () {
        sessionStorage.clear();
        window.location.href = 'login.html';
    });
});
