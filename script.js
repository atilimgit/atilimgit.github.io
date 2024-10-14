const businesses = [
  { 
    name: "KajunToGo", 
    address: "Yaşamkent, 3250. Cd. no 26 D:51, 06810 Çankaya/Ankara, Türkiye", 
    district: "Yaşamkent", 
    discount: 10, 
    details: "Lezzetli Kajun menüleriyle kendinizi şımartın.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Dois Döner", 
    address: "Yaşamkent, 3250. Cd. No: 26/BD, 06810 Çankaya/Ankara, Türkiye", 
    district: "Yaşamkent", 
    discount: 10, 
    details: "Klasik dönerin modern yorumu.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Sofa Burger&Fries", 
    address: "MutluKöy sitesi No:13 Ümitköy, Mutlukent, 1948. Sk., 06810 Çankaya/Ankara, Türkiye", 
    district: "Ümitköy", 
    discount: 10, 
    details: "Burger ve patatesin en iyi hali.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Talya Veteriner", 
    address: "Beytepe, Plevne Cd No:10/AA, 06800 Çankaya/Ankara, Türkiye", 
    district: "Beytepe", 
    discount: 10, 
    details: "Sevimli dostlarınız için profesyonel hizmet.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Coffee Sumatra", 
    address: "Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi No:26, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "Kahve molalarının vazgeçilmezi.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Roma Antico Coffee", 
    address: "Yukarıbahçelievler Mahallesi, Oğuzhan Asiltürk Caddesi No:16/A, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "İtalyan kahve deneyimi Ankara’da.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Cake Art", 
    address: "Bahçelievler, 54. Cad. 15/B, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "Ev yapımı tatlılarda sınır tanımayın.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Agartha Pub", 
    address: "Bahçelievler, Prof. Muammer Aksoy Cd 35/B, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "Unutulmaz bir pub deneyimi.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Pilav Üstü Aşk", 
    address: "Bahçelievler, Azerbaycan Cd. No:59, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "Lezzet dolu pilav aşkı.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Fok Pub", 
    address: "Bahçelievler, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "Mükemmel bir pub atmosferi.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Espresso Check", 
    address: "Bahçelievler, Prof. Muammer Aksoy Cd No:37/A, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 25, 
    details: "Espresso severler için vazgeçilmez.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Banana Pudding", 
    address: "Yukarı Bahçelievler, 70. Sk. No:21 D:C, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 15, 
    details: "Tatlı severler için benzersiz bir deneyim.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Miniera Coffee", 
    address: "Yukarı Bahçelievler, 65. Sk. No:5/a, 06550 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 30, 
    details: "Miniera’nın eşsiz kahveleri ile buluşmaya hazır olun!", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Route NY", 
    address: "Bahçelievler, Azerbaycan Cd. No:41, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 10, 
    details: "New York tarzı yemekler burada.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Gloria Jeans", 
    address: "Bahçelievler, 36. Sk. No:34, 06490 Çankaya/Ankara, Türkiye", 
    district: "Bahçeli", 
    discount: 15, 
    details: "Dünyanın her yerinden kahve seçenekleri.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Komşu Meyhane", 
    address: "Güvenevler, Farabi Sk. 32/B, 06500 Çankaya/Ankara, Türkiye", 
    district: "Tunalı", 
    discount: 0, 
    details: "100 TL indirim fırsatını kaçırmayın.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "The Coffee Company", 
    address: "Çayyolu, 06810 Çankaya/Ankara, Türkiye", 
    district: "Çayyolu", 
    discount: 15, 
    details: "Kahve severlerin yeni buluşma noktası.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Halanın Yeri", 
    address: "Kızılcaşar, Zafer Cd. No:4 D:37 - E, 06830 Gölbaşı/Ankara, Türkiye", 
    district: "İncek", 
    discount: 5, 
    details: "Ev lezzetlerinde son nokta.", 
    logo: "background-image.jpg" 
  },
  { 
    name: "Komagene", 
    address: "Taşpınar, İsmail Gaspıralı Cd No:24, 06830 Gölbaşı/Ankara, Türkiye", 
    district: "İncek", 
    discount: 15, 
    details: "Efsane çiğ köfte burada.", 
    logo: "background-image.jpg" 
  }
];

const itemsPerPage = 10;
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

function applyFilters() {
    currentPage = 1;
    renderBusinessList(currentPage);
    renderPagination();
}

document.getElementById('search').addEventListener('input', applyFilters);
document.getElementById('district').addEventListener('change', applyFilters);
document.getElementById('discount').addEventListener('change', applyFilters);

renderBusinessList(currentPage);
renderPagination();
