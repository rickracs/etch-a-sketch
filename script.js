


///////////////////////////////////////////////////0
/////////////////////SETTING UP GRID//////////////

const etchBox = document.querySelector(".etchbox");
const windowSize = 512;
var div;
var size = 32;
var box;

for (j = 0; j < size; j++) {
    for (i = 1; i <= size; i++) {
        div = document.createElement("div");
        div.style.width = windowSize/size + "px";
        div.style.height = windowSize/size + "px";
        div.setAttribute("class", "sketch");
        div.setAttribute("id", i + j * size);
        etchBox.appendChild(div);
    }
}

const sketchBox = document.querySelectorAll(".sketch");

////////////////////////////////////////////////
//////////////COLORING///////////////////////


sketchBox.forEach(box => {
    box.addEventListener("mouseover", fillBox);
});

function fillBox(e) {
    e.srcElement.setAttribute("class", "colored");

}


////////////////////////////////////////
/////////////RESETTING GRID//////////



const resetButton = document.querySelector("#reset");

resetButton.addEventListener("click", resetGrid);

function resetGrid (e) {
    sketchBox.forEach(box => {
        box.removeAttribute("class", "colored");
    })
}
