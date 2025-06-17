let cookieCount = 0;
let cursorCount = 0;
let cursorCost = 10;

const cookieDisplay = document.getElementById("cookieCount");
const cookieBtn = document.getElementById("cookieBtn");

const buyCursorBtn = document.getElementById("buyCursor");
const cursorCountDisplay = document.getElementById("cursorCount");
const cursorCostDisplay = document.getElementById("cursorCost");

cookieBtn.addEventListener("click", () => {
  cookieCount++;
  updateDisplay();
});

buyCursorBtn.addEventListener("click", () => {
  if (cookieCount >= cursorCost) {
    cookieCount -= cursorCost;
    cursorCount++;
    cursorCost = Math.floor(cursorCost * 1.5); // コスト上昇
    updateDisplay();
  }
});

function updateDisplay() {
  cookieDisplay.textContent = cookieCount;
  cursorCountDisplay.textContent = cursorCount;
  cursorCostDisplay.textContent = cursorCost;
}

// 自動的にクッキーを増やす
setInterval(() => {
  cookieCount += cursorCount;
  updateDisplay();
}, 1000);
