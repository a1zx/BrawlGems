const productList = document.getElementById("product-list");
const modal = document.getElementById("modal");
const modalTitle = document.getElementById("modal-title");
const modalImg = document.getElementById("modal-img");
const success = document.getElementById("success");
const confettiCanvas = document.getElementById("confetti");

phones.forEach(phone => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${phone.img}" alt="${phone.name}">
    <h3>${phone.name}</h3>
    <button class="order-btn">Order</button>
  `;
  card.querySelector("button").onclick = () => {
    modalTitle.textContent = phone.name;
    modalImg.src = phone.img;
    modal.style.display = "flex";
  };
  productList.appendChild(card);
});

function order() {
  modal.style.display = "none";
  success.style.display = "flex";
  fireConfetti();
  setTimeout(() => success.style.display = "none", 3500);
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
      r: Math.random() * 6 + 2,
      d: Math.random() * 2 + 1,
      color: `hsl(${Math.random()*360},100%,50%)`
    });
  }
  function animate() {
    ctx.clearRect(0, 0, confettiCanvas.width, confettiCanvas.height);
    confetti.forEach(c => {
      ctx.beginPath();
      ctx.arc(c.x, c.y, c.r, 0, Math.PI*2);
      ctx.fillStyle = c.color;
      ctx.fill();
      c.y += c.d;
    });
    requestAnimationFrame(animate);
  }
  animate();
}
