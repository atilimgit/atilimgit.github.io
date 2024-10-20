const businesses = [
  {
      "name": "Espresso Check",
      "address": "Bahçelievler, Prof. Muammer Aksoy Cd No:37/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 25,
      "details": "Kahvenizin her yudumunda kalite.",
      "logo": "background-image.jpg"
  },
  {
      "name": "KajunToGo",
      "address": "Yaşamkent, 3250. Cd. no 26 D:51, 06810 Çankaya/Ankara, Türkiye",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Lezzetli Kajun menüleriyle kendinizi şımartın.",
      "logo": "kajun-logo.png"
  },
  {
      "name": "Dois Döner",
      "address": "Yaşamkent, 3250. Cd. No: 26/BD, 06810 Çankaya/Ankara, Türkiye",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Klasik dönerin modern yorumu.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Sofa Burger&Fries",
      "address": "Ümitköy, MutluKöy sitesi No:13 Ümitköy- Ankara, Mutlukent, 1948. Sk., 06810 Çankaya/Ankara, Türkiye",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Taze malzemelerle hazırlanmış enfes hamburgerler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Coffee Sumatra",
      "address": "Bahçelievler 7. Cadde: Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi No:26, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Özel Sumatra kahveleriyle keyifli anlar.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Roma Antico Coffee",
      "address": "Yukarıbahçelievler mahallesi, Oğuzhan Asiltürk Caddesi No:16/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "İtalyan kahve kültürünü keşfedin.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Cake Art",
      "address": "Bahçelievler, 54. Cad. 15/B, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Ev yapımı lezzetli tatlılar.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Agartha Pub",
      "address": "Bahçelievler, Prof. Muammer Aksoy Cd 35/B, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Canlı müzik ve keyifli içecekler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Pilav Üstü Aşk",
      "address": "Bahçelievler, Azerbaycan Cd. No:59, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Lezzetli pilav üstü yemekler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Fok Pub",
      "address": "Bahçelievler, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Eğlenceli atmosferde içkilerin tadını çıkarın.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Banana Pudding",
      "address": "Yukarı Bahçelievler, 70. Sk. No:21 D:C, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 15,
      "details": "Unutulmaz muz tatlıları.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Miniera Coffee",
      "address": "Yukarı Bahçelievler, 65. Sk. No:5/a, 06550 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 30,
      "details": "Kahve tutkunları için özel harmanlar.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Tabu Cafe",
      "address": "Yukarı Bahçelievler Mahallesi Aşkaabat Caddesi &, Yukarı Bahçelievler, 70. Sk. 20/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Samimi atmosferde kahve keyfi.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Route NY",
      "address": "Bahçelievler, Azerbaycan Cd. No:41, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "New York tarzı lezzetler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Gloria Jeans",
      "address": "Bahçelievler, 36. Sk. No:34, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 15,
      "details": "Dünya çapında kahve ve tatlılar.",
      "logo": "background-image.jpg"
  },
  {
      "name": "El Camino",
      "address": "Prof. Dr. Muuammer Aksoy cad. No: 31/B Bahçelievler, Çankaya, Bahçelievler, 06490 Çankara/Ankara, Türkiye",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Çeşitli yemek ve içecekler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Zaytung Zone",
      "adress": "Zaytung zone, kızılay",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Lezzetli yemekler ve alkol!",
      "logo": "background-image.jpg"
  },
  {
    "name": "Altı Üstü Bar",
    "adress": "Altı üstü bar, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 10,
    "details": "Alkol, müzik ve leziz yemekler!",
    "logo": "background-image.jpg"
  },
  {
    "name": "Tiyatro Bar",
    "adress": "Tiyatro bar, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 10,
    "details": "Alkol, müzik ve leziz yemekler!",
    "logo": "background-image.jpg"
  },
  {
      "name": "Komşu Meyhane",
      "address": "Güvenevler, Farabi Sk. 32/B, 06500 Çankaya/Ankara, Türkiye",
      "district": "Kızılay-Tunalı",
      "discount": 0,
      "details": "Ev yapımı lezzetler sunan bir restoran.",
      "logo": "background-image.jpg"
  },
  {
      "name": "The Coffee Company",
      "address": "Çayyolu, Türkiye",
      "district": "Çayyolu-Ümitköy",
      "discount": 15,
      "details": "Kahve severler için geniş seçenekler.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Atılım Store",
      "address": "Kızılcaşar mahallesi, 1184. cad no:13, 06830 İncek, Gölbaşı/Ankara.",
      "district": "İncek",
      "discount": 15,
      "details": "Atılım Store, öğrencilere özel indirimlerle kaliteli ürünler sunuyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Kajun İncek Vista",
      "address": "Kızılcaşar, Kajun İncek Vista, Incek Blv No:406/39, 06830 Gölbaşı/Ankara",
      "district": "İncek",
      "discount": 10,
      "details": "Lezzetli Cajun yemekleri.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Halanın Yeri",
      "address": "Kızılcaşar, Zafer Cd. No:4 D:37 - E, 06830 Gölbaşı/Ankara, Türkiye",
      "district": "İncek",
      "discount": 5,
      "details": "Sıcak ve samimi bir ortamda yemek.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Tarhana Kazanı",
      "address": "Meşrutiyet, Kızılay, Selanik Cd 44/A, 06660 Çankaya/Ankara, Türkiye",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Lezzetli tarhana çorbası.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Mersinli Ali Usta",
      "address": "Kocatepe, Selanik Cd 29/a, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Mersinli Ali Usta'nın tantunisi, lezzetiyle ünlüdür. Kesinlikle denemelisiniz!",
      "logo": "background-image.jpg"
  },
  {
      "name": "Talya Veteriner",
      "address": "Beytepe, Plevne Cd No:10/AA, 06800 Çankaya/Ankara, Türkiye",
      "district": "İncek",
      "discount": 10,
      "details": "Hayvan sağlığı için güvenilir veteriner hizmeti.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Dino Dürüm",
      "address": "Meşrutiyet, Konur Sok. No:51, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Dino Dürüm'de taze ve lezzetli dürümler sizleri bekliyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Esnaf Lokantaları",
      "address": "Meşrutiyet, Karanfil Sk. No:37, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay-Tunalı",
      "discount": 0,
      "details": "Esnaf Lokantası, samimi bir ortamda ev yemekleri sunar. Herkes için uygun fiyatlarla.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Bahçelievler şubesi",
      "address": "Yukarı Bahçelievler mahallesi 59 Sokak, Yukarı Bahçelievler, 54. Cad. 1/B, 06010 Çankaya/Ankara, Türkiye.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Bahçeli'deki Tunus Islak Hamburger, herkesin favorisi! Lezzetli ıslak hamburgerleri denemelisiniz.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Meşrutiyet şubesi",
      "address": "Kocatepe, Meşrutiyet Cd. 21/B, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Lezzetiyle ünlü olan Tunus Islak Hamburger, her damak zevkine hitap ediyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Anıttepe şubesi",
      "address": "Maltepe, Gençlik Cd. No:99 D:C, 06570 Çankaya/Ankara, Türkiye.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Anıttepe'deki Tunus Islak Hamburger, hızlı servisi ve lezzetiyle öne çıkıyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Tunus şubesi",
      "address": "Yukarı Bahçelievler mahallesi 59 Sokak, Yukarı Bahçelievler, 54. Cad. 1/B, 06010 Çankaya/Ankara, Türkiye.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Tunus Islak Hamburger, sıcak ve taze hamburgerleriyle herkesin ilgisini çekiyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Kolej şubesi",
      "address": "Remzi Oğuz Arık, Tunus Cd NO:49/A, 06540 Çankaya/Ankara, Türkiye.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Kolej bölgesinde Tunus Islak Hamburger ile doyurucu bir öğün geçirin.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Altınoran şubesi",
      "address": "İlkbahar, Güneypark No:32 No:1, 06550 Çankaya/Ankara, Türkiye.",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Nunchi Coffee, rahat bir ortamda keyifli kahve deneyimi sunuyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Nokta şubesi",
      "address": "Ümit, 2479. Cd. 2/33, 06810 Çankaya/Ankara, Türkiye.",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Nokta'daki Nunchi Coffee, farklı kahve çeşitleriyle damak tadınıza hitap ediyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Cepa şubesi",
      "address": "Koru, 2558. Cad. No:8, 06810 Yenimahalle/Ankara, Türkiye.",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Cepa'da Nunchi Coffee, kahve severler için harika bir buluşma noktası.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Komagene",
      "address": "Taşpınar, İsmail Gaspıralı Cd No:24, 06830 Gölbaşı/Ankara, Türkiye.",
      "district": "İncek",
      "discount": 15,
      "details": "Komagene'de sağlıklı ve lezzetli yiyecekler sizi bekliyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Mojo and More",
      "address": "Barbaros, Güniz Sk. 21A, 06680 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Mojo'da keyifli bir atmosferde lezzetli yemekler yiyebilirsiniz.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Chocolabs",
      "address": "Yukarı Bahçelievler, Aşkabat Cd. No:6-B, 06490 Çankaya/Ankara, Türkiye.",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Chocolabs, tatlı severler için vazgeçilmez bir durak!",
      "logo": "background-image.jpg"
  },
  {
      "name": "Clinic Çayyolu Dişçi",
      "address": "Prof. Dr. Ahmet Taner Kışlalı Mah 2715. Sokak Konsept Çayyolu İş Merkezi, Prof. Dr. Ahmet Taner Kışlalı, D:2/3B, 06810 Çankaya/Ankara, Türkiye.",
      "district": "Çayyolu-Ümitköy",
      "discount": 20,
      "details": "Çayyolu'ndaki dişçi kliniği, profesyonel hizmet sunuyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "MackBear",
      "address": "Kızılcaşar, Yavuz Sultan Selim Blv A-1 BLOK NO: 7/A İç Kapı No: 183, 06830 Gölbaşı/Ankara.",
      "district": "İncek",
      "discount": 10,
      "details": "MackBear, sağlıklı atıştırmalıklar ve lezzetli içecekler sunuyor.",
      "logo": "background-image.jpg"
  }
];

const itemsPerPage = 10;
let currentPage = 1;

const modal = document.getElementById('business-modal');
const modalBusinessName = document.getElementById('modal-business-name');
const modalBusinessAddress = document.getElementById('modal-business-address');
const modalBusinessDiscount = document.getElementById('modal-business-discount');
const modalBusinessDetails = document.getElementById('modal-business-details');
const closeButton = document.querySelector('.close-button');


function showBusinessDetails(business) {
    const locationEmoji = "📌"; 
    const discountEmoji = "💰"; 
    
    modalBusinessName.innerText = business.name;
    modalBusinessAddress.innerHTML = `${locationEmoji} <strong>Adres:</strong> <u>${business.address}</u>`;
    modalBusinessDiscount.innerHTML = `${discountEmoji} <strong>İndirim oranı:</strong> %${business.discount}\n`;
    modalBusinessDetails.innerText = business.details;

    modal.style.display = "block";
}


closeButton.addEventListener('click', () => {
    modal.style.display = "none";
});

window.addEventListener('click', (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

function renderBusinessList(page) {
    const start = (page - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const filteredBusinesses = filterBusinesses(businesses).slice(start, end);
    
    const businessList = document.getElementById('business-list');
    businessList.innerHTML = '';

    filteredBusinesses.forEach(business => {
        const card = document.createElement('div');
        card.classList.add('business-card');


        let logoContent;
        if (business.logo && business.logo.trim() !== "") {
            logoContent = `<div class="business-logo" style="background-image: url('${business.logo}');"></div>`;
        } else {
            const initials = business.name.split(' ').map(word => word.charAt(0).toUpperCase()).join('');
            logoContent = `<div class="pseudo-logo">${initials}</div>`;
        }

        card.innerHTML = `
            ${logoContent}
            <div class="business-name">${business.name}</div>
        `;

     
        card.addEventListener('click', () => showBusinessDetails(business));
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

function displayBusinesses(filteredBusinesses) {
  const businessList = document.getElementById('business-list');
  businessList.innerHTML = '';

  const districts = [...new Set(filteredBusinesses.map(b => b.district))];

  districts.forEach(district => {
      const districtHeader = document.createElement('h3');
      districtHeader.textContent = district.toUpperCase();
      districtHeader.style.marginTop = '20px';
      districtHeader.style.color = '#FFD700';
      businessList.appendChild(districtHeader);

      const filtered = filteredBusinesses.filter(b => b.district === district);
      filtered.forEach(business => {
        const businessCard = document.createElement('div');
        businessCard.className = 'business-card';
        businessCard.innerHTML = `
            <div class="business-logo" style="background-image: url('${business.logo}');">
                ${business.logo ? '' : `<div class="pseudo-logo">${business.name.charAt(0)}</div>`}
            </div>
            <div class="business-details">
                <div class="business-name">
                    ${business.name}
                    <span class="discount modern-discount"> %${business.discount}</span>
                </div>
                <div class="business-detail">
                    <button class="map-button" onclick="openMap('${encodeURIComponent(business.address)}')">Haritayı Aç</button>
                </div>
            </div>
        `;
        businessCard.addEventListener('click', () => showModal(business));
        businessList.appendChild(businessCard);
    });    
  });
}
function openMap(address) {
  const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
  const mapsUrl = isIOS 
      ? `https://maps.apple.com/?q=${address}` 
      : `https://www.google.com/maps/search/?api=1&query=${address}`;
  
  window.open(mapsUrl, '_blank');
}



function showModal(business) {
    document.getElementById('modal-business-name').textContent = business.name;
    document.getElementById('modal-business-address').textContent = `Adres: ${business.address}`;
    document.getElementById('modal-business-discount').textContent = `İndirim: ${business.discount}`;
    document.getElementById('modal-business-details').textContent = business.details;

    const modal = document.getElementById('business-modal');
    modal.style.display = 'block';
}

document.querySelector('.close-button').addEventListener('click', () => {
    document.getElementById('business-modal').style.display = 'none';
});

window.addEventListener('click', (event) => {
    const modal = document.getElementById('business-modal');
    if (event.target === modal) {
        modal.style.display = 'none';
    }
});

function filterBusinesses() {
    const searchValue = document.getElementById('search').value.toLowerCase();
    const selectedDistrict = document.getElementById('district').value;
    const selectedDiscount = document.getElementById('discount').value;

    let filteredBusinesses = businesses.filter(business => {
        const matchesSearch = business.name.toLowerCase().includes(searchValue);
        const matchesDistrict = selectedDistrict ? business.district === selectedDistrict : true;
        const matchesDiscount = selectedDiscount ? parseInt(business.discount) >= parseInt(selectedDiscount) : true;
        return matchesSearch && matchesDistrict && matchesDiscount;
    });

    displayBusinesses(filteredBusinesses);
}

document.getElementById('search').addEventListener('input', filterBusinesses);
document.getElementById('district').addEventListener('change', filterBusinesses);
document.getElementById('discount').addEventListener('change', filterBusinesses);

displayBusinesses(businesses);

const totalBusinesses = businesses.length;

function animateCounter(start, end, duration) {
    let current = start;
    const increment = end / (duration / 100);
    const counter = document.getElementById('business-count');

    const timer = setInterval(() => {
        current += increment;
        if (current >= end) {
            current = end;
            clearInterval(timer);
        }
        counter.innerText = Math.floor(current);
    }, 100);
}

// Sayacı başlat
animateCounter(0, totalBusinesses, 2000); // 2 saniyede 0'dan toplam işletme sayısına

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
