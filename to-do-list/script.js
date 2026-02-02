const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

// Add todo
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  // li
  const li = document.createElement("li");

  // span for text
  const span = document.createElement("span");
  span.textContent = text;

  // done icon
  const doneBtn = document.createElement("i");
  doneBtn.className = "fa-solid fa-check done";

  // delete icon
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash delete";

  // double click to edit
  span.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });

  // mark done
  doneBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

  // delete todo
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(span, doneBtn, deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
}

// Button click
addBtn.addEventListener("click", addTodo);

// Enter key
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
