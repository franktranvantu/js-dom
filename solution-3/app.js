// Finally, remove the <li> element stored in firstListItem from the DOM.
var myList = document.querySelector('ul');
var firstListItem = myList.querySelector('#first');
myList.removeChild(firstListItem);