'use strict';

const elemTogglefunc = function (elem) { elem.classList.toggle("active"); }

// navbar toggle

const navbar = document.querySelector("[data-navbar]");
const overlay = document.querySelector("[data-overlay]");
const navCloseBtn = document.querySelector("[data-nav-close-btn]");
const navOpenBtn = document.querySelector("[data-nav-open-btn]");
const navbarLink =document.querySelectorAll("[data-nav-link]");

const navElemArr = [overlay, navCloseBtn, navOpenBtn];

// close navbar when on click 
for (let i = 0; i < navbarLink.length; i++) { navElemArr.push(navbarLink[i]);}

// add event on all element for toggle  navbar

for  (let i = 0; i < navElemArr.length; i++){
    navElemArr[i].addEventListener("click", function () {
    elemTogglefunc(navbar);
    elemTogglefunc(overlay);
    });
}


// Header active state

const header = document.querySelector("[data-header]");

window.addEventListener("scroll", function () {
     this.window.scrollY > 400 ? header.classList.add("active")
     :  header.classList.remove("active");
});