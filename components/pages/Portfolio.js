const memory = require("./../../assets/memorygame.png");
const pywebsite = require("./../../assets/movie_website_snippit.png");
const reactSW = require("./../../assets/reactSW.jpeg");

export default state => `
<hr />
<div class="container row justify-content-center">
  <h2 class="pageHeader col-header animated fadeInLeft">${state.title}</h2>
  <h1 class="row justify-content-center animated fadeIn">Memory Game</h1>
  <p class="animated fadeIn">This memory game was one of the earliest projects I have ever done! It is built using jQuery and ES5, so it is a little outdated, but showcases DOM manipulation, and is one of my best projects. I learned a lot about adding and removing classes, as well as alerting on load, keeping time, number of clicks, as well as a fully functional reload button that doesn't ping the server! Clicking the image takes you to the hosted site.</p>
  <div class="imgContainer">
    <a href="http://bunchdevelopment.github.io/udacity_memory_game/" target="_blank"><img src="${memory}" class="blur portfolioIMG" id="memoryImg"></a>
  </div>
</div>
<br />
<div class="container row justify-content-center">
    <h1 class="row justify-content-center animated fadeIn">Py Entertainment</h1>
  <p class="animated fadeIn">This is a basic Python 2.7 script that takes dictionaries and then renders a website that then displays those dictionaries in a card like format that includes a modal that plays the movies trailer. Clicking the image takes you to the Github repo.</p>
  <div class="imgContainer">
    <a href="https://github.com/BunchDevelopment/movie_website" target="_blank"><img src="${pywebsite}" class="blur portfolioIMG" id="pyImg"></a>
  </div>
<br />
<div class="container row justify-content-center">
    <h1 class="row justify-content-center animated fadeIn">React Star Wars</h1>
  <p class="animated fadeIn">A small little website that is built with React, that pulls in data from an API of Star Wars characters, and then displays that data! It also uses an animation library. The Details are hidden and revealed using State! </p>
  <div class="imgContainer">
    <a href="https://github.com/BunchDevelopment/Starwars_React_API" target="_blank"><img src="${reactSW}" class="blur portfolioIMG" id="memoryImg"></a>
    <br />
  </div>
</div>
<br />
`;
