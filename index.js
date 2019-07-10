import Navigation from "./components/Navigation.js";
import Header from "./components/Header.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";
import * as states from "./store";

const root = document.querySelector("#root");

function render(state) {
    root.innerHTML = `
        ${Navigation()}
        ${Header(state)}
        ${Content(state)}
        ${Footer()}
    `;

//look for click events on nav bar
    let links = document.querySelectorAll('nav a')
        .forEach((link) => link.addEventListener('click', (event) => { 
        event.preventDefault(); //Overrides page reload for links
        console.log("event.target.textContent", event.target.textContent);
        render(states[event.target.textContent]);
        })
    );
}

render(states.Home);
//override default behavior
//upon clicking, we need to know what we clicked on and match that to its respective page to be displayed