/* const p = document.querySelectorAll('p');
const img = document.querySelectorAll('img');

const heading = document.querySelector('h2');

console.log(heading.textContent);
heading.textContent = 'provaaaa';

console.log(heading.innerHTML);
console.log(heading.outerHTML);

heading.insertAdjacentText('beforebegin', '🍕🚀');
heading.insertAdjacentText('afterbegin', '🍕'); */

const pic = document.querySelector('.nice');
pic.classList.add('cool');

function toggleRound() {
  pic.classList.toggle('round');
}
pic.addEventListener('click', toggleRound);
pic.className;
