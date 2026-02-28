// ES6:
// 1. const / let
// 2. Arrow Functions
// 3. Default Parameters
// 4. Destructuring
// 5. Spread- and Rest Operator

let todos = []; 

const addTodo = (title, done = false) => { 
  const id = todos.length + 1; 

  todos = [...todos, { id, title, done }];
};

const addTodos = (...titles) => {
  titles.forEach(title => addTodo(title)); 
};

const render = () => { 
  const list = document.getElementById("list");
  list.innerHTML = "";

  for (const { title } of todos) {
    const li = document.createElement("li");
    li.textContent = title;
    list.appendChild(li);
  }
};

document.getElementById("add").addEventListener("click", () => { 
  const input = document.getElementById("input");
  const title = input.value.trim();

  if (!title) return;

  addTodo(title);
  input.value = "";
  render();
});

addTodos("Einkaufen", "Lernen", "Sport"); 
render(); 