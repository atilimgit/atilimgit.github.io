const businesses = [
  {
      "name": "Espresso Check",
      "address": "Espresso Check, bahçelievler",
      "district": "Bahçelievler",
      "discount": 25,
      "details": "Kahvenizin her yudumunda kalite.",
      "logo": "espresso.png"
  },
  {
    "name": "Zaytung Zone",
    "address": "Zaytung zone, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 10,
    "details": "Lezzetli yemekler ve alkol!",
    "logo": "zaytung.png"
  },
  {
    "name": "Atılım Store",
    "address": "Atılım store. kampüs",
    "district": "İncek",
    "discount": 15,
    "details": "Atılım Store, öğrencilere özel indirimlerle kaliteli ürünler sunuyor.",
    "logo": "astore.jpg"
  },
  {
      "name": "KajunToGo",
      "address": "Kajun, Yaşamkent",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Lezzetli Kajun menüleriyle kendinizi şımartın.",
      "logo": "kajun-logo.png"
  },
  {
      "name": "Dois Döner",
      "address": "Dois Döner, yaşamkent",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Klasik dönerin modern yorumu.",
      "logo": "dois.png"
  },
  {
      "name": "Sofa Burger&Fries",
      "address": "Sofa burger/fries, ümitköy",
      "district": "Çayyolu-Ümitköy",
      "discount": 10,
      "details": "Taze malzemelerle hazırlanmış enfes hamburgerler.",
      "logo": "sofa.png"
  },
  {
      "name": "Coffee Sumatra",
      "address": "Coffee Sumatra, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Özel Sumatra kahveleriyle keyifli anlar.",
      "logo": "sumatra.jpg"
  },
  {
      "name": "Roma Antico",
      "address": "Roma antico, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "İtalyan kahve kültürünü keşfedin.",
      "logo": "antico.jpg"
  },
  {
      "name": "Cake Art",
      "address": "Cake art, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Ev yapımı lezzetli tatlılar.",
      "logo": "cakeart.png"
  },
  {
      "name": "Agartha Pub",
      "address": "Agartha Pub, bahçelievler, muammer aksoy caddesi",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Canlı müzik ve keyifli içecekler.",
      "logo": "agartha.jpg"
  },
  {
      "name": "Pilav Üstü Aşk",
      "address": "Pilav üstü aşk, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Lezzetli pilav üstü yemekler.",
      "logo": "pilavustu.jpg"
  },
  {
      "name": "Fok Pub",
      "address": "Fok pub, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Eğlenceli atmosferde içkilerin tadını çıkarın.",
      "logo": "fok.png"
  },
  {
      "name": "Banana Pudding",
      "address": "Banana pudding, bahçelievler",
      "district": "Bahçelievler",
      "discount": 15,
      "details": "Unutulmaz muz tatlıları.",
      "logo": "banana.jpg"
  },
  {
      "name": "Miniera Coffee",
      "address": "Miniera coffee, bahçelievler",
      "district": "Bahçelievler",
      "discount": 30,
      "details": "Kahve tutkunları için özel harmanlar.",
      "logo": "miniera.jpg"
  },
  {
      "name": "Tabu Cafe",
      "address": "Tabu cafe, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Samimi atmosferde kahve keyfi.",
      "logo": "tabu.jpg"
  },
  {
      "name": "Route NY",
      "address": "Route NY, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "New York tarzı lezzetler.",
      "logo": "route.jpg"
  },
  {
      "name": "Gloria Jeans",
      "address": "Gloria jeans, bahçelievler",
      "district": "Bahçelievler",
      "discount": 15,
      "details": "Dünya çapında kahve ve tatlılar.",
      "logo": "gloriajeans.jpg"
  },
  {
      "name": "El Camino",
      "address": "El camino, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Çeşitli yemek ve içecekler.",
      "logo": "elcamino.jpg"
  },
    {
      "name": "Emek Tomruk",
      "address": "Emek tomruk Çankaya",
      "district": "Bahçelievler",
      "discount": 15,
      "details": "Leziz yemekler ve ikramlar! (diğer adıyla Köfteci ALA) ",
      //"logo": "elcamino.jpg"
  },

  {
    "name": "Altı Üstü Bar",
    "address": "Altı üstü bar, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 10,
    "details": "Alkol, müzik ve leziz yemekler!",
    "logo": "altiustu.jpg"
  },
  {
    "name": "Tiyatro Bar",
    "address": "Tiyatro bar, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 10,
    "details": "Alkol, müzik ve leziz yemekler!",
    //"logo": "tiyatro.jpg"
  },
  {
      "name": "Komşu Meyhane",
      "address": "Komşu meyhane, tunalı",
      "district": "Kızılay-Tunalı",
      "discount": "100 TL",
      "details": "Ev yapımı lezzetler sunan bir restoran.",
      "logo": "komsu.jpg"
  },
  {
      "name": "The Coffee Company",
      "address": "The coffee company, çayyolu",
      "district": "Çayyolu-Ümitköy",
      "discount": 15,
      "details": "Kahve severler için geniş seçenekler.",
      //"logo": "background-image.jpg"
  },

  {
      "name": "Kajun İncek Vista",
      "address": "Kajun İncek Vista",
      "district": "İncek",
      "discount": 10,
      "details": "Lezzetli Cajun yemekleri.",
      "logo": "kajun-logo.png"
  },
  {
    "name": "Chop N Blend",
    "address": "Chop N Blend, bahçelievler",
    "district": "Bahçelievler",
    "discount": 10,
    "details": "Sağlıklı salatalar ve fazlası",
    "logo": "chopnblend.png"
  },
  {
    "name": "Tatam Makarna",
    "address": "Tatam makarna, bahçelievler",
    "district": "Bahçelievler",
    "discount": 15,
    "details": "Leziz makarnalar sizleri bekliyor!",
    "logo": "tatam.jpg"
  },
  {
    "name": "Italian Cut",
    "address": "italian cut, bahçelievler",
    "district": "Bahçelievler",
    "discount": 10,
    "details": "Envai çeşit pizza sizi bekliyor.",
    "logo": "italiancut.jpg"
  },
  {
      "name": "Halanın Yeri",
      "address": "Halanın yeri, incek",
      "district": "İncek",
      "discount": 5,
      "details": "Sıcak ve samimi bir ortamda yemek.",
      //"logo": "background-image.jpg"
  },
  {
    "name": "Sanat Sokağı",
    "address": "Sanat sokağı, kızılay",
    "district": "Kızılay-Tunalı",
    "discount": 15,
    "details": "Alkollü ürünlerde indirim %10 olarak uygulanacaktır.",
    //"logo": "tiyatro.jpg"
  },
  {
      "name": "Tarhana Kazanı",
      "address": "Tarhana kazanı, selanik/kızılay",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Lezzetli tarhana çorbası.",
      "logo": "tarhana.jpg"
  },
  {
      "name": "Mersinli Ali Usta",
      "address": "Mersinli ali usta, selanik/kızılay",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Mersinli Ali Usta'nın tantunisi, lezzetiyle ünlüdür. Kesinlikle denemelisiniz!",
      "logo": "mersinli.jpg"
  },
  {
      "name": "Talya Veteriner",
      "address": "Talya veteriner, beytepe",
      "district": "İncek",
      "discount": 10,
      "details": "Hayvan sağlığı için güvenilir veteriner hizmeti.",
      "logo": "talyavet.jpg"
  },
  {
      "name": "Dino Dürüm",
      "address": "Dino dürüm, kızılay",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Dino Dürüm'de taze ve lezzetli dürümler sizleri bekliyor.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Esnaf Lokantaları",
      "address": "Esnaf lokantaları, kızılay",
      "district": "Kızılay-Tunalı",
      "discount": "İKRAM",
      "details": "Esnaf Lokantası, samimi bir ortamda ev yemekleri sunar. Herkes için uygun fiyatlarla.",
      "logo": "esnaf.jpg"
  },
  {
      "name": "Bahçelievler şubesi",
      "address": "Tunus ıslak hamburger, bahçelievler.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Bahçeli'deki Tunus Islak Hamburger, herkesin favorisi! Lezzetli ıslak hamburgerleri denemelisiniz.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Meşrutiyet şubesi",
      "address": "Tunus ıslak hamburger, meşrutiyet.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Lezzetiyle ünlü olan Tunus Islak Hamburger, her damak zevkine hitap ediyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Anıttepe şubesi",
      "address": "Tunus ıslak hamburger, anıttepe.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Anıttepe'deki Tunus Islak Hamburger, hızlı servisi ve lezzetiyle öne çıkıyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Tunus şubesi",
      "address": "Tunus ıslak hamburger, tunus/tunalı",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Tunus Islak Hamburger, sıcak ve taze hamburgerleriyle herkesin ilgisini çekiyor.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Kolej şubesi",
      "address": "Tunus ıslak hamburger, kolej.",
      "district": "Tunus Islak Hamburger",
      "discount": 10,
      "details": "Kolej bölgesinde Tunus Islak Hamburger ile doyurucu bir öğün geçirin.",
      "logo": "background-image.jpg"
  },
  {
      "name": "Altınoran şubesi",
      "address": "Nunchi Coffee, altınoran",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Nunchi Coffee, rahat bir ortamda keyifli kahve deneyimi sunuyor.",
      "logo": "nunchi.png"
  },
  {
      "name": "Nokta şubesi",
      "address": "Nunchi Coffee, nokta",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Nokta'daki Nunchi Coffee, farklı kahve çeşitleriyle damak tadınıza hitap ediyor.",
      "logo": "nunchi.png"
  },
  {
      "name": "Cepa şubesi",
      "address": "Nunchi Coffee, cepa",
      "district": "Nunchi Coffee",
      "discount": 10,
      "details": "Cepa'da Nunchi Coffee, kahve severler için harika bir buluşma noktası.",
      "logo": "nunchi.png"
  },
  {
      "name": "Komagene",
      "address": "Komagene, incek",
      "district": "İncek",
      "discount": 15,
      "details": "Komagene'de sağlıklı ve lezzetli yiyecekler sizi bekliyor.",
      "logo": "komagene.jpg"
  },
  {
      "name": "Mojo and More",
      "address": "Mojo and more, tunalı",
      "district": "Kızılay-Tunalı",
      "discount": 10,
      "details": "Mojo'da keyifli bir atmosferde lezzetli yemekler yiyebilirsiniz.",
      "logo": "mojo.png"
  },
  {
      "name": "Chocolabs",
      "address": "Chocolabs, bahçelievler",
      "district": "Bahçelievler",
      "discount": 10,
      "details": "Chocolabs, tatlı severler için vazgeçilmez bir durak!",
      "logo": "chocolabs.png"
  },
  {
      "name": "Clinic Çayyolu Dişçi",
      "address": "Clinic çayyolu dişçi, çayyolu",
      "district": "Çayyolu-Ümitköy",
      "discount": 20,
      "details": "Çayyolu'ndaki dişçi kliniği, profesyonel hizmet sunuyor.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Beytepe şubesi",
      "address": "Midyeci yalçın, beytepe",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Yenikent şubesi",
      "address": "Midyeci yalçın, yenikent",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Keçiören şubesi",
      "address": "Midyeci yalçın, keçiören",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Sincan şubesi",
      "address": "Midyeci yalçın, sincan",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Batıkent şubesi",
      "address": "Midyeci yalçın, batıkent",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "Çubuk şubesi",
      "address": "Midyeci yalçın, çubuk",
      "district": "Midyeci Yalçın",
      "discount": 10,
      "details": "Midyeci yalçının eşsiz midyeleri ile buluşun.",
      //"logo": "background-image.jpg"
  },
  {
      "name": "MackBear",
      "address": "Kızılcaşar, Yavuz Sultan Selim Blv A-1 BLOK NO: 7/A İç Kapı No: 183, 06830 Gölbaşı/Ankara.",
      "district": "İncek",
      "discount": 10,
      "details": "MackBear, sağlıklı atıştırmalıklar ve lezzetli içecekler sunuyor.",
      "logo": "mackbear.jpg"
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
    modalBusinessDiscount.innerHTML = `
    ${discountEmoji} <strong>İndirim oranı:</strong> 
    ${Number.isInteger(business.discount) ? `%${business.discount}` : business.discount}`;
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
                <span class="discount modern-discount">
                  ${Number.isInteger(business.discount) ? `%${business.discount}` : business.discount}
                </span>
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
    document.getElementById('modal-business-address').innerHTML = `🚩 Adres: <strong>${business.address}</strong>`;
    document.getElementById('modal-business-discount').innerHTML = `
    💰 İndirim: <strong>${Number.isInteger(business.discount) ? `%${business.discount}` : business.discount}</strong>`;
    
    document.getElementById('modal-business-details').innerHTML = `<em><u>${business.details}</u></em>`;

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
