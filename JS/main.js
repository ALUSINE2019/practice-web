"use strict";

const listEl = document.querySelector(".bi-list");
const ulEl = document.querySelector("#menu-ul");
const links = document.querySelectorAll('.js-link');


const menuFunction = function () {
  if (listEl) {
    listEl.classList.toggle("bi-x");
    ulEl.classList.toggle("hidden");
  }
};

listEl.addEventListener("click", menuFunction);




