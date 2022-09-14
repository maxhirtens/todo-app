// retrieve to-dos
const againTodos = JSON.parse(localStorage.getItem('todos'));
for(let item of againTodos){
  let newTodo = document.createElement('li');
  newTodo.innerText = item.innerText;
  form.newTodo;
}

  // store to-dos to localStorage
  localStorage.setItem('todos', JSON.stringify(todoArr));
