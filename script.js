const businesses = [
    { name: "İşletme 1", address: "Adres 1", district: "Bahçelievler", discount: 10, details: "Detay 1 hakkında bilgi.", logo: "logo1.png" },
    { name: "İşletme 2", address: "Adres 2", district: "Kızılay", discount: 15, details: "Detay 2 hakkında bilgi.", logo: "logo2.png" },
    { name: "İşletme 3", address: "Adres 3", district: "Tunalı", discount: 5, details: "Detay 3 hakkında bilgi.", logo: "logo3.png" },
    { name: "İşletme 4", address: "Adres 4", district: "Çayyolu", discount: 20, details: "Detay 4 hakkında bilgi.", logo: "logo4.png" },
    { name: "İşletme 5", address: "Adres 5", district: "Ümitköy", discount: 25, details: "Detay 5 hakkında bilgi.", logo: "logo5.png" },
];

const itemsPerPage = 5;
let currentPage = 1;

function renderBusinessList(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredBusinesses = filterBusinesses(businesses).slice(start, end);
    
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

function filterBusinesses(businesses) {
    const searchQuery = document.getElementById('search').value.toLowerCase();
    const selectedDistrict = document.getElementById('district').value;
    const selectedDiscount = document.getElementById('discount').value;

    return businesses.filter(business => {
        const matchesSearch = business.name.toLowerCase().includes(searchQuery) || business.address.toLowerCase().includes(searchQuery);
        const matchesDistrict = selectedDistrict === "" || business.district === selectedDistrict;
        const matchesDiscount = selectedDiscount === "" || business.discount >= parseInt(selectedDiscount);

        return matchesSearch && matchesDistrict && matchesDiscount;
    });
}

function renderPagination() {
    const pagination = document.getElementById('pagination');
    const filteredBusinesses = filterBusinesses(businesses);
    const pageCount = Math.ceil(filteredBusinesses.length / itemsPerPage);
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

document.getElementById('search').addEventListener('input', () => {
    currentPage = 1;
    renderBusinessList(currentPage);
    renderPagination();
});

document.getElementById('district').addEventListener('change', () => {
    currentPage = 1;
    renderBusinessList(currentPage);
    renderPagination();
});

document.getElementById('discount').addEventListener('change', () => {
    currentPage = 1;
    renderBusinessList(currentPage);
    renderPagination();
});

renderBusinessList(currentPage);
renderPagination();
