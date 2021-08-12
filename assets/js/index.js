"use strict";

// const parsCol = document.getElementsByTagName('p');

// const par = document.getElementById('unique');

// const testClass = document.getElementsByClassName('test');

// // * -----------------------------------------------------
// const coolerPar = document.querySelector('#unique > span');

// const coolerPars = document.querySelectorAll('p');

// const arr = [...coolerPars];

// найти h1, img и span в параграфе


// const par = document.getElementById('ph');
// const img = document.getElementById('img63');
// const [span] = document.getElementsByClassName('span123');

// const h1 = document.querySelector('.main > h1');

// const img = document.querySelector('.main > img');
// const span = document.querySelector('span');


// const img = document.querySelector('.slider-img');

// const [prevBtn, nextBtn] = document.querySelectorAll('.slider-container' > button);

// const sliderImmages = []

// function makeCounter() {
//   let counter = 0;

//   return function increment() {
//     counter = counter += 1;
//     return counter;
//   }
// }

// const increment1 = makeCounter();

// function makeAdder(number) {
//   let adder = makeAdder(number);
//   return function getReturn() {
//      return adder 
//    }
// }

// const adder = makeAdder(number)



// function makeAdder(number) {
//   let adder = makeAdder(number);
//   return function getReturn() {
//     return adder 
//  }
// }

// function makeAdder(n) {
//   let number = n;
//   return function (m) {
//     number = number + m;
//     return number;
//   }
// }


// const oneLineAdder = (state) => (number) => state += number;

// const adder = makeAdder(20);
const div = document.querySelector('#root')
const btns = document.querySelectorAll('#root > button');

function listener(e) {
  const { target: btn } = e;
  const { dataset: { backgroundColor }} = btn;

  div.style.backgroundColor = backgroundColor;
}

for (const btn of btns) {
  btn.addEventListener('click', listener)
}
