import navigation from "./components/navigation.js";
import blog from "./components/blog.js";
import contact from "./components/contact.js";
import project from "./components/project.js";

const initialHTML = document.getElementById("header").innerHTML;

document.getElementById("header").innerHTML = `
${navigation}
${blog}
${contact}
${project}
${initialHTML}`;
