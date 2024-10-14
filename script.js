const businesses = [
    { name: "İşletme 1", address: "Adres 1", discount: 10, details: "Detay 1 hakkında bilgi.", logo: "logo1.png" },
    { name: "İşletme 2", address: "Adres 2", discount: 15, details: "Detay 2 hakkında bilgi.", logo: "logo2.png" },
    { name: "İşletme 3", address: "Adres 3", discount: 5, details: "Detay 3 hakkında bilgi.", logo: "logo3.png" },
    { name: "İşletme 4", address: "Adres 4", discount: 20, details: "Detay 4 hakkında bilgi.", logo: "logo4.png" },
    { name: "İşletme 5", address: "Adres 5", discount: 25, details: "Detay 5 hakkında bilgi.", logo: "logo5.png" },
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
            <img src="${business.logo}" alt="${business.name} Logo" class="business-logo">
            <div class="business-name">${business.name}</div>
            <div class="business-detail" id="detail-${business.name.replace(/\s/g, '')}">
                <p><strong>Adres:</strong> ${business.address}</p>
                <p><strong>İndirim oranı:</strong> %${business.discount}</p>
                <p>${business.details}</p>
            </div>
        `;
        card.addEventListener('click', () => toggleBusinessDetails(business.name.replace(/\s/g, '')));
        businessList.appendChild(card);
    });
}

function toggleBusinessDetails(businessId) {
    const detailDiv = document.getElementById(`detail-${businessId}`);
    detailDiv.style.display = detailDiv.style.display === "none" || detailDiv.style.display === "" ? "block" : "none";
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
        pageItem.innerHTML = `<a href="#" onclick="changePage(${i})">${i}</a>`;
        pagination.appendChild(pageItem);
    }

    renderBusinessList(currentPage);
});

renderBusinessList(currentPage);
renderPagination();
