// Get Current date
function setDate() {
    document.getElementById("date").innerHTML = string(Date().getFullYear);
}

// This function gets the task from input
function getTODOs() {
    var todos = new Array;

    // this pulls the task that was saved in the web browser memory
    var todos_str = localStorage.getItem("todo");

    // If the input is not null then JSON.parse will communicate with the web browser to make the task a JavaScript object
    if (todos_str !== null) {
        todos = JSON.parse(todos_str);
    }
    return todos;
}

// This function adds the inputed task to the get_todos function array
function add() {
    var task =document.getElementById("task").value;

    var todos = getTODOs();
    // This adds a new task the end of the array
    todos.push(task);
    // This converts the task input to a JSON string
    localStorage.setItem('todo', JSON.stringify(todos));
    document.getElementById("task").value = "";
    show();

    return false;
}

// This function keeps the tasks permanetly displayed on the screen
function show() {
    var todos = getTODOs();

    // This sets up each tasks as an unordered list
    var html = '<ul>';
    // This displays a task to the list in the order that is it inputed
    for (var i = 0; i < todos.length; i++) {
        // this also displays the task as a list and creates the button with the "X"
        html += '<li>' + todos[i] + '<button class="remove" id="' + i + '">x</button</li>'
    };
    html += '</ul>';
    // This Displays the task as a list
    document.getElementById("todos").innerHTML = html;

    // gets removable classes
    var removable = document.getElementsByClassName('remove');
    for (var i = 0; i < removable.length; i++) {
        removable[i].addEventListener('click', remove);
    }
}

function remove() {
    var id = this.getAttribute('id');
    var todos = getTODOs();
    todos.splice(id, 1);
    localStorage.setItem('todo', JSON.stringify(todos));
    show();

    return false;
}

// this displays the inputed task when the 'Add Item' button is clicked
document.getElementById("add").addEventListener('click', add);
// this will keep the inputs displayed permanetly on the screen
show();

function displayCreator() {
    window.alert("This website was created by Toms Zalais on Septemeber 5th 2026")
}