// Select the button with the ID sayPhrase and assign it to the button variable.
var button = document.getElementById('sayPhrase');
var input;

button.addEventListener('click', () => {
  alert(input.value);
});