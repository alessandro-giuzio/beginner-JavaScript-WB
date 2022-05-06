const butts = document.querySelector('.butts');

const buyButtons = document.querySelectorAll('button.buy');

function handleBuyButtonClick(event) {
  console.log(parseFloat(event.target.dataset.price));
  console.log('You clicked the buy button!');
}

buyButtons.forEach(function (buyButton) {
  buyButton.addEventListener('click', handleBuyButtonClick);
});
