import navigation from "./components/navigation.js";
import blog from "./components/blog.js";
import contact from "./components/contact.js";
import project from "./components/project.js";

const home = {
    title: "Welcome to my Portfolio Page"
};
const Contact = {
    title: "How to contact me!"
};
const Project = {
    title: "Some of my work!"
};

const root = document.querySelector("#root");

function render(state) {
    root.innerHTML = `
        ${navigation(state)}
        ${contact(state)}
        ${project(state)}
        ${blog(state)}
    `

    document.querySelector("#home-nav a").addEventListener("click", event => { event.preventDefault();

        render(Contact);
        });

    document.querySelector("#navigation li:nth-child(2) > a").addEventListener("click", event => {
        event.preventDefault();
    
          render(project);
        });
};

render(home);