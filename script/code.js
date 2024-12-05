// script.js

// Correspondances entre le corps humain et l’océan
const correspondances = {
    circulation: `
      <h2>Circulation sanguine</h2>
      <p> La circulation sanguine dans le corps humain peut être comparée aux courants marins de l'océan. 
      En effet, tout comme l’eau se déplace pour nourrir les écosystèmes sous-marins, le sang traverse vos artères et veines pour nourrir chaque cellule de votre corps.
      Ces deux systèmes sont vitaux pour la survie. 
      Imaginez que chaque battement de cœur propulse littéralement un "océan de vie" à travers vous.
      Et si votre cœur était aussi puissant qu'une tempête en mer ?
      Voilà un autre raisonnement pour votre prochaine séance d’entraînement ! </p>
    
    `,
    respiration: `
      <h2>Respiration</h2>
      <p> La respiration dans le corps humain est un processus fascinant.
      Il s'agit d'un échange de gaz vital, où l'oxygène entre et le dioxyde de carbone sort, tout comme les poissons respirent dans l’eau pour survivre.
      Mais avez-vous déjà pensé que chaque bouffée d'air que vous prenez est comme une vague qui déferle sur la plage, envoyant une énergie nouvelle dans chaque cellule de votre corps ?
      Imaginez maintenant que vos poumons sont des coraux géants, filtrant l'air comme des récifs marins filtrent l'eau de l'océan.
      Une véritable symbiose entre l'homme et la mer ! </p>
      
    `,
    digestion: `
      <h2>Digestion</h2>
      <p> La digestion dans votre corps est un processus aussi complexe que les courants marins qui naviguent à travers les océans.
      Chaque aliment que vous ingérez est "découpé" et transformé dans vos intestins, tout comme les créatures marines décomposent la matière organique dans les abysses.
      Imaginez vos intestins comme des algues marines, où les nutriments flottent dans l'eau et sont absorbés pour alimenter votre corps.
      Une véritable aventure sous-marine dans votre propre système !
      Et si tout cela se passait aussi rapidement que la vitesse d'un requin qui fonce dans les eaux profondes ? </p>
      
    `,
    defenses: `
      <h2>Défenses naturelles</h2>
      <p> Tout comme l'océan a ses barrières naturelles, telles que les coraux et les récifs, le corps humain possède un système immunitaire pour se défendre contre les attaques.
      Ces protections, qui ressemblent à des murailles sous-marines, sont conçues pour repousser les agents pathogènes comme des vagues géantes frappant les rochers.
      Nos anticorps sont comme des dauphins alertes, prêts à défendre notre territoire contre les intrus. 
      Alors, la prochaine fois que vous attraperez un rhume, imaginez que vous êtes un récif de corail, prêt à repousser la marée de bactéries ! </p>
      
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