/*
    Hints: 
    1. Attach click event handlers to all four of the 
       buttons (#default, #ocean, #desert, and #high-contrast).
    2. Modify the className property of the body tag 
       based on the button that was clicked.
*/

const changeColor = (e) => {
  document.querySelector("body").className = "container " + e.target.id;
};

document.querySelector("#default").addEventListener("click", changeColor);
document.querySelector("#ocean").addEventListener("click", changeColor);
document.querySelector("#desert").addEventListener("click", changeColor);
document.querySelector("#high-contrast").addEventListener("click", changeColor);
