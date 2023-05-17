const slides = [
	{
		"image":"slide1.jpg",
		"tagLine":"Impressions tous formats <span>en boutique et en ligne</span>"
	},
	{
		"image":"slide2.jpg",
		"tagLine":"Tirages haute définition grand format <span>pour vos bureaux et events</span>"
	},
	{
		"image":"slide3.jpg",
		"tagLine":"Grand choix de couleurs <span>de CMJN aux pantones</span>"
	},
	{
		"image":"slide4.png",
		"tagLine":"Autocollants <span>avec découpe laser sur mesure</span>"
	}
]

// Récupération des flèches gauche et droite
const arrowLeft = document.querySelector('.arrow_left');
const arrowRight = document.querySelector('.arrow_right');

// Ajout d'un écouteur d'événements sur la flèche gauche
arrowLeft.addEventListener('click', () => {
  console.log('Flèche gauche cliquée');
});

// Ajout d'un écouteur d'événements sur la flèche droite
arrowRight.addEventListener('click', () => {
  console.log('Flèche droite cliquée');
});

// Récupération du conteneur des points
const dotsContainer = document.querySelector('.dots');

// Parcours des diapositives et création d'un point pour chacune
slides.forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');

  // Ajout de la classe "dot_selected" au premier point pour le sélectionner par défaut
  if (index === 0) {
    dot.classList.add('dot_selected');
  }

  // Ajout du point au conteneur
  dotsContainer.appendChild(dot);
});

// Initialisation de l'index de la diapositive courante à 0
let currentSlideIndex = 0;

// Ajout d'un écouteur d'événements sur la flèche droite
arrowRight.addEventListener('click', () => {
  // Incrémentation de l'index de la diapositive courante modulo le nombre total de diapositives
  currentSlideIndex = (currentSlideIndex + 1) % slides.length;
  // Mise à jour de l'affichage
  updateSlider();
});

// Ajout d'un écouteur d'événements sur la flèche gauche
arrowLeft.addEventListener('click', () => {
  // Décrémentation de l'index de la diapositive courante modulo le nombre total de diapositives
  currentSlideIndex = (currentSlideIndex - 1 + slides.length) % slides.length;
  // Mise à jour de l'affichage
  updateSlider();
});

// Fonction de mise à jour de l'affichage
function updateSlider() {
  // Récupération de l'image et de la ligne de texte de la diapositive courante
  const bannerImg = document.querySelector('.banner-img');
  const tagLine = document.querySelector('#banner p');
  // Récupération de tous les points
  const dots = document.querySelectorAll('.dot');

  // Mise à jour de l'image et de la ligne de texte de la diapositive courante
  bannerImg.setAttribute('src', `./assets/images/slideshow/${slides[currentSlideIndex].image}`);
  tagLine.innerHTML = slides[currentSlideIndex].tagLine;

  // Mise à jour de la sélection des points
  dots.forEach((dot, index) => {
    if (index === currentSlideIndex) {
      dot.classList.add('dot_selected');
    } else {
      dot.classList.remove('dot_selected');
    }
  });
}
