//set names
const container = document.getElementById('container');
//grouping variables
let cols = container.getElementsByClassName('column');
let cells = container.getElementsByClassName('cell');

//creates (n) rows
function makeCols(n) {
for(i = 0; i < n; i++){
    const column = document.createElement('div');
    column.className = 'column';
    container.appendChild(column)
}
}

//makes n cells, appends cells to columns
function makeCells(n){
    for(let i = 0; i < cols.length; i++) {
        for(let i = 0; i < n; i++) {
            const cell = document.createElement('div');
            cols[i].appendChild(cell).className = 'cell';
        }
}
}

//make a 16x16 grid
function defaultGrid(){
    makeCols(16);
    makeCells(16);
}
//makes a grid taking user input via prompt, then checks validty of input, then creates divs. finally preps divs for etching. 
function customGrid() {
    let userInput = prompt('Enter an even number between 16-100');
    // conditional call of reset if a grid is already present and the customGrid is called again
    if(container.firstChild){
        reset(container)
    } else return
    //check that users input is valid
    if (userInput > 100) {
        alert('please enter a value less than 101')
    } else if (userInput < 16) {
        alert('please enter a value over 15')
    } else {
        makeCols(userInput);
        makeCells(userInput);
    }
    //adds event listeners to cells.
    prep();
}
    

//for mouseover event listener. switch bgcolor of cells 
let draw = function(){
    cells[this].style.backgroundColor = 'black';
}
//prep is ran on creation of the grid assigning each cell the eventlistener
function prep() {
    for(i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function(){
            this.style.backgroundColor = 'black';
        });
    }
}
//funky mode
function randInt(max) {
    return Math.floor(Math.random() * max);
}
let int = randInt(255)
function crazy() {
    let R = randInt(255);
    let G = randInt(255);
    let B = randInt(255);
    let A = randInt(255);
    for(i = 0; i < cells.length; i++) {
        cells[i].addEventListener('mouseover', function(){
            randInt(255)
            this.style.backgroundColor = `rgba(${R}, ${G}, ${B}, ${A})`;
        });
    }
}

//reset grid function
function reset(parent) {
    while (parent.firstChild) {
        parent.removeChild(parent.firstChild)
    }
}
