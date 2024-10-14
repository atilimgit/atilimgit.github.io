const businesses = [
    { name: "İşletme 1", address: "Adres 1", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 2", address: "Adres 2", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 3", address: "Adres 3", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 4", address: "Adres 4", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 5", address: "Adres 5", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 6", address: "Adres 6", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 7", address: "Adres 7", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 8", address: "Adres 8", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 9", address: "Adres 9", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 10", address: "Adres 10", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 11", address: "Adres 11", logo: "https://via.placeholder.com/50" },
    { name: "İşletme 12", address: "Adres 12", logo: "https://via.placeholder.com/50" },
];

const itemsPerPage = 5;
let currentPage = 1;

function renderBusinessList(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredBusinesses = businesses.slice(start, end);
    
    const businessList = document.getElementById('business-list');
    businessList.innerHTML = '';

    filteredBusinesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${business.logo}" alt="${business.name}">
            <div>
                <h2>${business.name}</h2>
                <p>${business.address}</p>
            </div>
        `;
        businessList.appendChild(card);
    });
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const pageCount = Math.ceil(businesses.length / itemsPerPage);
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('span');
        pageItem.classList.add('page-item');
        pageItem.innerHTML = `<a href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(pageItem);
    }
}

function changePage(page) {
    currentPage = page;
    renderBusinessList(currentPage);
}

document.getElementById('search').addEventListener('input', (event) => {
    const query = event.target.value.toLowerCase();
    const filteredBusinesses = businesses.filter(business =>
        business.name.toLowerCase().includes(query) ||
        business.address.toLowerCase().includes(query)
    );

    const pageCount = Math.ceil(filteredBusinesses.length / itemsPerPage);
    const pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= pageCount; i++) {
        const pageItem = document.createElement('span');
        pageItem.classList.add('page-item');
        pageItem.innerHTML = `<a href="#" onclick="renderFilteredPage(${i}, '${query}')">${i}</a>`;
        pagination.appendChild(pageItem);
    }

    renderFilteredPage(currentPage, query);
});

function renderFilteredPage(page, query) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredBusinesses = businesses.filter(business =>
        business.name.toLowerCase().includes(query) ||
        business.address.toLowerCase().includes(query)
    ).slice(start, end);

    const businessList = document.getElementById('business-list');
    businessList.innerHTML = '';

    filteredBusinesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');
        card.innerHTML = `
            <img src="${business.logo}" alt="${business.name}">
            <div>
                <h2>${business.name}</h2>
                <p>${business.address}</p>
            </div>
        `;
        businessList.appendChild(card);
    });
}

renderBusinessList(currentPage);
renderPagination();
