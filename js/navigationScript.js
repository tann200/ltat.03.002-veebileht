function loadPage(page) {
    const iframe = document.getElementById('content-frame');

    if (!iframe) return;

    updatePageTitleInstant(page);

    setActiveNavButton(page);

    iframe.onload = () => updatePageTitleFromIframe(iframe);

    iframe.src = page;

    const navLinks = document.getElementById('nav-links');
    if (navLinks) navLinks.classList.remove('active');
}

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

function updatePageTitleInstant(page) {
    const titleElement = document.getElementById('page-title');
    if (!titleElement) return;

    const quickTitles = {
        'main.html': 'Home',
        'index.html': 'Home',
        'common-problems.html': 'Common Problems',
        'gallery.html': 'Gallery'
    };

    titleElement.textContent = quickTitles[page] || 'Loading...';
}

function updatePageTitleFromIframe(iframe) {
    const titleElement = document.getElementById('page-title');
    if (!iframe || !titleElement) return;

    try {
        titleElement.textContent = iframe.contentDocument.title || titleElement.textContent;
    } catch (e) {
        // Ignore cross-origin errors
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const frame = document.getElementById('content-frame');
    const menuToggle = document.getElementById('menu-toggle');

    if (frame) {
        const currentPage = frame.src.split('/').pop();
        updatePageTitleInstant(currentPage);
        frame.onload = () => updatePageTitleFromIframe(frame);
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', () => {
            const navLinks = document.getElementById('nav-links');
            if (navLinks) navLinks.classList.toggle('active');
        });
    }
});
