const businesses = [
  {
      "name": "KajunToGo",
      "address": "Yaşamkent, 3250. Cd. no 26 D:51, 06810 Çankaya/Ankara, Türkiye",
      "district": "Yaşamkent",
      "discount": 10,
      "details": "Lezzetli Kajun menüleriyle kendinizi şımartın.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Dois Döner",
      "address": "Yaşamkent, 3250. Cd. No: 26/BD, 06810 Çankaya/Ankara, Türkiye",
      "district": "Yaşamkent",
      "discount": 10,
      "details": "Klasik dönerin modern yorumu.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Sofa Burger&Fries",
      "address": "Ümitköy, MutluKöy sitesi No:13 Ümitköy- Ankara, Mutlukent, 1948. Sk., 06810 Çankaya/Ankara, Türkiye",
      "district": "Ümitköy",
      "discount": 10,
      "details": "Taze malzemelerle hazırlanmış enfes hamburgerler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Talya Veteriner",
      "address": "Beytepe, Plevne Cd No:10/AA, 06800 Çankaya/Ankara, Türkiye",
      "district": "Beytepe",
      "discount": 10,
      "details": "Hayvan sağlığı için güvenilir veteriner hizmeti.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Coffee Sumatra",
      "address": "Bahçeli 7. Cadde: Yukarı Bahçelievler, Oğuzhan Asiltürk Caddesi No:26, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Özel Sumatra kahveleriyle keyifli anlar.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Roma Antico Coffee",
      "address": "Yukarıbahçelievler mahallesi, Oğuzhan Asiltürk Caddesi No:16/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "İtalyan kahve kültürünü keşfedin.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Cake Art",
      "address": "Bahçelievler, 54. Cad. 15/B, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Ev yapımı lezzetli tatlılar.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Agartha Pub",
      "address": "Bahçelievler, Prof. Muammer Aksoy Cd 35/B, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Canlı müzik ve keyifli içecekler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Pilav Üstü Aşk",
      "address": "Bahçelievler, Azerbaycan Cd. No:59, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Lezzetli pilav üstü yemekler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Fok Pub",
      "address": "Bahçelievler, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Eğlenceli atmosferde içkilerin tadını çıkarın.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Espresso Check",
      "address": "Bahçelievler, Prof. Muammer Aksoy Cd No:37/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 25,
      "details": "Kahvenizin her yudumunda kalite.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Banana Pudding",
      "address": "Yukarı Bahçelievler, 70. Sk. No:21 D:C, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 15,
      "details": "Unutulmaz muz tatlıları.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Miniera Coffee",
      "address": "Yukarı Bahçelievler, 65. Sk. No:5/a, 06550 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 30,
      "details": "Kahve tutkunları için özel harmanlar.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tabu Cafe",
      "address": "Yukarı Bahçelievler Mahallesi Aşkaabat Caddesi &, Yukarı Bahçelievler, 70. Sk. 20/A, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Samimi atmosferde kahve keyfi.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Route NY",
      "address": "Bahçelievler, Azerbaycan Cd. No:41, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "New York tarzı lezzetler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Gloria Jeans",
      "address": "Bahçelievler, 36. Sk. No:34, 06490 Çankaya/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 15,
      "details": "Dünya çapında kahve ve tatlılar.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "El Camino Food&Drinks",
      "address": "Prof. Dr. Muuammer Aksoy cad. No: 31/B Bahçelievler, Çankaya, Bahçelievler, 06490 Çankara/Ankara, Türkiye",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Çeşitli yemek ve içecekler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Komşu Restoran",
      "address": "Güvenevler, Farabi Sk. 32/B, 06500 Çankaya/Ankara, Türkiye",
      "district": "Tunalı",
      "discount": 100,
      "details": "Ev yapımı lezzetler sunan bir restoran.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "The Coffee Company",
      "address": "Çayyolu, Türkiye",
      "district": "Çayyolu",
      "discount": 15,
      "details": "Kahve severler için geniş seçenekler.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Kajun İncek Vista",
      "address": "Kızılcaşar, Kajun İncek Vista, Incek Blv No:406/39, 06830 Gölbaşı/Ankara",
      "district": "İncek",
      "discount": 10,
      "details": "Lezzetli Cajun yemekleri.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Halanın Yeri",
      "address": "Kızılcaşar, Zafer Cd. No:4 D:37 - E, 06830 Gölbaşı/Ankara, Türkiye",
      "district": "İncek",
      "discount": 5,
      "details": "Sıcak ve samimi bir ortamda yemek.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tarhana Kazanı",
      "address": "Meşrutiyet, Kızılay, Selanik Cd 44/A, 06660 Çankaya/Ankara, Türkiye",
      "district": "Kızılay",
      "discount": 10,
      "details": "Lezzetli tarhana çorbası.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Mersinli Ali Usta",
      "address": "Kocatepe, Selanik Cd 29/a, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay",
      "discount": 10,
      "details": "Mersinli Ali Usta'nın tantunisi, lezzetiyle ünlüdür. Kesinlikle denemelisiniz!",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Dino Dürüm",
      "address": "Meşrutiyet, Konur Sok. No:51, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay",
      "discount": 10,
      "details": "Dino Dürüm'de taze ve lezzetli dürümler sizleri bekliyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Esnaf Lokantaları",
      "address": "Meşrutiyet, Karanfil Sk. No:37, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay",
      "discount": 0,
      "details": "Esnaf Lokantası, samimi bir ortamda ev yemekleri sunar. Herkes için uygun fiyatlarla.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Atılım Store",
      "address": "Kızılcaşar mahallesi, 1184. cad no:13, 06830 İncek, Gölbaşı/Ankara.",
      "district": "Kampüs",
      "discount": 15,
      "details": "Atılım Store, öğrencilere özel indirimlerle kaliteli ürünler sunuyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tunus Islak Hamburger",
      "address": "Yukarı Bahçelievler mahallesi 59 Sokak, Yukarı Bahçelievler, 54. Cad. 1/B, 06010 Çankaya/Ankara, Türkiye.",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Bahçeli'deki Tunus Islak Hamburger, herkesin favorisi! Lezzetli ıslak hamburgerleri denemelisiniz.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tunus Islak Hamburger",
      "address": "Kocatepe, Meşrutiyet Cd. 21/B, 06420 Çankaya/Ankara, Türkiye.",
      "district": "Kızılay",
      "discount": 10,
      "details": "Lezzetiyle ünlü olan Tunus Islak Hamburger, her damak zevkine hitap ediyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tunus Islak Hamburger",
      "address": "Maltepe, Gençlik Cd. No:99 D:C, 06570 Çankaya/Ankara, Türkiye.",
      "district": "Anıttepe",
      "discount": 10,
      "details": "Anıttepe'deki Tunus Islak Hamburger, hızlı servisi ve lezzetiyle öne çıkıyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tunus Islak Hamburger",
      "address": "Yukarı Bahçelievler mahallesi 59 Sokak, Yukarı Bahçelievler, 54. Cad. 1/B, 06010 Çankaya/Ankara, Türkiye.",
      "district": "Tunalı",
      "discount": 10,
      "details": "Tunus Islak Hamburger, sıcak ve taze hamburgerleriyle herkesin ilgisini çekiyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Tunus Islak Hamburger",
      "address": "Remzi Oğuz Arık, Tunus Cd NO:49/A, 06540 Çankaya/Ankara, Türkiye.",
      "district": "Kolej",
      "discount": 10,
      "details": "Kolej bölgesinde Tunus Islak Hamburger ile doyurucu bir öğün geçirin.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Nunchi Coffee",
      "address": "İlkbahar, Güneypark No:32 No:1, 06550 Çankaya/Ankara, Türkiye.",
      "district": "Altınoran",
      "discount": 10,
      "details": "Nunchi Coffee, rahat bir ortamda keyifli kahve deneyimi sunuyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Nunchi Coffee",
      "address": "Ümit, 2479. Cd. 2/33, 06810 Çankaya/Ankara, Türkiye.",
      "district": "Nokta",
      "discount": 10,
      "details": "Nokta'daki Nunchi Coffee, farklı kahve çeşitleriyle damak tadınıza hitap ediyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Nunchi Coffee",
      "address": "Koru, 2558. Cad. No:8, 06810 Yenimahalle/Ankara, Türkiye.",
      "district": "Cepa",
      "discount": 10,
      "details": "Cepa'da Nunchi Coffee, kahve severler için harika bir buluşma noktası.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Komagene",
      "address": "Taşpınar, İsmail Gaspıralı Cd No:24, 06830 Gölbaşı/Ankara, Türkiye.",
      "district": "İncek",
      "discount": 15,
      "details": "Komagene'de sağlıklı ve lezzetli yiyecekler sizi bekliyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Mojo",
      "address": "Barbaros, Güniz Sk. 21A, 06680 Çankaya/Ankara, Türkiye.",
      "district": "Tunalı",
      "discount": 10,
      "details": "Mojo'da keyifli bir atmosferde lezzetli yemekler yiyebilirsiniz.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Chocolabs",
      "address": "Yukarı Bahçelievler, Aşkabat Cd. No:6-B, 06490 Çankaya/Ankara, Türkiye.",
      "district": "Bahçeli",
      "discount": 10,
      "details": "Chocolabs, tatlı severler için vazgeçilmez bir durak!",
        //"logo": "background-image.jpg"
  },
  {
      "name": "Clinic çayyolu dişçi",
      "address": "Prof. Dr. Ahmet Taner Kışlalı Mah 2715. Sokak Konsept Çayyolu İş Merkezi, Prof. Dr. Ahmet Taner Kışlalı, D:2/3B, 06810 Çankaya/Ankara, Türkiye.",
      "district": "Çayyolu",
      "discount": 20,
      "details": "Çayyolu'ndaki dişçi kliniği, profesyonel hizmet sunuyor.",
        //"logo": "background-image.jpg"
  },
  {
      "name": "MackBear",
      "address": "Kızılcaşar, Yavuz Sultan Selim Blv A-1 BLOK NO: 7/A İç Kapı No: 183, 06830 Gölbaşı/Ankara.",
      "district": "İncek",
      "discount": 10,
      "details": "MackBear, sağlıklı atıştırmalıklar ve lezzetli içecekler sunuyor.",
        //"logo": "background-image.jpg"
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

        // Determine logo source or create pseudo-logo
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
            <div class="business-detail" id="detail-${business.name.replace(/\s/g, '')}" style="display: none;">
                <p><strong>Adres:</strong> ${business.address}</p>
                <p><strong>İndirim oranı:</strong> %${business.discount}</p>
                <p>${business.details}</p>
            </div>
        `;
        // Event listener to toggle detail visibility
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
