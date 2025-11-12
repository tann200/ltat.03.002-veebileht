// Ootab kuni lehe DOM on täielikult laetud
document.addEventListener('DOMContentLoaded', () => {
    //Nimekiri piltidest galeriis, mida saab täiendada
    const imageList = [
        { src: 'images/trussrod-adjustment.png', alt: 'Guitar trussrod adjustment' },
        { src: 'images/string-height-measure.png', alt: 'Guitar strings too high' },
        { src: 'images/tuning-pegs.png', alt: 'Tuning pegs' },
        { src: 'images/guitar-neck-blueprint.png', alt: 'Guitar neck blueprint' },
        { src: 'images/firstguitar.png', alt: 'First guitar' }
    ];

    const gallery = document.getElementById('gallery');
    const overlay = document.getElementById('imageOverlay');
    const overlayImg = document.getElementById('overlayImg');
    // Funktsioon ülekatte kuvamiseks
    function showOverlay(src, alt) {
        overlayImg.src = src;
        overlayImg.alt = alt;
        overlay.classList.add('show');
    }
    // Funktsioon ülekatte peitmiseks
    function hideOverlay() {
        overlay.classList.remove('show');
        overlayImg.src = '';
        overlayImg.alt = '';
    }
    //Iga pildi kohta käiakse list läbi ja luuakse galeriisse pildi element
    imageList.forEach(img => {
        const container = document.createElement('div');
        container.className = 'gallery-img';
        container.style.cursor = 'zoom-in';

        const image = document.createElement('img');
        image.src = img.src;
        image.alt = img.alt;
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
    });
    // Lisa sündmus ülekatte peitmiseks, kui sellele klõpsatakse
    overlay.addEventListener('click', hideOverlay);
});