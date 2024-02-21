const aboutImgs = [
   './media/about/about1.jpg',
   './media/about/about2.jpg',
   './media/about/about3.jpg',
   './media/about/about4.jpg',
   './media/about/about5.jpg',
   './media/about/about6.jpg',
];
const aboutImage = document.getElementById('about-js');

// Preload images
function preloadImages() {
   aboutImgs.forEach(function (url) {
      let img = new Image();
      img.src = url;
   });
}

function startAboutSlideshow() {
   let index = 1;

   const changeAboutImage = () => {
      aboutImage.style.backgroundImage = `url('${aboutImgs[index]}')`;
      index++;
      if (index === aboutImgs.length) index = 0;
   };

   setInterval(changeAboutImage, 4000);
}

preloadImages();
startAboutSlideshow();

// const aboutBackgrounds = document.querySelectorAll('.about-js');
// let index = 0;
// console.log(aboutBackgrounds);

// const change = () => {
//    aboutBackgrounds.forEach((bg) => {
//       bg.classList.remove('active');
//    });
//    aboutBackgrounds[index].classList.add('active');
//    index++;
//    console.log(index, 'hello');
//    if (index === aboutImgs.length) index = 0;
// };

// setInterval(change, 4000);
