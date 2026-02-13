const container = document.getElementById("container");

// Set grid size
const gridSize = 16;

// Create divs for grid
for (let i = 1; i <= gridSize * gridSize; i++) {
    const gridBox = document.createElement("div");
    gridBox.setAttribute("class", "square");
    container.appendChild(gridBox);
}

const containerSize = gridSize * 32 + "px";
container.style.width = containerSize;

// Change color on hover
container.addEventListener("mouseover", (event) => {
    if (event.target.hasAttribute("class", "square")) {
        event.target.setAttribute("class", "square filled");
    }
});