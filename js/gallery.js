// Ootab kuni lehe DOM on täielikult laetud
document.addEventListener('DOMContentLoaded', () => {
    //Nimekiri piltidest galeriis, mida saab täiendada
    const imageList = [
        { src: 'images/trussrod-adjustment.png', alt: 'Guitar-trussrod-adjustment' },
        { src: 'images/string-height-measure.png', alt: 'Guitar-strings-too-high' },
        { src: 'images/tuning-pegs.png', alt: 'Tuning pegs' },
        { src: 'images/guitar-neck-blueprint.png', alt: 'Guitar-neck-blueprint' },
        { src: 'images/firstguitar.png', alt: 'First-guitar' }
    ];

    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = document.getElementById('overlayImg');
    let lastFocusedElement = null;

    // Funktsioon ülekatte kuvamiseks
    function showOverlay(src, alt) {
        lastFocusedElement = document.activeElement;
        overlayImg.src = src;
        overlayImg.alt = alt;
        overlay.classList.add('show');
        overlay.setAttribute('aria-hidden', 'false');
        overlayImg.focus();
    }
    // Funktsioon ülekatte peitmiseks
    function hideOverlay() {
        overlay.classList.remove('show');
        overlayImg.alt = '';
        overlay.setAttribute('aria-hidden', 'true');
        if (lastFocusedElement) {
            lastFocusedElement.focus();
        }
    }

    // Lazyloadingu implementatsioon
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                observer.unobserve(img);
            }
        });
    });

    //Iga pildi kohta käiakse list läbi ja luuakse galeriisse pildi element
    imageList.forEach(img => {
        const container = document.createElement('div');
        container.className = 'gallery-img';
        container.style.cursor = 'zoom-in';

        const image = document.createElement('img');
        image.dataset.src = img.src;
        image.alt = img.alt;
        image.classList.add('lazy');

        // Vea püüdmine, kui pilte ei leita
        image.addEventListener('error', () => {
            image.src = 'images/fallback.png'; // Use a placeholder image
            image.alt = 'Image not available';
        });

        // Lisa sündmus pildi avamiseks ülekattega
        image.addEventListener('click', () => {
            // Only show overlay if image is loaded
            if (image.complete && image.naturalWidth !== 0) {
                showOverlay(img.src, img.alt);
            }
        });

        //Lisa pilt konteinerisse ja konteiner galeriisse
        container.appendChild(image);
        gallery.appendChild(container);
        imageObserver.observe(image);
    });

    // Lisa sündmus ülekatte peitmiseks, kui sellele klõpsatakse
    overlay.addEventListener('click', hideOverlay);

    // Lisa klaviatuuri navigeerimine, ESC overlay sulgemiseks
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && overlay.classList.contains('show')) {
            hideOverlay();
        }
    });
});
