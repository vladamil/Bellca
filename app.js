const aboutImgs = [
   './media/about/about1.jpg',
   './media/about/about2.jpg',
   './media/about/about3.jpg',
   './media/about/about4.jpg',
   './media/about/about5.jpg',
   './media/about/about6.jpg',
];

const aboutImage = document.getElementById('about-js');
const galleryImgs = document.querySelectorAll('.gallery .image');
const modal = document.querySelector('.modal-image');
const modalImg = document.getElementById('modal-js');
const modalBtn = document.getElementById('modal-close-js');

// Preload images
function preloadImages() {
   aboutImgs.forEach(function (url) {
      let img = new Image();
      img.src = url;
   });
}

// Auto-slide about us
function startAboutSlideshow() {
   let index = 1;

   const changeAboutImage = () => {
      aboutImage.style.backgroundImage = `url('${aboutImgs[index]}')`;
      index++;
      if (index === aboutImgs.length) index = 0;
   };

   setInterval(changeAboutImage, 4000);
}

// open image modal
const openModal = (imageDiv) => {
   const src = imageDiv.querySelector('img').src;
   modalImg.src = src;
   modal.classList.add('open');
};

// close image modal
const closeModal = () => {
   modalImg.removeAttribute('src');
   modal.classList.remove('open');
};

// close image modal on Esc key
const closeModalEsc = (e) => {
   if (e.key === 'Escape' && modal.classList.contains('open')) {
      closeModal();
   }
};

galleryImgs.forEach((img) => {
   img.addEventListener('click', () => {
      openModal(img);
   });
});

modalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalEsc);

preloadImages();
startAboutSlideshow();
