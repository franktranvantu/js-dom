const toggleList = document.querySelector('#toggleList');
const listDiv = document.querySelector('.list');
const listUl = listDiv.querySelector('ul');
const descriptionInput = document.querySelector('input.description');
const descriptionP = document.querySelector('p.description');
const descriptionButton = document.querySelector('button.description');
const addItemInput = document.querySelector('.addItemInput');
const addItemButton = document.querySelector('.addItemButton');

listUl.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    if (event.target.className === 'remove') {
      const button = event.target;
      const li = button.parentNode;
      const ul = li.parentNode;
      ul.removeChild(li);
    }

    if (event.target.className === 'up') {
      const button = event.target;
      const li = button.parentNode;
      const prevLi = li.previousElementSibling;
      const ul = li.parentNode;
      if (prevLi) {
        ul.insertBefore(li, prevLi);
      }
    }
  }
});

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