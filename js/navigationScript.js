function loadPage(page) {
    document.getElementById('content-frame').src = page;
    setActiveNavButton(page);
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

// Set active button on initial load
document.addEventListener('DOMContentLoaded', function () {
    const frame = document.getElementById('content-frame');
    if (frame) {
        const currentPage = frame.src.split('/').pop();
        setActiveNavButton(currentPage);
    }
});