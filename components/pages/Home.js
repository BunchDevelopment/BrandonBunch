const image=require('./../../assets/headshot.jpg')

export default (state)=>`
<hr >
<div class="container row justify-content-center">
        <div class="headshotContainer">
                <img class="headshot row justify-content-center blur" src="${image}">
        </div>
        <h2 class="pageHeader col-header animated fadeInLeft">${state.title}</h2>
        <h2 class="row row justify-content-center justify-content-center animated fadeIn">A little about how I started...</h2>
        <p class="row justify-content-center animated fadeIn">Three years ago, I was really trying to find a career. I called my brother and I asked him what he enjoyed about being a developer. His response was that it is consistently challenging him. To me, this was the best answer. I mean, how could a person who has done this job for over five years, still be challenged? Personally, I tend to get really bored when I don't challenge myself. I was interested. He recommended I try out the CS50 course on iTunes. It was the same exact course he took when he was learning, just updated because things change. My first bug was a missing semi colon, which took me three days to figure out. I was in love with programming. The rush of satisfaction from finally figuring out the bug that has wrecked my thought process for over 48 hours, was finally fixed! Since then, I have been hooked.</p>
        <hr>
        <h2 class="row justify-content-center animated fadeIn">A little about what I enjoy...</h2>
        <p class="row justify-content-center animated fadeIn">Well, I am a simple man who enjoys simple things. Basically everything technology. I am a firm believer that technology's sole purpose, is to improve your life. I tend to spend my time playing video games, browsing random things on my computer, going deep down the rabbit holes on YouTube, and the occasional outing with the friends. See? Simple man who loves simple things.</p>
        <hr >
</div>
`;
