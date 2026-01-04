export default function homePage(){

let content = document.querySelector("#content");

content.appendChild(document.createElement("div")).classList.add("home-intro");

let homeIntro = document.querySelector(".home-intro");
homeIntro.appendChild(document.createElement("h1"));
homeIntro.appendChild(document.createElement("p"));

let homeIntroH1 = homeIntro.querySelector("h1");
homeIntroH1.innerText = "Empire Cafe";

let homeIntroP = homeIntro.querySelector("p");
homeIntroP.innerText = "Some text";

content.appendChild(document.createElement("div")).classList.add("home-hours");

let homeHours = document.querySelector(".home-hours");
homeHours.appendChild(document.createElement("ul")).classList.add("hours");
let hoursUl = homeHours.querySelector(".hours");

for(let i =0; i< 5; i++){
    const li = document.createElement("li");
    li.classList.add("hours__day");
    li.innerText = "Day: 8AM - 6PM";
    hoursUl.appendChild(li);
}
}