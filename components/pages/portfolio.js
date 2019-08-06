const image=require('../../assets/memorygame.png')

export default (state) => `
<hr />
<div class="container row justify-content-center">
  <h2 class="pageHeader col-header animated fadeInLeft">${state.title}</h2>
  <h1 class="row col-sm-12 justify-content-center animated fadeIn">Memory Game</h1>
  <p class="animated fadeIn">This memory game was one of the earliest projects I have ever done! It is built using jQuery and ES5, so it is a little outdated, but showcases DOM manipulation, and is one of my best projects. I learned a lot about adding and removing classes, as well as alerting on load, keeping time, number of clicks, as well as a fully functional reload button that doesn't ping the server!</p>
  <div class="imgContainer">
    <a href="http://bunchdevelopment.github.io/udacity_memory_game/" target="_blank"><img src="${image}" class="portfolioIMG"></a>
    </div>
<br>
</div>
<br>
`;