notifyParentOfPage('gallery.html');

const imageList = [
    { src: 'images/trussrod adjustment.png', alt: 'Guitar trussrod adjustment' },
    { src: 'images/firstguitar.png', alt: 'Guitar strings too high' },
    { src: 'images/tuning-pegs.png', alt: 'Tuning pegs' }

];

const gallery = document.getElementById('gallery');
imageList.forEach(img => {
    const image = document.createElement('img');
    image.src = img.src;
    image.alt = img.alt;
    gallery.appendChild(image);
});
