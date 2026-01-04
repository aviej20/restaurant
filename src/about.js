export default function aboutPage(){
    
    const content = document.querySelector("#content");
    content.appendChild(document.createElement("div")).classList.add("menu-wrapper");

    let div = document.querySelector(".menu-wrapper");
    div.innerHTML = `
        <h1>About Us</h1>
        <p>Stuff</p>
    `;

    content.appendChild(div);
}