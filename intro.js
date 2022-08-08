const list = document.querySelector('ul');
const date = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener('click', event=> {
const myDate = date.value;

const  listItem = document.createElement('li');
const  listNumber = document.createElement('span');
const listBtn = document.createElement('button');

listItem.appendChild(listNumber);
listNumber.textContent = myDate;
listItem.appendChild(listBtn);
listBtn.textContent = 'Delete';
list.appendChild(listNumber);

listBtn.addEventListener('click', () => {
list.removeChild(listItem);
});

}); 

