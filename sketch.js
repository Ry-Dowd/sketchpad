const main = document.getElementById("husk")

let i = 0
while (i<(256)){
    let box = document.createElement("div")
    box.setAttribute("class", "gridbox")
    main.appendChild(box)
    i++
}
