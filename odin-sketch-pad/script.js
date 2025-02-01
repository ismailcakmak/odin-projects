
function createGrid(container, tileNumbySide, tileDimension) {

    for(let i=0; i<Math.pow(tileNumbySide,2); i++) {
        const tile = document.createElement("div");

        tile.classList.add("tile");
        tile.style.height=`${tileDimension}px`;
        tile.style.width=`${tileDimension}px`;

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

function calculateTileDim(totalGridwidht,tileNumbySide, gapBtwTiles) {

    let totalTileWidhtBySide = totalGridwidht-((tileNumbySide-1)*gapBtwTiles)
    let onetileWidht = totalTileWidhtBySide/tileNumbySide;

    return onetileWidht
}

function calculateGapBtwTiles(tileNumbySide){
    gapBtwTiles = (tileNumbySide>50) ? 0.5 : 1;
    return gapBtwTiles;
}

function main() {

    const totalGridwidht = 500;
    const tileNumbySide = 30; //this means there will be 16x16 of grid

    const gapBtwTiles = calculateGapBtwTiles(tileNumbySide);


    const tileDimension = calculateTileDim(totalGridwidht, tileNumbySide, gapBtwTiles);
    
    const container = document.querySelector(".container");
    container.style.gap = `${gapBtwTiles}px`;
    createGrid(container, tileNumbySide, tileDimension); //this always add to .container div 
    applyHoveringEffect(hoveringEffect);

}

main();