
function createGrid(container, tileNumbySide, tileDimension) {

    for(let i=0; i<Math.pow(tileNumbySide,2); i++) {
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
        tile.addEventListener("mouseover", () => {hoveringEffect(tile);
        });
    });
}

function hoveringEffect(tile){
    tile.classList.add("hovered-tile");
}

function calculateTileDim(totalGridwidht,tileNumbySide, gapBtwTiles) {
    let onetileWidht = totalGridwidht/tileNumbySide;
    return onetileWidht
}


function main() {

    const totalGridwidht = 500;
    const tileNumbySide = 10; //this means there will be 16x16 of grid


    const container = document.querySelector(".container");
    const tileDimension = calculateTileDim(totalGridwidht, tileNumbySide);
    createGrid(container, tileNumbySide, tileDimension);
    applyHoveringEffect(container, hoveringEffect);

}

main();