export const users = [
  { name: "Anna", age: 24, active: true },
  { name: "Ben", age: 31, active: false },
  { name: "Chris", age: 27, active: true },
  { name: "Dina", age: 35, active: true }
];

export function fetchUsers() {
  return new Promise((resolve) => {
    setTimeout(() => resolve(users), 700);
  });
}
