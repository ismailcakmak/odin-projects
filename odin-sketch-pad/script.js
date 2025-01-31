
function createGrid(container, tileNumbySide) {
    for(let i=0; i<Math.pow(tileNumbySide,2); i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}

function applyHoveringEffect(hoveringEffect){

    const tileList = document.querySelectorAll(".container div");

    tileList.forEach((tile)=>{
        tile.addEventListener("mouseover", () => {hoveringEffect(tile);
        });
    });
}

function hoveringEffect(tile){
    tile.classList.add("hovered-tile");
}

function main() {

    const tileNumbySide = 16; //this means there will be 16x16 of grid
    
    const container = document.querySelector(".container");
    createGrid(container, tileNumbySide); //this always add to .container div 
    applyHoveringEffect(hoveringEffect);

}

main();