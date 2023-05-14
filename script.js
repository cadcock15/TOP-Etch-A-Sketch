/**
 * The Odin Project
 * Etch A Sketch
 * @author: Christopher Adcock
 */


createGrid();

function createGrid() {
    const gridContainer = document.querySelector('#gridContainer');
    
    for(i=1;i<=16;i++) {
        let gridRowDiv = document.createElement("div");
        gridRowDiv.id = "row_" + i;
        gridRowDiv.classList.add("rowFlexbox");
        gridContainer.appendChild(gridRowDiv);
        for(j=1;j<=16;j++) {
            let gridColDiv = document.createElement("div");
            gridColDiv.id = "cell_r" + i + "c" + j;
            gridColDiv.classList.add("cells");
            gridRowDiv.appendChild(gridColDiv);
        }
    }
}

const cellsArray = document.querySelectorAll('div.cells');

/* Event Handlers
   ========================================================================== */

    cellsArray.forEach((cell) => {
        cell.addEventListener('mouseover', () => {
            cell.style.backgroundColor = "pink";
        });
        cell.addEventListener('mouseout', () => {
            
        });
        cell.addEventListener('click', () => {
            cell.style.backgroundColor = "purple";
        });
        
});