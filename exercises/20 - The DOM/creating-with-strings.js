console.log('prova');

const item = document.querySelector('.items');

const src = 'https://source.unsplash.com/random/300x300';
const desc = 'Random image';

const myHTML = `
<div>
<h1>Hello World</h1>
<img src="${src}" alt="${desc}">
</div>


`;
item.innerHTML = myHTML;
console.log(item.innerHTML);
