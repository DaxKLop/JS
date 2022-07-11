'use strict';

const box = document.getElementById('box'),
      btns = document.getElementsByTagName('button'),
      circles =  document.getElementsByClassName('circle'),
      hearts = document.querySelectorAll('.heart'),
      oneHeart = document.querySelector('.heart'),
      wrapper = document.querySelector('.wrapper');

// box.style.background = 'green';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px';

btns[1].style.borderRadius = '78%';
circles[0].style.background = 'red';


// for (let i = 0; i <hearts.length; i++)
// {
//     hearts[i].style.background = 'blue';
// }

hearts.forEach(item => {item.style.background = 'blue';});


const div = document.createElement('div');

div.classList.add('black');
wrapper.append(div);
 

div.innerHTML = "<h1>Hello World</h1>";

// div.textContent = "Hello";

div.insertAdjacentHTML("afterbegin", '<h2>DSAASDASSAD</h2>');