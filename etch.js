const container = document.getElementById('container');

for(i = 0; i < 16; i++){
    const column = document.createElement(column);
    column.className = 'column'
    document.container.appendChild(column)
}

function makeGrid(n){
    const columns = container.querySelectorAll(column);
    const columnCount = columns.length;
    function fillNodes(columnCount){
        for(i = 0; i < columnCount; i++)
        node = document.createElement(node);
        node.classname = 'node';
        container.getElementsByClassName('column').appendchild(node)
    }
    columns.forEach(fillNodes())
}