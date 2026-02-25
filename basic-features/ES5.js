var todos = [{ id: 1, title: "Lernen", done: true }, { id: 2, title: "Einkaufen", done: false }];
var onlyDone = false;

function App(initial) { this.todos = initial || []; } 

App.prototype.add = function (title, done) { 
  if (done === undefined) done = false;
  var last = this.todos[this.todos.length - 1];
  var id = last ? last.id + 1 : 1;
  this.todos.push({ id: id, title: title, done: done }); 
};

App.prototype.toggle = function (id) {
  for (var i = 0; i < this.todos.length; i++) if (this.todos[i].id === id) this.todos[i].done = !this.todos[i].done;
};

App.prototype.visible = function (flag) { 
  var out = [];
  for (var i = 0; i < this.todos.length; i++) if (!flag || this.todos[i].done) out.push(this.todos[i]);
  return out;
};

var app = new App(todos);

function render() { 
  var list = document.getElementById("list");
  var stats = document.getElementById("stats");
  var items = app.visible(onlyDone);

  list.innerHTML = "";
  for (var i = 0; i < items.length; i++) {
    var li = document.createElement("li");

    var cb = document.createElement("input");
    cb.type = "checkbox";
    cb.checked = items[i].done;
    cb.setAttribute("data-id", items[i].id);

    var span = document.createElement("span");
    span.innerHTML = items[i].title;

    li.appendChild(cb); li.appendChild(span);
    list.appendChild(li);
  }

  stats.innerHTML = "Erledigt: " + app.visible(true).length + " / " + app.todos.length; 
}

document.getElementById("add").addEventListener("click", function () { 
  var input = document.getElementById("title");
  var title = input.value.trim();
  if (!title) return;
  app.add(title);
  input.value = "";
  render();
});

document.getElementById("toggleDone").addEventListener("click", function () { 
  onlyDone = !onlyDone;
  render();
});

document.getElementById("list").addEventListener("change", function (e) { 
  if (e.target && e.target.type === "checkbox") {
    app.toggle(parseInt(e.target.getAttribute("data-id"), 10));
    render();
  }
});

render();