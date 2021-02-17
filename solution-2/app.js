// Next, set the text content of the <a> element with the ID link to the value stored in inputValue.

var inputValue = document.querySelector('input#linkName').value;
var a = document.querySelector('a');
a.textContent = inputValue;