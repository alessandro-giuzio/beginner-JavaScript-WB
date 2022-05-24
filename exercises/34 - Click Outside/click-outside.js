const cardButtons = document.querySelectorAll('.card');

function handleCardButtonClick(event) {
  const button = event.currenttarget;
  const card = button.closest('.card');
}

cardButtons.forEach(button =>
  button.addEventListener('click', handleCardButtonClick)
);
