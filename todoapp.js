const form = document.querySelector('#add-todo')
const input = document.querySelector('#todo')
const todoList = document.querySelector('#todo-list')
let todoArr = [];

form.addEventListener('submit', function(e){
  e.preventDefault();
  const newItem = document.createElement('li');
  const removeBtn = document.createElement('button');
  const completeBtn = document.createElement('button')
  removeBtn.innerText = 'Remove';
  removeBtn.id = 'remove';
  completeBtn.innerText = 'Completed';
  completeBtn.id = 'complete';
// can i make a global variable for this to reference for localstorage?
  newItem.innerText = input.value;
  newItem.appendChild(completeBtn);
  newItem.appendChild(removeBtn);
  todoList.appendChild(newItem);
  todoArr.push(input.value);
  document.body.style.backgroundColor = 'teal';
  form.reset()
})

todoList.addEventListener('click', function(e){
  if(e.target.id === 'remove'){
    e.target.parentElement.remove()
    document.body.style.backgroundColor = 'pink';
  }
  if(e.target.id === 'complete'){
        e.target.parentElement.classList.toggle('linethrough');
        document.body.style.backgroundColor = 'orange';
      }
})
