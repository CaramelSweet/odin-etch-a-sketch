// Create grid function
function createGrid (gridSize) {
    for (let i = 1; i <= gridSize * gridSize; i++) {
        const gridBox = document.createElement("div");
        const squareSize = 100 / gridSize + "%";
        gridBox.classList.add("square");
        gridBox.style.width = squareSize;
        container.appendChild(gridBox);
    }
}

// Check if use input is valid
function isValidInput (input) {
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

// Define variables for event listeners 
const container = document.getElementById("container");
const button = document.getElementById("gridSizeButton");

// Change color on hover
container.addEventListener("mouseover", (event) => {
    if (event.target.hasAttribute("class", "square")) {
        event.target.classList.add("filled");
    }
});

// Default grid size
createGrid(16);

// Listen for button event
button.addEventListener("click", () => {
    container.replaceChildren();

    let gridSize = prompt("Enter grid size bewteen 1 and 100:", 16);

    if (isValidInput(gridSize)) {
        createGrid(gridSize);
    } else {
        createGrid(16);
    }
});


