
const phones = [
  { name: "Samsung S24 Ultra", img: "https://i.ibb.co/JwgQjH5/s24-ultra.jpg" },
  { name: "Xiaomi 14T", img: "https://i.ibb.co/vvZtNmw/xiaomi-14t.jpg" },
  { name: "iPhone 16 Pro Max", img: "https://i.ibb.co/3m7dsXL/iphone-16-pro-max.jpg" }
];

const productsEl = document.getElementById("products");
const modal = document.getElementById("modal");
const phoneNameEl = document.getElementById("phoneName");
const success = document.getElementById("success");
const confettiCanvas = document.getElementById("confetti");

phones.forEach(phone => {
  const div = document.createElement("div");
  div.className = "product";
  div.innerHTML = `<img src="${phone.img}" alt="${phone.name}"/><p>${phone.name}</p><div class='btn'>Quick ORDER</div>`;
  div.onclick = () => {
    phoneNameEl.textContent = phone.name;
    modal.style.display = "flex";
  };
  productsEl.appendChild(div);
});

function order() {
  modal.style.display = "none";
  success.style.display = "flex";
  fireConfetti();
  setTimeout(() => success.style.display = "none", 4000);
}

function fireConfetti() {
  const ctx = confettiCanvas.getContext("2d");
  confettiCanvas.width = window.innerWidth;
  confettiCanvas.height = window.innerHeight;
  const confetti = [];
  for (let i = 0; i < 100; i++) {
    confetti.push({
      x: Math.random() * confettiCanvas.width,
      y: Math.random() * confettiCanvas.height,
      r: Math.random() * 6 + 3,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random()*360},100%,50%)`
    });
  }
  const animate = () => {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d;
    });
    requestAnimationFrame(animate);
  };
  animate();
}
