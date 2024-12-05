// Add an event listener to the document to detect clicks
document.addEventListener("click", (event) => {
    console.log("CLICK")
    // Create a new div element
    const square = document.createElement("div");

    // Add the 'square' class to the div
    square.classList.add("square");

    // Position the square at the click location
    square.style.left = `${event.clientX - 25}px`;
    square.style.top = `${event.clientY - 25}px`;

    // Append the square to the body
    document.body.appendChild(square);
    // Remove the square after 10 seconds
    setTimeout(() => {
        square.remove();
    }, 10000);
});