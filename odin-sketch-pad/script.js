
createGrid(container, tileNumbySide){
    
    for(let i=0; i<tileNumbySide; i++) {
        const tile = document.createElement("div");
        tile.classList.add("tile");
        container.appendChild(tile);
    }
}


function main() {
    const container = document.querySelector(".container");
    const tileNumbySide = 16; //this means there will be 16x16 of grid
    createGrid(container, tileNumbySide); //this always add to .container div
}

main();