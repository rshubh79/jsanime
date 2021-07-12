const hero = document.querySelector('.hero');
const slider = document.querySelector('.slider');
const logo = document.querySelector('.logo');
const hamburger = document.querySelector('.hamburger');
const headline = document.querySelector('.headline');

const tl = new TimelineMax();

tl.fromto(hero,
    1,
    {height: "0%"},
     {height:"80%", ease: power2.easeInOut}
    ).fromto(1,
    {height: "0%"},
     {height:"80%", ease: power2.easeInOut}
    );