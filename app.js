const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");
const todoList = document.querySelector("#todo-list");

let todos = [];

const storageKey = "todos";

function savageTodos() {
  localStorage.setItem(storageKey, JSON.stringify(todos));
}
function loadTodos() {
  const storedTodos = localStorage.getItem(storageKey);
  if (!storedTodos) return [];
  try {
    return JSON.parse(storedTodos);
  } catch (e) {
    return [];
  }
}

todos = loadTodos();
renderTodos();

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const todoText = todoInput.value.trim();
  if (todoText == "") return;
  const todo = {
    id: Date.now(),
    text: todoText,
    done: false,
  };
  todos.push(todo);
  todoInput.value = "";
  renderTodos();
});

todoList.addEventListener("click", function (e) {
  if (e.target.tagName === "I") {
    const li = e.target.parentElement;
    const index = Array.from(todoList.children).indexOf(li);
    todos.splice(index, 1);
    renderTodos();
  } else if (e.target.tagName === "INPUT") {
    const li = e.target.parentElement;
    const index = Array.from(todoList.children).indexOf(li);
    todos[index].done = e.target.checked;
    savageTodos();
  }
});

function renderTodos() {
  todoList.innerHTML = "";
  todos.forEach(function (todo) {
    let li = document.createElement("li");
    let checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.done;
    let span = document.createElement("span");
    span.textContent = todo.text;
    let deleteBtn = document.createElement("i");
    deleteBtn.textContent = "x";
    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
  savageTodos();
}
