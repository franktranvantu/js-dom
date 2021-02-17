// Finally, in the button click handler, apply a background color of "red" to the warning div.
var warning = document.getElementById("warning");
var button = document.querySelector('#makeItRed');

button.addEventListener('click', () => {
  warning.style.backgroundColor = 'red';
});