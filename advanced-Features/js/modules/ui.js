export function renderUserList(list, rootEl) {
  rootEl.innerHTML = list
    .map((user) => `<li>${user.name} (${user.age} Jahre)</li>`)
    .join("");
}

export function renderAgeSummary(list, summaryEl) {
  const sum = list.reduce((acc, user) => acc + user.age, 0);
  summaryEl.textContent = `Gesamtalter: ${sum}`;
}

export function setStatus(message, statusEl) {
  statusEl.textContent = message;
}
