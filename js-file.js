
const defaultSize = 16
const boxSize = 50


function createGrid(size) {
    for (let i=0;i<size;i++) {

        const body = document.querySelector("body")
        const upperDiv = document.createElement("div")
        upperDiv.classList.toggle("upperDiv")
    
        body.appendChild(upperDiv)
    
        for (let i=0;i<size;i++) {
            const lowerDiv = document.createElement("div")
    
            lowerDiv.classList.toggle("lowerDiv")
            lowerDiv.style.height = `${boxSize}px`
            lowerDiv.style.width = `${boxSize}px`
    
            upperDiv.appendChild(lowerDiv)
        }
    
    }
}

function removeGrid () {
    var allDiv = document.querySelectorAll("div")
    for (var element of allDiv) {
        if (element.getAttribute('id') == "container") {
            continue
        }
        else{
            const parentElement = element.parentElement
            parentElement.removeChild(element)}
    }
}


const gridButton = document.querySelector("button")
gridButton.addEventListener("click", () => {
    let gridNumber = prompt("Enter the grid size: ");
    gridNumber = parseInt(gridNumber);

    if (!isNaN(gridNumber)) { 
        removeGrid();
        createGrid(gridNumber);
        allLowerDiv = document.querySelectorAll("div>div")
        opacityAdder()
    } else {
        alert("Please enter a valid number!");
    }
});


createGrid(defaultSize)
var allLowerDiv = document.querySelectorAll("div>div")
opacityAdder()

function opacityAdder() {
    allLowerDiv.forEach( (item) => {
        item.addEventListener("mouseenter", () => {
            let currentOpacity = parseFloat(item.style.opacity) || 0; 
            currentOpacity += 0.1;
            if (currentOpacity > 1) { currentOpacity = 1; }
            item.style.opacity = currentOpacity;
            if (!item.classList.contains("etch")) {
                item.classList.add("etch"); }
    });
});

}






