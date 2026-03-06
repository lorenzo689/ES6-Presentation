const users = [
  { name: "Ali", age: 20 },
  { name: "Bea", age: 30 }
];

const names = users.map(u => u.name);
console.log(names); // ["Ali", "Bea"]





const zahlen = [1, 2, 3, 4, 5, 6];

const gerade = zahlen.filter((x) => {
  return x % 2 === 0;
});

console.log(gerade); // [2, 4, 6]



const numbers = [1, 2, 3, 4];

//(acc, element, index, array) => { ... }
const summe = numbers.reduce((acc, x) => {
  return acc + x;
}, 0);

console.log(summe); // 10