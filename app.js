const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

let todos = [];

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  let todoText = todoInput.value.trim();
  if (todoText == "") return;
  todos.push(todoText);
  renderTodos();
  todoInput.value = "";
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    let span = document.createElement("span");
    span.textContent = todo;
    let deleteBtn = document.createElement("i");
    deleteBtn.textContent = "x";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}
