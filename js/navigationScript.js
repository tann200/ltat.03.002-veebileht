//See skript tegeleb lehe DOMI laadimise järel navigeerimisnupu aktiivseks seadistamise ja mobiilse menüü lülitamisega.
document.addEventListener('DOMContentLoaded', function() {
    // Määra aktiivne navigeerimisnupp vastavalt praegusele lehele
    const navButtons = document.querySelectorAll('.nav-btn');
    const hamburger = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-links');

    // Hamburgermenüü ja nav nupud mobiilivaates
    if (hamburger && navMenu) {
        hamburger.addEventListener('click', () => {
            navMenu.classList.toggle('active');
        });

        // Peida menüü, kui mõnele nav nupule klõpsatakse (mobiilivaade)
        navMenu.querySelectorAll('button').forEach(btn => {
            btn.addEventListener('click', () => {
                navMenu.classList.remove('active');
            });
        });
    }

    // Menüü navigeerimise nupud
    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            // Navigate to the page using data-href attribute (update HTML to use data-href instead of onclick)
            const href = button.dataset.href;
            if (href) {
                window.location.href = href;
            }
        });
    });

    // lehe ürli järgi aktiivse nupu näitamine
    const currentPath = window.location.pathname.split('/').pop();
    navButtons.forEach(button => {
        const buttonHref = button.dataset.href;
        if (buttonHref && buttonHref.includes(currentPath)) {
            button.classList.add('active');
        }
    });
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
