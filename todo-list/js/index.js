const form = document.getElementById("form");
const input = document.getElementById("input");
const todosUL = document.getElementById("todos");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  addTodo();
});

function addTodo(todo) {
  let todoText = input.value;

  if (todo) {
    todoText = todo.text;
  }

  if (todoText) {
    const todoEl = document.createElement("li");
    if (todo && todo.completed) {
      todoEl.classList.add("completed");
    } 

    todoEl.innerText = todoText;

    todosUL.appendChild(todoEl);

    input.value = "";
  }
}

//https://gale.udemy.com/course/the-complete-web-development-bootcamp/learn/lecture/12384340#overview