//set names
const container = document.getElementById('container');
let cols = container.getElementsByClassName('column');
//creates n rows
function makeCols(n) {
for(i = 0; i < n; i++){
    const column = document.createElement('column');
    column.className = 'column';
    container.appendChild(column)
}
}

//makes n cells, appends to col
function makeCells(){
    for(let i = 0; i < cols.length; i++) {
        for(let i = 0; i < 16; i++) {
            const cell = document.createElement('cell');
            cols[i].appendChild(cell).className = 'cell';
        }
}
}
function defaultGrid(){
    makeCols(16);
    makeCells(16);
}