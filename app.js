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

galleryImgs.forEach((img) => {
   img.addEventListener('click', () => {
      console.log('open modal');
   });
});

preloadImages();
startAboutSlideshow();
