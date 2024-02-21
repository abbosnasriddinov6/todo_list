// Select elements
var btnSubmit = document.querySelector('.todo-btn');
var inputTodo = document.querySelector('.todo-input');
var formTodo = document.querySelector('.todo-form');
var todoList = document.querySelector('.todo-list');
var btnDeleteAll = document.querySelector('.todo-delete-all');
// 2 HANDLE SUBMIT FN
var handleSubmit = function (e) {
    e.preventDefault();
    // NEW TODO OBJ
    var newTodo = {
        id: Date.now(),
        todo: inputTodo.value,
        completed: false
    };
    // console.log(newTodo);
    // TODO: SAVE TODO TO LOCAL STORAGE
    todos.push(newTodo);
    // localStorage.setItem('todos', JSON.stringify(todos));
    saveTodos();
    // APPEND TODO FN
    appendTodo(newTodo);
    // RESET INPUT VALUE
    inputTodo.value = '';
};
;
// 5 TODOS ARRAY
var todos = JSON.parse(localStorage.getItem('todos') || '[]');
console.log(todos);
// 6 APPEND TODOS TO DOM
window.addEventListener('DOMContentLoaded', function () {
    todos.forEach(function (todo) { return appendTodo(todo); });
});
// 6 SAVE FN
var saveTodos = function () {
    localStorage.setItem('todos', JSON.stringify(todos));
};
// 3 APPEND TODO FN
var appendTodo = function (newTodo) {
    // APPEND NEW TODO TO THE DOM
    // Create new LI and Checkbox
    var newLi = document.createElement('li');
    var checkB = document.createElement('input');
    checkB.type = 'checkbox';
    checkB.checked = newTodo.completed;
    // ADD CHECKBOX EVENT LISTENER
    checkB.onchange = function () {
        console.log(checkB.checked);
        newTodo.completed = checkB.checked;
        // SAVE CHANGES TO LOCAL STORAGE
        saveTodos();
    };
    newLi.append(newTodo.todo, checkB);
    todoList === null || todoList === void 0 ? void 0 : todoList.prepend(newLi);
};
// 1 ADD FORM EVENT LISTENER
formTodo.addEventListener('submit', function (e) { return handleSubmit(e); });
// 7 DELETE ALL TODOS
var clearTodos = function () {
    todos.length = 0;
    saveTodos();
    todoList.innerHTML = '';
};
btnDeleteAll.onclick = function () { return clearTodos(); };
