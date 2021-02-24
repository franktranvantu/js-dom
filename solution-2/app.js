// Next, set the text content of the <a> element with the ID link to the value stored in inputValue.

var inputValue = document.querySelector('input#linkName');
var a = document.querySelector('a');

inputValue.addEventListener('keyup', (event) => {
  a.textContent = event.target.value;
})