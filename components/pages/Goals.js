const reactIMG=require('./../../assets/react_photo.png')

export default (state) =>`
<div class="container row justify-content-center">
  <h2 class="pageHeader container justify-content-center animated fadeInLeft">${state.title}</h2>
  <h1 class="row col-sm-12 justify-content-center">What I Am Doing Next!</h1>
  <p class="blurIn">Immediately after this portfolio page, I am jumping into learning React, and React Router. The course I am going to take is <a href="https://reactforbeginners.com/" target="_blank">Wes Bos's React for Beginners course</a>. The next project I am going to build is a single page app for a local podcast named "In The Round" and it will be built with React, React Router, and Firebase! All while I hunt for my first development job.</p>
  <img src="${reactIMG}" class="blur" id="reactIMG"/>
</div>
`;
