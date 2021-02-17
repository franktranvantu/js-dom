// Next, select the input element with the ID phraseText and assign it to the input variable.
var button = document.getElementById('sayPhrase');
var input;

button.addEventListener('click', () => {
  alert(input.value);
});