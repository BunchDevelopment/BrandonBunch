const memory=require('./../../assets/memorygame.png')
const pywebsite=require('./../../assets/movie_website_snippit.png')

export default (state) => `
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
<br>
</div>
<br>
`;