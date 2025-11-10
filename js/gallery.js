notifyParentOfPage('gallery.html');

const imageList = [
    { src: 'images/trussrod adjustment.png', alt: 'Guitar trussrod adjustment' },
    { src: 'images/firstguitar.png', alt: 'Guitar strings too high' },
    { src: 'images/tuning-pegs.png', alt: 'Tuning pegs' },
    { src: 'images/trussrod.webp', alt: 'Trussrod diagram' }
];

const gallery = document.getElementById('gallery');

// Create overlay
const overlay = document.createElement('div');
overlay.className = 'image-overlay';
document.body.appendChild(overlay);

const overlayImg = document.createElement('img');
overlay.appendChild(overlayImg);

// Show overlay
function showOverlay(src, alt) {
    overlayImg.src = src;
    overlayImg.alt = alt;
    overlay.classList.add('show');
}

// Hide overlay
function hideOverlay() {
    overlay.classList.remove('show');
    overlayImg.src = '';
}

// Populate gallery
imageList.forEach(img => {
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt;

    image.addEventListener('click', () => showOverlay(img.src, img.alt));

    gallery.appendChild(image);
});

overlay.addEventListener('click', hideOverlay);
