const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');
const removeItemButton = document.querySelector('.removeItemButton');
const ul = document.querySelector('ul');

ul.addEventListener('click', (event) => {
  console.log('click');
  if (event.target.tagName === 'LI') {
    if (event.target.textContent === event.target.textContent.toUpperCase()) {
      event.target.textContent = event.target.textContent.toLowerCase();
    } else {
      event.target.textContent = event.target.textContent.toUpperCase();
    }
  }
})

toggleList.addEventListener('click', () => {
  if (listDiv.style.display === 'none') {
    listDiv.style.display = 'block';
    toggleList.textContent = 'Hide list';
  } else {
    listDiv.style.display = 'none';
    toggleList.textContent = 'Show list';
  }
});

descriptionButton.addEventListener('click', () => {
  descriptionP.innerHTML = descriptionInput.value + ':';
  descriptionInput.value = '';
});

addItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  let li = document.createElement('li');
  li.textContent = addItemInput.value;
  ul.appendChild(li);
  addItemInput.value = '';
});

removeItemButton.addEventListener('click', () => {
  let ul = document.querySelector('ul');
  const lastItem = ul.querySelector('li:last-child');
  ul.removeChild(lastItem);
});