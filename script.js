const loveButton = document.getElementById("loveButton");
const message = document.getElementById("message");
const letterMonkey = document.getElementById("letterMonkey");

loveButton.addEventListener("click", () => {
  message.classList.toggle("show");
  letterMonkey.classList.toggle("show");
  makeHeart();
});

const surpriseBtn = document.getElementById("surpriseBtn");
const surpriseText = document.getElementById("surpriseText");
const heroMonkey = document.getElementById("heroMonkey");
const boomEffect = document.getElementById("boomEffect");

surpriseBtn.addEventListener("click", () => {
  surpriseText.classList.toggle("show");
  heroMonkey.classList.toggle("show");
  boomEffect.classList.remove("show");

  setTimeout(() => {
    boomEffect.classList.add("show");
  }, 10);

  makeHeart();
});

const revealElements = document.querySelectorAll(".reveal");

function revealOnScroll() {
  revealElements.forEach((element) => {
    const elementTop = element.getBoundingClientRect().top;

    if (elementTop < window.innerHeight - 90) {
      element.classList.add("visible");
    }
  });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);

const funnyPhotos = [
  {
    image: "images/film5.jpg",
    title: "коли ти дуже serious girl",
    caption: "мені це подобається"
  },
  {
    image: "images/film6.jpg",
    title: "коли ти дуже мила",
    caption: "з'являється посмішка"
  },
  {
    image: "images/film7.jpg",
    title: "коли ти дуже смішна",
    caption: "стає спокійно на душі"
  },
  {
    image: "images/film8.jpg",
    title: "коли ти вредна",
    caption: "ти все рівно моя найкраща"
  }
];

let currentFunny = 0;

const funnyPhoto = document.getElementById("funnyPhoto");
const funnyTitle = document.getElementById("funnyTitle");
const funnyCaption = document.getElementById("funnyCaption");
const prevFunny = document.getElementById("prevFunny");
const nextFunny = document.getElementById("nextFunny");

function showFunnyPhoto() {
  funnyPhoto.style.opacity = "0";
  funnyPhoto.style.transform = "scale(0.95)";

  setTimeout(() => {
    funnyPhoto.src = funnyPhotos[currentFunny].image;
    funnyTitle.textContent = funnyPhotos[currentFunny].title;
    funnyCaption.textContent = funnyPhotos[currentFunny].caption;

    funnyPhoto.style.opacity = "1";
    funnyPhoto.style.transform = "scale(1)";
  }, 180);
}

nextFunny.addEventListener("click", () => {
  currentFunny++;

  if (currentFunny >= funnyPhotos.length) {
    currentFunny = 0;
  }

  showFunnyPhoto();
  makeHeart();
});

prevFunny.addEventListener("click", () => {
  currentFunny--;

  if (currentFunny < 0) {
    currentFunny = funnyPhotos.length - 1;
  }

  showFunnyPhoto();
  makeHeart();
});

function makeHeart() {
  const heart = document.createElement("div");
  heart.classList.add("floating-heart");
  heart.textContent = Math.random() > 0.5 ? "♡" : "♥";

  heart.style.left = Math.random() * window.innerWidth + "px";
  heart.style.top = window.innerHeight - 80 + "px";

  document.body.appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 1200);
}