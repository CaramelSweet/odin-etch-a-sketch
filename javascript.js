// Define variables for event listeners 
const container = document.querySelector("#container");
const button = document.querySelector("#gridSizeButton");

// Create grid
function createGrid(gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const gridBox = document.createElement("div");
        const squareSize = 100 / gridSize + "%";
        gridBox.classList.add("square");
        gridBox.style.width = squareSize;
        container.appendChild(gridBox);
    }
}

// Check if user input is valid
function isValidInput(input) {
    const num = Number(input)

    if (!Number.isInteger(num))  {
        return false;
    }

    if (num >= 1 && num <= 100) {
        return true;
    } else {
        return false;
    }
}

// Prompt the user for input
function promptUser(message) {
    let input = prompt(message, "1-100");

    if (input == null) return null;

    if (isValidInput(input)) {
        return input;
    } else {
        return promptUser("Invalid input, please enter a whole number between 1 and 100:");
    }
}

// Change color on hover
container.addEventListener("mouseover", (event) => {
    if (event.target.hasAttribute("class", "square")) {
        event.target.classList.add("filled");
    }
});

// Listen for button event
button.addEventListener("click", () => {
    let input = promptUser("Enter a whole number between 1 and 100:");
    if (input == null) {
        return;
    } else {
        container.replaceChildren();
        createGrid(input);
    }
});

// Default grid size
createGrid(16);


