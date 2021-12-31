const container = document.getElementById('container');
function gwid() {
for(i = 0; i < 16; i++){
    const column = document.createElement('column');
    column.className = 'column';
    container.appendChild(column)
}
}
const column = container.querySelector('column')
let cols = container.childNodes;

function fillCells(){
    for(i = 0; i < 16; i++) {
    const cell = document.createElement('cell');
    cell.className = 'cell';
    container.appendChild(cell)
}
}
