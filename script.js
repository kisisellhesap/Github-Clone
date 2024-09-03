const bg = document.querySelector(".active-bg");
const navLeft = document.querySelector(".nav-left");
const navRight = document.querySelector(".nav-right");
const leftOpenIcon = document.querySelector("#h-left-menu");
const rightOpenIcon = document.querySelector("#h-right-menu");

const hLeftcloseMenu = document.querySelector("#h-left-close-menu");
const hRightcloseMenu = document.querySelector("#h-right-close-menu");

const mlDot = document.querySelector(".ml-dot");
const resBar = document.querySelector(".res-bar");
bg.addEventListener("click", function () {
  if (navLeft.classList.contains("active-nav")) {
    navLeft.classList.remove("active-nav");
    bg.classList.remove("active-bg-active");
    document.querySelector("body").classList.remove("body-scrollbar");
  } else if (navRight.classList.contains("active-nav")) {
    navRight.classList.remove("active-nav");
    bg.classList.remove("active-bg-active");
    document.querySelector("body").classList.remove("body-scrollbar");
  } else {
  }
});

leftOpenIcon.addEventListener("click", function () {
  navLeft.classList.add("active-nav");
  bg.classList.add("active-bg-active");
  document.querySelector("body").classList.add("body-scrollbar");
});

hLeftcloseMenu.addEventListener("click", function () {
  navLeft.classList.remove("active-nav");
  bg.classList.remove("active-bg-active");
  document.querySelector("body").classList.remove("body-scrollbar");
});

rightOpenIcon.addEventListener("click", function () {
  navRight.classList.add("active-nav");
  bg.classList.add("active-bg-active");
  document.querySelector("body").classList.add("body-scrollbar");
});

hRightcloseMenu.addEventListener("click", function () {
  navRight.classList.remove("active-nav");
  bg.classList.remove("active-bg-active");
  document.querySelector("body").classList.remove("body-scrollbar");
});

mlDot.addEventListener("click", function () {
  resBar.classList.toggle("active-res-bar");
});
document.addEventListener("DOMContentLoaded", function () {
  fetch("READMEE.md")
    .then((response) => response.text())
    .then((text) => {
      var converter = new showdown.Converter();
      var html = converter.makeHtml(text);
      document.getElementById("readme-content").innerHTML = html;
    });
});
