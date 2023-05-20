var button = document.querySelector(".btn");
var bodysel = document.querySelector("body")
var color = ["powderblue", "blue", "yellowgreen", "crimson", "grey", "lightgreen"]
bodysel.style.backgroundColor="violet";
    

button.addEventListener("click", changeColor)

function changeColor() {
        
    let num= Math.floor(Math.random()*color.length);
    let colorSelect = color[num];
    console.log(colorSelect)
        
    
    bodysel.style.backgroundColor=colorSelect

}