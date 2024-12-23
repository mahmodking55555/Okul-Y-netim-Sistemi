// Belirli bir bölümü göster ve diğer bölümleri gizle
function showLogin() {
    
}
function toggleMenu1() {
    const navLinks = document.querySelector('.nav-links');
    if (navLinks) {
        navLinks.classList.toggle('open');
    }
}

window.addEventListener('resize', () => {
    const navLinks = document.querySelector('.nav-links');
    if (window.innerWidth >= 768) {
        navLinks.classList.remove('open');
    }
});


function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Hoş geldiniz mesajını gizle
    welcomeMessage.style.display = 'none';

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';  // İlgili bölümü göster
        } else {
            section.style.display = 'none';   // Diğer bölümleri gizle
        }
    });

    // Belirli bir bölümü göster ve diğer bölümleri gizle
function showSection(sectionId) {
    const sections = document.querySelectorAll('section');
    const welcomeMessage = document.getElementById('welcomeMessage');

    // Hoş geldiniz mesajını gizle
    welcomeMessage.style.display = 'none';

    sections.forEach(section => {
        if (section.id === sectionId) {
            section.style.display = 'block';  // İlgili bölümü göster
            filterList(sectionId); // Listeleri filtrele
        } else {
            section.style.display = 'none';   // Diğer bölümleri gizle
        }
    });
}

// Her bölüme özel listeyi filtrele
function filterList(sectionId) {
    let input, filter, list, items;
    input = document.getElementById(`${sectionId}Search`);
    filter = input.value.toLowerCase();
    list = document.getElementById(`${sectionId}List`);
    items = list.getElementsByTagName('li');

    // Her öğeyi kontrol et
    for (let i = 0; i < items.length; i++) {
        const item = items[i];
        if (item.innerText.toLowerCase().includes(filter)) {
            item.classList.remove('hidden'); // Eşleşiyorsa göster
        } else {
            item.classList.add('hidden'); // Eşleşmiyorsa gizle
        }
    }
}



// Her arama kutusu için olay dinleyici ekle
document.querySelectorAll('input[type="text"]').forEach(input => {
    input.addEventListener('input', function() {
        const sectionId = this.id.replace('Search', ''); // Arama kutusunun ID'sinden bölüm ID'sini al
        filterList(sectionId); // İlgili bölümü filtrele
    });
});

}