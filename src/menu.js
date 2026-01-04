export default function menuPage(){

    const content = document.querySelector("#content");
    content.appendChild(document.createElement("div")).classList.add("menu-wrapper");

    let div = document.querySelector(".menu-wrapper");
    div.innerHTML = `
        <ul>
            <li>Menu Item 1</li>
            <li>Menu Item 2</li>
            <li>Menu Item 3</li>
            <li>Menu Item 4</li>
        </ul>
    `;

    content.appendChild(div);

}