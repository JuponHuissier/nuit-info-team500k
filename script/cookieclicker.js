let score = 0;
const scoreBoard = document.getElementById('score');
const cookieButton = document.getElementById('cookie-button');
const buyButtons = document.querySelectorAll('.buy-button');
const baseTitle = "Cookie Clicker";

// Fonction pour générer une version "désordonnée" du titre
function getShuffledTitle(title) {
  // Convertir le texte en tableau de caractères
  const chars = title.split('');
  // Mélanger les caractères aléatoirement
  for (let i = chars.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [chars[i], chars[j]] = [chars[j], chars[i]];
  }
  return chars.join('');
}

// Fonction pour animer le titre
function animateTitle() {
  document.title = getShuffledTitle(baseTitle); // Met à jour le titre avec une version mélangée
}

// Déclencher l'animation toutes les 300 ms
setInterval(animateTitle, 300);

// Fonction pour augmenter le score de 1 à chaque clic sur le cookie
cookieButton.addEventListener('click', () => {
  score++;  // Augmente de 1 le score à chaque clic
  console.log('Score après clic cookie:', score);  // Log du score dans la console
  scoreBoard.textContent = score;  // Met à jour l'affichage du score
});

// Fonction pour gérer l'achat des upgrades
buyButtons.forEach(button => {
  button.addEventListener('click', () => {
    const cost = parseInt(button.parentElement.getAttribute('data-cost')); // Récupère le prix de l'upgrade
    console.log(`Tentative d'achat pour ${button.previousElementSibling.textContent} - Coût: ${cost} cookies`);  // Log du coût d'achat
    if (score >= cost) {  // Si le score est suffisant pour acheter
      score -= cost;  // Déduit le coût de l'upgrade du score
      console.log('Score après achat:', score);  // Log du score après achat
      scoreBoard.textContent = score;  // Met à jour l'affichage du score
      alert(`Vous avez acheté une ${button.previousElementSibling.textContent}!`);
    } else {
      alert("Vous n'avez pas assez de cookies!");
    }
  });
});
