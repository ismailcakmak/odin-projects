
function createGrid(container, gridSize, tileDimension) {

    for(let i=0; i<Math.pow(gridSize,2); i++) {
        const tile = document.createElement("div");

        tile.classList.add("tile");
        tile.style.height=`${tileDimension}px`;
        tile.style.width=`${tileDimension}px`;

        container.appendChild(tile);
    }
}

function applyHoveringEffect(container, hoveringEffect){

    const tileList = container.querySelectorAll("div");

    tileList.forEach((tile)=>{
        tile.addEventListener("mouseover",(event)=>{hoveringEffect(tile)});
    });
}

function hoveringEffect(tile){
    //tile.classList.add("hovered-tile");
    updateColor(tile,tileColor);
}

function calculateTileDim(totalGridwidht,gridSize, gapBtwTiles) {
    let onetileWidht = totalGridwidht/gridSize;
    return onetileWidht
}

function cleanGrid(container){
    while (container.firstChild) {
        container.removeChild(container.firstChild);
    }
}

function renderGrid(container, totalGridwidht, gridSize){

    let tileDimension = calculateTileDim(totalGridwidht, gridSize);

    cleanGrid(container);
    createGrid(container, gridSize, tileDimension);
    applyHoveringEffect(container, hoveringEffect);
}


function gridSizerCallback() {

    let targetGridSize = 0;
    do {
        targetGridSize = Number(prompt("New grid size eg:16 = 16x16 (must be <100): ", "16"));            
    } while (targetGridSize>100 || targetGridSize<0);

    renderGrid(container,totalGridwidht, targetGridSize);    
}


function colorUpdaterCallback(event) {
    tileColor = event.target.value;
}

function updateColor(element, color){
    element.style.backgroundColor = `${color}`;
}


let tileColor = "#FFBF00"; //fav color of Elif

/** parameters */
const totalGridwidht = 500;
const gridSize = 10; //this means there will be 16x16 of grid


/** main container that grid will be created in */
const container = document.querySelector(".container");
const btn = document.querySelector(".btn");
const colorPicker = document.querySelector(".color-picker");


function main() {
    /** event listeners */
    btn.addEventListener("click", gridSizerCallback);

    colorPicker.value = tileColor;
    colorPicker.addEventListener("input", colorUpdaterCallback);
    
    renderGrid(container, totalGridwidht, gridSize);
}

main();