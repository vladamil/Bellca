const aboutImgs = [
   './media/about/about1.jpg',
   './media/about/about2.jpg',
   './media/about/about3.jpg',
   './media/about/about4.jpg',
   './media/about/about5.jpg',
   './media/about/about6.jpg',
];

testimonials = [
   {
      text: 'Prezadovoljna sam profesionalnošću, izborom i kvalitetom materijala, savetima kako da održavam uradjene nokte i zanoktice koje su mi veliki problem. Kao neko ko nema vremena da sam brine o noktima, ništa mi se ne zakine, niti zalomi, na korekciju dolazim svake 3-4 nedelje. Bukvalno odmorim u prijatnom ambijentu Bellca studija.',
      name: 'Biljana',
   },
   {
      text: 'Po prvi put mi prirodne trepavice nisu bukvalno otpale nakon svilenih, ne menjam te nikad.',
      name: 'Ana',
   },
   {
      text: 'Bio me je strah gde da dovedem ćerku koja gricka nokte, a da ne izadjemo iz salona uz alergiju na materijal. Obe smo bile oduševljene. Cene i više nego korektne za ono što nam je pruženo. Uz to izadjete iz salona prezadovoljni i sa osmehom. Mi smo redovni i verni klijenti.',
      name: 'Milica',
   },
   {
      text: 'Trepavice radim dugo, ne mogu bez njih, kod Branči uvek lepo odremam, i probudim se sa sjajnim trepama koje drže do korekcije.',
      name: 'Tatjana',
   },
   {
      text: 'Volim prirodne trepavice, samo se opustim, malo i odremam dok se tretman radi i posle mi ni puder na licu ne treba, jer iako radim 1 na 1 tehniku uvek izgledam našminkana. 🥰',
      name: 'Lana',
   },
   {
      text: 'Kod moje Branči uvek zagarantovan smeh i super razgovor, a nokti i trepavice vrh uvek.',
      name: 'Slađana',
   },
   {
      text: 'Uvek izadjem iz studia zadovoljna.',
      name: 'Sanja',
   },
];

const aboutImage = document.getElementById('about-js');
const galleryImgs = document.querySelectorAll('.gallery .image');
const modal = document.querySelector('.modal-image');
const modalImg = document.getElementById('modal-js');
const modalBtn = document.getElementById('modal-close-js');
const testimonialsContent = document.querySelector('.testimonials .content');

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

let minHeight = 0;
const reviews = [];

// creating testimonials
testimonials.forEach((test, index) => {
   const review = document.createElement('div');
   review.classList.add('single-review');
   review.innerHTML = `
<p class="text-js">
   ${test.text}
</p>
<p class="name">
   <i class="fa-solid fa-pen-nib"></i>
   ${test.name}
</p>`;
   testimonialsContent.appendChild(review);

   if (review.offsetHeight > minHeight) {
      minHeight = review.offsetHeight; //calculating min-height depending on reviews
   }

   if (index === 0) {
      review.classList.add('show'); //setting first review as active
   }

   reviews.push(review);
});

testimonialsContent.style.minHeight = minHeight + 'px'; //setting min-height to reviews container

// auto-change reviews
const startReviewsChange = () => {
   let index = 1;

   const changeReview = () => {
      reviews.forEach((rev) => rev.classList.remove('show'));

      reviews[index].classList.add('show');
      index++;
      if (index === reviews.length) index = 0;
   };

   setInterval(changeReview, 8000);
};

// EVENT LISTENERS
galleryImgs.forEach((img) => {
   img.addEventListener('click', () => {
      openModal(img);
   });
});

modalBtn.addEventListener('click', closeModal);
document.addEventListener('keydown', closeModalEsc);

preloadImages();
startAboutSlideshow();
startReviewsChange();
