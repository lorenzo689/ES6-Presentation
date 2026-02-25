import { fetchUsers } from "./modules/data.js";
import { renderUserList, renderAgeSummary, setStatus } from "./modules/ui.js";

const userList = document.getElementById("userList");
const ageSummary = document.getElementById("ageSummary");
const status = document.getElementById("status");

async function start() {
  const allUsers = await fetchUsers();
  const activeUsers = allUsers.filter((user) => user.active);

  renderUserList(activeUsers, userList);
  renderAgeSummary(activeUsers, ageSummary);
  setStatus("Moderne Daten geladen (Modules + async/await + map/filter/reduce).", status);
}

start().catch((error) => {
  setStatus(`Fehler: ${error.message}`, status);
});
