const searchInput = document.getElementById('searchInput');
const catListings = document.querySelectorAll('.cat-listings');

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();

    catListings.forEach(listing => {
        const catName = listing.querySelector('h3').textContent.toLowerCase();
        if (catName.includes(searchTerm)) {
            listing.style.display = 'block'; 
        } else {
            listing.style.display = 'none'; 
        }
        
        if (catName.includes(searchTerm)) {
            listing.classList.remove('hidden'); 
        } else {
            listing.classList.add('hidden'); 
        }
    });
});

const catImages = document.querySelectorAll('.cat-image img');
const imageViewer = document.getElementById('imageViewer');
const viewerImage = imageViewer.querySelector('img');
const closeButton = document.querySelector('.close-button');

catImages.forEach(image => {
  image.addEventListener('click', () => {
    viewerImage.src = image.src; 
    imageViewer.style.display = 'flex'; 
  });
});

closeButton.addEventListener('click', () => {
  imageViewer.style.display = 'none'; 
  viewerImage.src = ''; 
});