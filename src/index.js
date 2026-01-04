// src/index.js
import "./styles.css";
import homePage from "./home.js";
import menuPage from "./menu.js";
import aboutPage from "./about.js";

const content = document.querySelector("#content");
const homeBtn = document.querySelector("#home");
const menuBtn = document.querySelector("#menu");
const aboutBtn = document.querySelector("#about");

homePage();

function clear(){
    content.innerHTML = '';
}

homeBtn.addEventListener('click', () => {
    clear();
    homePage();
});

menuBtn.addEventListener('click', () => {
    clear();
    menuPage();
});


aboutBtn.addEventListener('click', () => {
    clear();
    aboutPage();
});

