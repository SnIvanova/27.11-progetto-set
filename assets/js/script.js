
const SCROLL_POSITION_EVENT = 400;
const NAVBAR_COLOR_CHANGE_POSITION = 295;
const HEADER_COLOR_CHANGE_POSITION = 364;


const startedButtonRef = document.getElementById('startedButton');
const header = document.querySelector("header");
const getStarted = document.querySelector("#get-started");


window.addEventListener('scroll', () => {
    startedButtonRef.classList.toggle('green-button', window.scrollY >= SCROLL_POSITION_EVENT);
    const top = window.scrollY;
    header.style.backgroundColor = top > NAVBAR_COLOR_CHANGE_POSITION ? "#fff" : "#ffc017";
    button.style.backgroundColor = top > NAVBAR_COLOR_CHANGE_POSITION ? "#1a8917" : "#191919";
});


window.addEventListener("scroll", () => {
    header.classList.toggle("white-bg", window.scrollY > HEADER_COLOR_CHANGE_POSITION);
    getStarted.classList.toggle("green-bg", window.scrollY > HEADER_COLOR_CHANGE_POSITION);
});


const allGroupElements = document.querySelectorAll("svg > g > g > g");

function toggleOpacity(element) {
  element.style.opacity = Math.round(Math.random());
}

function toggleM() {
  allGroupElements.forEach((groupElement) => {
    const randomTime = Math.round(Math.random() * 10000);
    setTimeout(() => toggleOpacity(groupElement), randomTime);
  });
}

function handleDOMContentLoaded() {
  toggleM();
  setInterval(toggleM, 10000);
}

document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);
