
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

function calculateTileDim(totalGridwidht,tileNumbySide) {

    let onetileWidht = totalGridwidht/tileNumbySide;

    return onetileWidht
}

function main() {

    /* parameters */
    const totalGridwidht = 500;
    const tileNumbySide = 34;

    /** this is the main container we are going to add the tiles*/
    const container = document.querySelector(".container");

    const tileDimension = calculateTileDim(totalGridwidht, tileNumbySide);
    createGrid(container, tileNumbySide, tileDimension); //this always add to .container div 
    applyHoveringEffect(hoveringEffect);

}

main();