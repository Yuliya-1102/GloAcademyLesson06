'use strict';

const collection = document.querySelectorAll('ul');
const elems = document.querySelectorAll('li');
const adv = document.querySelector('.adv');
const book = document.querySelectorAll('.book');
const body = document.querySelector('body');
const h2 = document.querySelectorAll('h2 a');
console.log('h2: ', h2);

console.log('body: ', body);

console.log('book: ', book);


book[0].before(book[1]);
book[2].before(book[4]);
book[5].after(book[2]);

body.style.backgroundImage = 'url(./image/you-dont-know-js.jpg)';

h2[4].textContent = 'Книга 3. this и Прототипы Объектов';

adv.remove();

elems[3].after(elems[6]);
elems[4].before(elems[8]);
elems[9].after(elems[2]);

elems[48].before(elems[55]);
elems[50].after(elems[48]);
elems[53].after(elems[51]);

const elemTitle = elems[25].cloneNode(true);
elemTitle.textContent = 'Глава 8: За пределами ES6';
elems[25].after(elemTitle);
// console.log(collection[0]);
console.log(elems);

