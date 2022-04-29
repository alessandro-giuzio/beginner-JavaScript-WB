console.log('it worked!');

const myPar = document.createElement('p');
myPar.textContent = 'This is a paragraph';
myPar.classList.add('special');

console.log(myPar);

const myImg = document.createElement('img');
myImg.src = 'https://source.unsplash.com/random/400x300';
myImg.alt = 'Random image';

const myDiv = document.createElement('div');
myDiv.classList.add('container');
console.log(myDiv);

document.body.appendChild(myDiv);
myDiv.appendChild(myPar);
myDiv.appendChild(myImg);

const heading = document.createElement('h2');
heading.textContent = 'This is a heading';

myDiv.insertAdjacentElement('beforebegin', heading);

const myDiv1 = document.createElement('div');
myDiv1.classList.add('container-1');
const unOrderedList = document.createElement('ul');
const listItem1 = document.createElement('li');
const listItem2 = document.createElement('li');
const listItem3 = document.createElement('li');

listItem1.textContent = 'This is a list item-1';
listItem2.textContent = 'This is a list item-2';
listItem3.textContent = 'This is a list item-3';

document.body.appendChild(myDiv1);
myDiv1.appendChild(unOrderedList);
unOrderedList.appendChild(listItem2);
listItem2.insertAdjacentElement('beforebegin', listItem1);
listItem2.insertAdjacentElement('afterend', listItem3);
