//See skript tegeleb lehe DOMI laadimise järel navigeerimisnupu aktiivseks seadistamise ja mobiilse menüü lülitamisega.
document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.getElementById('menu-toggle');
    const navLinks = document.getElementById('nav-links');

    if (menuToggle && navLinks) {
        menuToggle.addEventListener('click', function() {
            navLinks.classList.toggle('active');
        });

        // Peida menüü, kui mõnele nav nupule klõpsatakse (mobiilivaade)
        navLinks.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                navLinks.classList.remove('active');
            });
        });
    }
});
//Sea aktiivne navigeerimisnupp vastavalt praegusele lehele
function setActiveNavButton(page) {
    const btnMap = {
        'main.html': 'home-btn',
        'index.html': 'home-btn',
        'common-problems.html': 'problems-btn',
        'gallery.html': 'gallery-btn'
    };

    Object.values(btnMap).forEach(id => {
        const btn = document.getElementById(id);
        if (btn) {
            btn.classList.remove('active');
            btn.disabled = false;
        }
    });

    if (btnMap[page]) {
        const activeBtn = document.getElementById(btnMap[page]);
        if (activeBtn) {
            activeBtn.classList.add('active');
            activeBtn.disabled = true;
        }
    }
}