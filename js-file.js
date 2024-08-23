
const size = 16
const boxSize = 50

const body = document.querySelector("body")

for (let i=0;i<size;i++) {

    const upperDiv = document.createElement("div")
    upperDiv.style.border = "solid blue"
    upperDiv.style.display = "flex"
    upperDiv.style.alignItems = "center"
    upperDiv.style.justifyContent = "space-between"
    upperDiv.style.boxSizing = "border-box"

    body.appendChild(upperDiv)

    for (let i=0;i<size;i++) {
        const lowerDiv = document.createElement("div")

        lowerDiv.style.height = `${boxSize}px`
        lowerDiv.style.width = `${boxSize}px`
        lowerDiv.style.border = "solid black"
        lowerDiv.style.boxSizing = "border-box"

        upperDiv.appendChild(lowerDiv)
    }

}

const allDiv = document.querySelectorAll("div")

// add all the styling to css and just toggle
// the class active 

// make the grid squares adapt to the size of the page
//  
