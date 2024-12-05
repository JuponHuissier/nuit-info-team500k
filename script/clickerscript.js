// Add an event listener to the document to detect clicks
let spinning = false

document.addEventListener("click", (event) => {
    console.log("CLICK")
    const slotMachinePopupChance = 0
    if (Math.random() < slotMachinePopupChance && !spinning) {
        spinning = true
        console.log("GAMBLECORE")
        // Create a new div element
        const square = document.createElement("div");

        // Add the 'square' class to the div
        square.classList.add("square");

        // Position the square at the click location
        square.style.left = `${100 * event.clientX/screen.width - 15}vw`;
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
        document.body.appendChild(square);

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
  function logDisplayedSymbols() {
    const slots = document.querySelectorAll('.slot');
    const displayedSymbols = [];
    slots.forEach((slot, index) => {
      const symbols = slot.querySelector('.symbols');
      const symbolIndex = Math.floor(Math.abs(parseInt(symbols.style.top, 10)) / slot.clientHeight) % slotSymbols[index].length;
      const displayedSymbol = slotSymbols[index][symbolIndex];
      console.log(displayedSymbols);

      // Check if all displayed symbols are the same
      const allSame = displayedSymbols.every(symbol => symbol === displayedSymbols[0]);
      if (allSame && !jackpockVerify) {
        console.log("Jackpot! All symbols are the same:", displayedSymbols[0]);
        jackpockVerify = true
      } else if (!jackpockVerify){
        console.log("No match, try again.");
        jackpockVerify = true
      }
    });
  }
