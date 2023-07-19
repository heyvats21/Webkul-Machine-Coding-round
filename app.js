// Selecting  elements from the index.html
const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

// to store the items
let todosList = [];

// function to add 
function addTodoItem(e) {
  e.preventDefault();
  const todoText = todoInput.value;
  const todo = {
    id: Date.now(),
    text: todoText,
    completed: false
  };

  todosList.push(todo);
  todoInput.value = "";

  renderTodoList();
}

// to remove 
function removeTodoItem(id) {
  todosList = todosList.filter((todo) => todo.id !== id);

  renderTodoList();
}

// to render 
function renderTodoList() {
  todoList.innerHTML = "";

  todosList.forEach((todo) => {
    const listItem = document.createElement("li");

    if (todo.completed) {
      listItem.classList.add("completed");
    }

    const todoText = document.createElement("span");
    todoText.textContent = todo.text;

    // the remove button
    const removeButton = document.createElement("button");
    removeButton.textContent = "*";
    removeButton.addEventListener("click", () => removeTodoItem(todo.id));

    listItem.appendChild(todoText);
    listItem.appendChild(removeButton);

    // to append the list
    todoList.appendChild(listItem);
  });
}

// eventlistner to submit the form 
todoForm.addEventListener("submit", addTodoItem);
