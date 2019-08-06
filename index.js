import Navigation from "./components/Navigation.js";
import Footer from "./components/Footer.js";
import Content from "./components/Content.js";
import * as states from "./store";
import Navigo from 'navigo';



const router = new Navigo(window.location.origin);
const root = document.querySelector("#root");

router
    .on(":page", handleRoute)
    .on("/", () => render(states.Home))
    .resolve();

function handleRoute(params){
    const page = params.page;
    render(states[page]);
}

//const personalForm = document.getElementById('personal').addEventListener('click', console.log('personal click'));
//const professionalForm = document.getElementById('professional').addEventListener('click', console.log('clickity click'));

function render(state) {
    root.innerHTML = `
        ${Navigation(state)}
        ${Content(state)}
        ${Footer()}
    `;

    router.updatePageLinks();
};