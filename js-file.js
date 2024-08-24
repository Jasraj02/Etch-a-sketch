
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
        const parentElement = element.parentElement
        parentElement.removeChild(element)
    }
}


createGrid(defaultSize)
const allDiv = document.querySelectorAll("div")

const gridButton = document.querySelector("button")

gridButton.addEventListener("click", () => {
    const gridNumber = prompt("Enter the grid size: ")
    gridNumber = Number(gridNumber)
    removeGrid()
    createGrid(gridNumber)
})

