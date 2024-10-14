const businesses = [
    { name: "İşletme 1", address: "Adres 1", logo: "🏢", details: "Detay 1 hakkında bilgi." },
    { name: "İşletme 2", address: "Adres 2", logo: "🏢", details: "Detay 2 hakkında bilgi." },
    { name: "İşletme 3", address: "Adres 3", logo: "🏢", details: "Detay 3 hakkında bilgi." },
    { name: "İşletme 4", address: "Adres 4", logo: "🏢", details: "Detay 4 hakkında bilgi." },
    { name: "İşletme 5", address: "Adres 5", logo: "🏢", details: "Detay 5 hakkında bilgi." },
    { name: "İşletme 6", address: "Adres 6", logo: "🏢", details: "Detay 6 hakkında bilgi." },
    { name: "İşletme 7", address: "Adres 7", logo: "🏢", details: "Detay 7 hakkında bilgi." },
    { name: "İşletme 8", address: "Adres 8", logo: "🏢", details: "Detay 8 hakkında bilgi." },
    { name: "İşletme 9", address: "Adres 9", logo: "🏢", details: "Detay 9 hakkında bilgi." },
    { name: "İşletme 10", address: "Adres 10", logo: "🏢", details: "Detay 10 hakkında bilgi." },
    { name: "İşletme 11", address: "Adres 11", logo: "🏢", details: "Detay 11 hakkında bilgi." },
    { name: "İşletme 12", address: "Adres 12", logo: "🏢", details: "Detay 12 hakkında bilgi." },
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
            <div class="business-name">
                <span class="business-icon">${business.logo}</span>
                <span>${business.name}</span>
            </div>
            <div>
                <p>${business.address}</p>
            </div>
        `;
        card.addEventListener('click', () => showBusinessDetails(business));
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

function showBusinessDetails(business) {
    document.getElementById('detail-name').innerText = business.name;
    document.getElementById('detail-address').innerText = business.address;
    document.getElementById('detail-info').innerText = business.details;
    document.getElementById('business-detail').classList.remove('hidden');
}

document.getElementById('close-detail').addEventListener('click', () => {
    document.getElementById('business-detail').classList.add('hidden');
});

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
            <div class="business-name">
                <span class="business-icon">${business.logo}</span>
                <span>${business.name}</span>
            </div>
            <div>
                <p>${business.address}</p>
            </div>
        `;
        card.addEventListener('click', () => showBusinessDetails(business));
        businessList.appendChild(card);
    });
}

renderBusinessList(currentPage);
renderPagination();
