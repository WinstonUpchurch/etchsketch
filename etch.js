const container = document.getElementById('container');
function gwid() {
for(i = 0; i < 16; i++){
    const column = document.createElement('column');
    column.className = 'column';
    container.appendChild(column)
}
}
const col = container.querySelector('column')
let cols = container.childNodes;

function fillNodes(){
    for(i = 0; i < 16; i++) {
    const node = document.createElement('node');
    node.classname = 'node';
    col.appendChild(node)
}
}
