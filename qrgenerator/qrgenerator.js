const input = document.getElementById("qr-input");
const button = document.querySelector("button");
const span = document.querySelector("span");

let size = 200;
const STEP = 50;
const MIN = 100;
const MAX = 400;

span.style.display = "none";

const renderQR = () => {
  const text = input.value.trim();
  const url = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(text)}&bgcolor=2b2828&color=c9c8c8&margin=10`;

  span.innerHTML = `
    <i class="fa-solid fa-circle-minus" id="minus-btn"></i>
    <img src="${url}" alt="QR Code" width="${size}" height="${size}" style="display:block; border-radius: 5px;">
    <i class="fa-solid fa-circle-plus" id="plus-btn"></i>
  `;

  span.style.alignItems = "center";
  span.style.gap = "16px";
  span.style.padding = "16px";

  document.getElementById("minus-btn").addEventListener("click", () => {
    if (size > MIN) {
      size -= STEP;
      renderQR();
    }
  });

  document.getElementById("plus-btn").addEventListener("click", () => {
    if (size < MAX) {
      size += STEP;
      renderQR();
    }
  });
};

const generateQR = () => {
  const text = input.value.trim();

  if (!text) {
    span.style.display = "none";
    span.innerHTML = "";
    return;
  }

  renderQR();
  span.style.display = "flex";
};

button.addEventListener("click", generateQR);

input.addEventListener("keydown", (e) => {
  if (e.key === "Enter") generateQR();
});