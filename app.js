const todoInput = document.querySelector("#todo-input");
const todoForm = document.querySelector("#todo-form");

todoForm.addEventListener("submit", function (e) {
  e.preventDefault();
  console.log(todoInput.value);
});
