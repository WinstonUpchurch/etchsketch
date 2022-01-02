//set names
const container = document.getElementById('container');




//creates n rows
function makeCols(n) {
for(i = 0; i < n; i++){
    const column = document.createElement('div');
    column.className = 'column';
    container.appendChild(column)
}
}

//makes n cells, appends to col
function makeCells(n){
    for(let i = 0; i < cols.length; i++) {
        for(let i = 0; i < n; i++) {
            const cell = document.createElement('div');
            cols[i].appendChild(cell).className = 'cell';
        }
}
}
//post function grouping variables
let cols = container.getElementsByClassName('column');
let cells = container.getElementsByClassName('cell');
let cellsTest = document.querySelectorAll('.cell');

//make a 16x16 grid
function defaultGrid(){
    makeCols(16);
    makeCells(16);
}
//make a n x n grid
function test(n, i) {
    makeCols(n);
    makeCells(i);
}
//for mouseover event listener. switch bgcolor of cells 
let draw = function(){
    cells[this].style.backgroundColor = 'black';
}
function prep() {
    for(i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function(){this.style.backgroundColor = 'black'})
    }
}
