// script.js

// Correspondances entre le corps humain et l’océan
const correspondances = {
    circulation: `
      <h2>Circulation sanguine</h2>
      <p>Les courants marins dans l'océan fonctionnent comme le système circulatoire du corps humain, transportant des nutriments et régulant la température.</p>
      <img src="ocean-currents.jpg" alt="Courants marins">
    `,
    respiration: `
      <h2>Respiration</h2>
      <p>Les poumons humains échangent des gaz de manière similaire aux échanges d'oxygène et de dioxyde de carbone dans les océans, essentiels à la vie marine.</p>
      <img src="ocean-oxygen.jpg" alt="Respiration océanique">
    `,
    digestion: `
      <h2>Digestion</h2>
      <p>Les océans décomposent les matières organiques, tout comme l'estomac humain digère les aliments pour libérer des nutriments.</p>
      <img src="ocean-decomposition.jpg" alt="Décomposition dans l'océan">
    `,
    defenses: `
      <h2>Défenses naturelles</h2>
      <p>Les barrières coralliennes protègent les écosystèmes marins, comme le système immunitaire protège le corps humain contre les intrus.</p>
      <img src="coral-barrier.jpg" alt="Barrière corallienne">
    `,
  };
  
  // Afficher les détails
  function showDetail(section) {
    const detailsSection = document.getElementById('details');
    const detailsContent = document.getElementById('details-content');
    detailsContent.innerHTML = correspondances[section];
    detailsSection.classList.remove('hidden');
  }
  
  // Cacher les détails
  function hideDetail() {
    const detailsSection = document.getElementById('details');
    detailsSection.classList.add('hidden');
  }
  // script.js

// Cacher le bandeau de cookies une fois accepté
document.getElementById('accept-cookies').addEventListener('click', function () {
  const cookieBanner = document.getElementById('cookie-banner');
  cookieBanner.style.display = 'none';
});

// Empêcher le clic sur "Rejeter"
const rejectButton = document.getElementById('reject-cookies');

rejectButton.addEventListener('mouseover', function () {
  const randomX = Math.random() * 200 - 100; // Position aléatoire en X
  const randomY = Math.random() * 200 - 100; // Position aléatoire en Y
  rejectButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
});