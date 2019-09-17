const main = document.getElementById("husk")

function build(n) {
    let blocks = n**2
    let width = 100/blocks
    let percent = (toString(width) + "%")
    for(i=0; i<blocks; i++){
        let box = document.createElement("div")
        box.setAttribute("class", "gridbox")

    }
}

let i = 0
while (i<(1600)){
    let box = document.createElement("div")
    box.setAttribute("class", "gridbox")
    main.appendChild(box)
    i++
}
let boxes = document.getElementsByClassName("gridbox")
let boxarray = []
boxarray = [...boxes]

// console.log(boxarray)

// gridbox.onmouseover = function(){
//     self.style.background = green
// }
