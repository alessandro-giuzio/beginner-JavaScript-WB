console.log('it works!');

const signUpForm = document.querySelector('[name="signup"]');
signUpForm.addEventListener('submit', function (event) {
  console.log(event);
  event.preventDefault();
});
