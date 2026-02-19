const box = document.getElementById("box");
const button = document.getElementById("toggleBtn");

button.addEventListener("click", () => {
  box.classList.toggle("active");

  if (box.classList.contains("active")) {
    box.textContent = "ON";
  } else {
    box.textContent = "OFF";
  }
});
