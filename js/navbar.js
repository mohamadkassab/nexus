// search-box open close js code
let navbar = document.querySelector(".navbar");
let searchBox = document.querySelector(".search-box .bx-search");

// sidebar open close js code
let navLinks = document.querySelector(".nav-links");
let menuOpenBtn = document.querySelector(".navbar .bx-menu");
let menuCloseBtn = document.querySelector(".nav-links .bx-x");
menuOpenBtn.onclick = function() {
navLinks.style.right = "0";
}
menuCloseBtn.onclick = function() {
navLinks.style.right = "-100%";
}

let jsArrows = document.querySelectorAll(".js-arrow");

jsArrows.forEach(function(jsArrow) {
  jsArrow.onclick = function() {
    let navLinks = document.querySelector(".nav-links"); // Assuming navLinks is a single element
    navLinks.classList.toggle("show3");
  };
});