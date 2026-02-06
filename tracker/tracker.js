const form = document.getElementById("expense-form");
const titleInput = document.getElementById("title");
const amountInput = document.getElementById("amount");
const expenseList = document.getElementById("expense-list");
const totalAmount = document.getElementById("total");

let expenses = JSON.parse(localStorage.getItem("expenses")) || [];


renderExpenses();

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const title = titleInput.value.trim();
  const amount = Number(amountInput.value);

  if (title === "" || amount <= 0) {
    alert("Please enter valid data");
    return;
  }

  const expense = {
    id: Date.now(),
    title,
    amount,
  };

  expenses.push(expense);
  saveAndRender();

  titleInput.value = "";
  amountInput.value = "";
});

function renderExpenses() {
  expenseList.innerHTML = "";
  let total = 0;

  expenses.forEach((expense) => {
    total += expense.amount;

    const li = document.createElement("li");
    li.innerHTML = `
      ${expense.title} - ₹${expense.amount}
 <i class="fa-solid fa-trash" onclick="deleteExpense(${expense.id})"></i>

    `;
    expenseList.appendChild(li);
  });

  totalAmount.innerText = total;
}

function deleteExpense(id) {
  expenses = expenses.filter((expense) => expense.id !== id);
  saveAndRender();
}

function saveAndRender() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
  renderExpenses();
}
