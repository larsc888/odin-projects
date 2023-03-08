function debounce(func, wait = 20, immediate = true) {
    var timeout;
    return function() {
        var context = this, args = arguments;
        var later = function() {
        timeout = null;
        if (!immediate) func.apply(context, args);
        };
        var callNow = immediate && !timeout;
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
        if (callNow) func.apply(context, args);
    };
}

// Start My App Logic Here
let drag = false;
const gridElementEmptyColor = "#FFF";

function fillGridContainer(num=16) {
    const gridContainer = document.querySelector("#grid-container");
    // First Clear Gird Container
    gridContainer.innerHTML = "";
    // Now Fill Grid Container
    let numOfGrid = num * num;
    for (let i = 0; i < numOfGrid; i++) {
        let gridElement = document.createElement("div");
        gridElement.className = "grid-element";
        gridContainer.append(gridElement);
        gridElement.addEventListener("mousedown", () => drag = true);
        gridElement.addEventListener("mouseup", () => drag = false);
        gridElement.addEventListener("mousemove", debounce(setGridElement));
    }
    console.log(gridContainer.style);
    gridContainer.style["grid-template-columns"] = `repeat(${num}, 1fr)`
}

function setActiveButton(e) {
    const buttonList = document.querySelectorAll("#menu button.edit");
    buttonList.forEach(button => button.classList.remove("active"));
    this.classList.add("active");
}

function clearGrid() {
    let gridElements = document.querySelectorAll(".grid-element");
    gridElements.forEach(gridElement => {
        console.log(gridElement.style.backgroundColor);
        gridElement.style.backgroundColor = gridElementEmptyColor;
    });
}

function getColor(active) {
    let colorPicker = document.getElementById("color-picker");
    switch (active.id) {
        case "colorMode":
            return colorPicker.value;
        case "rainboxMode":
            const rainbowPallete = [
                "rgb(255, 0, 0)", 
                "rgb(255, 128, 0)", 
                "rgb(255, 255, 0)", 
                "rgb(0, 255, 0)", 
                "rgb(0, 255, 255)", 
                "rgb(0, 0, 255)", 
                "rgb(128, 0, 255)" 
            ];            
            let random = Math.floor(Math.random() * 7);
            return rainbowPallete[random];
        case "eraser":
            return gridElementEmptyColor;
    }
}

function setGridElement(e) {
    if (drag) {
        // Detect Which Buttons Are Active
        let active = document.querySelector("#menu button.active"); 
        let color = getColor(active);
        this.style.backgroundColor = color;
    }
}

function setSlider(e) {
    let sliderLabel = document.querySelector("#slider p");
    sliderLabel.textContent = `${this.value} x ${this.value}`;
    // sliderLabel.textContent
    fillGridContainer(this.value);
}

window.addEventListener("load", (event) => {
    // Fill grid container with 256 grids (16x16) (also sets the event lister for each grid)
    fillGridContainer();

    // Set default active button
    const activeButton = document.querySelector("#menu button");
    activeButton.classList.add("active");

    // Set active button event listener
    const buttonList = document.querySelectorAll("#menu button.edit");
    buttonList.forEach(button => button.addEventListener("click", setActiveButton));

    // Set clear button event listener
    const clearButton = document.getElementById("clear-grid");
    clearButton.addEventListener("click", clearGrid);

    // Set Slider
    const slider = document.getElementById("size-slider");
    slider.addEventListener("change", setSlider);
});