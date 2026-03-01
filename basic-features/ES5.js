// ES5:
// - var statt let/const
// - normale Functions statt Arrow
// - Default Parameter manuell
// - kein Destructuring
// - kein Spread und Rest Operator

var todos = []; 

var addTodo = function (title, done) {

  if (done === undefined) {
    done = false;
  }

  var id = todos.length + 1;

  todos.push({
    id: id,
    title: title,
    done: done
  });
};

var render = function () {

  var list = document.getElementById("list");
  list.innerHTML = "";

  for (var i = 0; i < todos.length; i++) {
    var li = document.createElement("li");
    li.textContent = todos[i].title;
    list.appendChild(li);
  }
};

document.getElementById("add").addEventListener("click", function () {

  var input = document.getElementById("input");
  var title = input.value.trim();

  if (!title) {
    return;
  }

  addTodo(title);
  input.value = "";
  render();
});