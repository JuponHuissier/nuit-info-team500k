// Add an event listener to the document to detect clicks
let spinning = false

document.addEventListener("click", (event) => {
    console.log("CLICK")
    const slotMachinePopupChance = 0.05
    if (Math.random() < slotMachinePopupChance && !spinning) {
        spinning = true
        console.log("GAMBLECORE")
        // Create a new div element
        const square = document.createElement("div");

        // Add the 'square' class to the div
        square.classList.add("square");

        // Position the square at the click location
        square.style.left = `${100 * event.clientX/screen.width - 30}vw`;
        square.style.top = `${100 * event.clientY/screen.height - 40}vh`;
        console.log(event.clientX/screen.width)

        square.innerHTML = `<div class="container">
                                <div class="slotcontainer">
                                <div class="slot">
                                    <div class="symbols" id="slot1Symbols"></div>
                                </div>

                                <div class="slot">
                                    <div class="symbols" id="slot2Symbols"></div>
                                </div>

                                <div class="slot">
                                    <div class="symbols" id="slot3Symbols"></div>
                                </div>
                                </div>

                                <div style="display: flex;">
                                </div>
                            </div>`

        // Append the square to the body
        gameContainer.appendChild(square);

        const letsGoGambling = new Audio('./assets/sfx/Lets-go-gambling.mp3');
        letsGoGambling.play();
        // Remove the square after 10 seconds
        setTimeout(() => {
            square.remove();
            spinning = false;
        }, 7500);
        spin();
        spin();
    }
});
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
      i = parseInt(button.parentElement.getAttribute('data-cost'))*4;
      console.log(i);
      button.parentElement.setAttribute('data-cost',parseInt(button.parentElement.getAttribute('data-cost'))*4);
      alert(`Vous avez acheté une ${button.previousElementSibling.textContent}!`);
    } else {
      alert("Vous n'avez pas assez de cookies!");
    }
  });
});


const slotSymbols = [
    ['😀', '😁', '😂', '😃', '😄', '😅', '😆', '😇', '😈', '😉', '😊', '🍪'],
      ['🍎', '🍏', '🍐', '🍊', '🍋', '🍌', '🍉', '🍇', '🍓', '🍈', '🍒', '🍪'],
      ['⭐️', '🌟', '✨', '💫', '⚡️', '☄️', '🌠', '🌌', '🌙', '🌕', '🌖', '🍪']
    ];

  function createSymbolElement(symbol) {
    const div = document.createElement('div');
    div.classList.add('symbol');
    div.textContent = symbol;
    return div;
  }

  let spun = false;
  function spin() {
    if (spun) {
      reset();
    }
    const slots = document.querySelectorAll('.slot');
    let completedSlots = 0;

    slots.forEach((slot, index) => {
      const symbols = slot.querySelector('.symbols');
      const symbolHeight = symbols.querySelector('.symbol')?.clientHeight;
      const symbolCount = symbols.childElementCount;

      symbols.innerHTML = '';

      symbols.appendChild(createSymbolElement('❓'));

      for (let i = 0; i < 3; i++) {
        slotSymbols[index].forEach(symbol => {
          symbols.appendChild(createSymbolElement(symbol));
        });
      }

      const totalDistance = symbolCount * symbolHeight;
      const randomOffset = -Math.floor(Math.random() * (symbolCount - 1) + 1) * symbolHeight;
      symbols.style.top = `${randomOffset}px`;

      symbols.addEventListener('transitionend', () => {
        completedSlots++;
        if (completedSlots === slots.length) {
          logDisplayedSymbols();
        }
      }, { once: true });
    });

    spun = true;
  }

  function reset() {
    const slots = document.querySelectorAll('.slot');

    slots.forEach(slot => {
      const symbols = slot.querySelector('.symbols');
      symbols.style.transition = 'none';
      symbols.style.top = '0';
      symbols.offsetHeight;
      symbols.style.transition = '';
    });
  }
  let jackpockVerify = false

  const ohDangIt = new Audio('./assets/sfx/oh-dang-it.mp3');
  const goodResultSFX = new Audio('./assets/sfx/goodresult-82807.mp3');

  function logDisplayedSymbols() {
    const slots = document.querySelectorAll('.slot');
    const displayedSymbols = [];
    slots.forEach((slot, index) => {
      const symbols = slot.querySelector('.symbols');
      const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
      const displayedSymbol = slotSymbols[index][symbolIndex];
      console.log(displayedSymbols);

      // Check if all displayed symbols are the same
      const allSame = (displayedSymbols[0] == '🍪' && displayedSymbols[1] == '🍪' && displayedSymbols[2]== '🍪');
      if (allSame && !jackpockVerify) {
        console.log("Jackpot! All symbols are the same:", displayedSymbols[0]);
        jackpockVerify = true
        goodResultSFX.play()
      } else if (!jackpockVerify){
        console.log("No match, try again.");
        jackpockVerify = true
        ohDangIt.play()
      }
    });
  }
