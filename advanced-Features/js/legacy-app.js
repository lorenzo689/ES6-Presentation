(function () {
  // Klassische Datenstruktur für die Legacy-Version.
  var users = [
    { name: "Anna", age: 24, active: true },
    { name: "Ben", age: 31, active: false },
    { name: "Chris", age: 27, active: true },
    { name: "Dina", age: 35, active: true }
  ];

  var userList = document.getElementById("userList");
  var ageSummary = document.getElementById("ageSummary");
  var status = document.getElementById("status");

  function renderUsersClassic(list) {
    userList.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
      var li = document.createElement("li");
      li.textContent = list[i].name + " (" + list[i].age + " Jahre)";
      userList.appendChild(li);
    }
  }

  function renderAgeSumClassic(list) {
    var sum = 0;
    for (var i = 0; i < list.length; i++) {
      sum += list[i].age;
    }
    ageSummary.textContent = "Gesamtalter: " + sum;
  }

  // Simulierter asynchroner Abruf im alten Callback-Stil.
  function fetchUsersClassic(callback) {
    setTimeout(function () {
      callback(users);
    }, 700);
  }

  fetchUsersClassic(function (data) {
    var activeUsers = [];
    for (var i = 0; i < data.length; i++) {
      if (data[i].active) {
        activeUsers.push(data[i]);
      }
    }

    renderUsersClassic(activeUsers);
    renderAgeSumClassic(activeUsers);
    status.textContent = "Legacy-Daten geladen (Callback + for-Schleifen).";
  });

  /*
    Schritt 1 - Template Literals:
    Ersetze String-Verkettung in renderUsersClassic und renderAgeSumClassic.

    Beispiel:
    li.textContent = `${list[i].name} (${list[i].age} Jahre)`;
    ageSummary.textContent = `Gesamtalter: ${sum}`;
  */

  /*
    Schritt 2 - Promise statt Callback:
    function fetchUsersWithPromise() {
      return new Promise(function (resolve) {
        setTimeout(function () {
          resolve(users);
        }, 700);
      });
    }
  */

  /*
    Schritt 3 - async/await:
    async function loadUsersModern() {
      var data = await fetchUsersWithPromise();
      // weiter mit Rendering
    }
  */

  /*
    Schritt 5 - Array-Methoden (map/filter/reduce):
    var activeUsersModern = data.filter(function (user) {
      return user.active;
    });

    var labels = activeUsersModern.map(function (user) {
      return `${user.name} (${user.age} Jahre)`;
    });

    var sumModern = activeUsersModern.reduce(function (acc, user) {
      return acc + user.age;
    }, 0);
  */
})();
