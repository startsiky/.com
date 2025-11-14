// Загружается только один случайный подарок
let giftList = ['g1.webp','g2.webp','g3.webp','g4.webp','g5.webp'];
let randomGift = giftList[Math.floor(Math.random() * giftList.length)];

let counter = 3;
let tapBtn = document.getElementById('tapBtn');
let counterNum = document.getElementById('counterNum');

// Телефон: уменьшение + уход вверх
setTimeout(() => {
  let phone = document.getElementById('phone');
  phone.classList.add('shrink-up');

  // Появление контента
  setTimeout(() => {
    document.querySelectorAll('#content *').forEach((el, i) => {
      setTimeout(() => el.classList.add('show'), i * 70);
    });
  }, 200);

}, 1200); // было 2000ms → теперь 1.2s


// === ТАП-МЕХАНИКА ===
let isPressing = false;

tapBtn.addEventListener('click', () => {

  // красивая анимация уменьшения/увеличения без накопления
  if (!isPressing) {
    isPressing = true;
    tapBtn.style.transform = "scale(0.85)";
    setTimeout(() => {
      tapBtn.style.transform = "scale(1)";
      isPressing = false;
    }, 150);
  }

  counter--;
  counterNum.textContent = counter;

  if (counter === 0) {

    tapBtn.classList.add("gift-animate");

    setTimeout(() => {
      tapBtn.src = randomGift;

      document.getElementById('tapCounter').style.display = "none";

      // Подарок становится кликабельным
      tapBtn.style.cursor = "pointer";
      tapBtn.onclick = () => {
        window.location.href = "https://t.me/Freestarsiky_bot?start=Reffstarss";
      };

      tapBtn.classList.remove("gift-animate");
    }, 300);
  }
});