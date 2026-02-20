const todoInput = document.getElementById("todo-input");
const addBtn = document.getElementById("add-btn");
const todoList = document.getElementById("todo-list");

 
function addTodo() {
  const text = todoInput.value.trim();
  if (!text) return;

  
  const li = document.createElement("li");

 
  const span = document.createElement("span");
  span.textContent = text;

 
  const doneBtn = document.createElement("i");
  doneBtn.className = "fa-solid fa-check done";

   
  const deleteBtn = document.createElement("i");
  deleteBtn.className = "fa-solid fa-trash delete";

 
  span.addEventListener("dblclick", () => {
    const newText = prompt("Edit todo:", span.textContent);
    if (newText !== null && newText.trim() !== "") {
      span.textContent = newText.trim();
    }
  });
 
  doneBtn.addEventListener("click", () => {
    span.classList.toggle("completed");
  });

 
  deleteBtn.addEventListener("click", () => {
    li.remove();
  });

  li.append(span, doneBtn, deleteBtn);
  todoList.appendChild(li);

  todoInput.value = "";
}

 
addBtn.addEventListener("click", addTodo);

 
todoInput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    addTodo();
  }
});
