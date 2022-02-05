const makeBigger = () => {
  const h1 = document.querySelector("h1");
  const p1 = document.querySelector("p");

  h1.style.fontSize =
    parseInt(window.getComputedStyle(h1).fontSize, 10) + 5 + "px";
  p1.style.fontSize =
    parseInt(window.getComputedStyle(p1).fontSize, 10) + 5 + "px";
};

const makeSmaller = () => {
  const h1 = document.querySelector("h1");
  const p1 = document.querySelector("p");

  h1.style.fontSize =
    parseInt(window.getComputedStyle(h1).fontSize, 10) - 5 + "px";
  p1.style.fontSize =
    parseInt(window.getComputedStyle(p1).fontSize, 10) - 5 + "px";
};

document.querySelector("#a1").addEventListener("click", makeBigger);
document.querySelector("#a2").addEventListener("click", makeSmaller);
