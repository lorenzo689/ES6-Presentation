/* 
    grundlegende ES6+ Features 

    Im Folgenden werden 6 grundlegende ES6+ Features vorgestellt. 

    Diese Datei dient ausschließlich zur Demonstration der Kernkonzepte
    und darf NICHT als produktionsreifen Code betrachtet werden.

    Es werden bei jedem Konzept jeweils die alte und neue Herangehensweise gezeigt. 

*/

// =============================================================
// Konzept 1: let / const
// =============================================================


// ES5 (var)
var score = 10; 
score = 20; // Das ist erlaubt

//ES6+ 
let points = 10; 
points = 20; // Das ist erlaubt

try {
    const users = 100; 
    users = 200; // Das ist NICHT erlaubt
} catch (error) {
    console.log("FEHLER: const darf NICHT erneut zugewiesen werden"); 
    console.log("error: ", error.message); 
}

// =============================================================
// Konzept 2: Arrow Functions
// =============================================================


// ES5
function addOld(a, b) {
    return a + b; 
}

console.log(addOld(2, 3)); 

// ES6+
const add = (a, b) => a + b; 

console.log(add(2, 3)); 


// =============================================================
// Konzept 3: Template Literals
// =============================================================


// ES5
var nameOld = "Lorenzo"; 
console.log("Hello, " + nameOld + "!"); 

// ES6+
let nameNew = "Lorenzo"; 
console.log(`Hello, ${nameNew}!`); 


// =============================================================
// Konzept 4: Destructuring
// =============================================================


const user = { name: "Lorenzo", age: 19, location: "Sandhausen" };

// ES5
var name1 = user.name; 
var age1 = user.age; 

console.log(name1, age1);

// ES6+ 
const { name, age } = user; 

console.log(name, age); 


// =============================================================
// Konzept 5: Spread & Rest Operator 
// =============================================================


// ----------- Spread (Array kopieren bzw. erweitern) ----------

// ES5
var numbersOld = [1, 2, 3]; 
var copyOld = numbersOld.slice(); //-> Kopie erstellen vom Array

// ES6+
const numbers = [1, 2, 3]; 
const copy = [...numbers]; // Spread 
const extended = [...numbers, 4, 5]; 

console.log(copy); 
console.log(extended); 


// ------ Rest (unbestimmte Anzahl an Parametern sammeln) ------

// ES5
function sumOld() {
    var total = 0; 
    for (var i = 0; i < arguments.length; i++) {
        total += arguments[i]; 
    };
    return total; 
}; 

console.log(sumOld(1,2,3,4)); 

// ES6+
const sum = (...nums) => {
    return nums.reduce((acc, curr) => acc + curr, 0); 
}; 

console.log(sum(1,2,3,4)); 


// =============================================================
// Konzept 6: Default Parameters 
// =============================================================


// ES5 
function greetOld(name2) {
    if (name2 === undefined) {
        name2 = "Gast"; 
    }; 
    return "Hallo " + name2; 
}; 

console.log(greetOld()); 
console.log(greetOld("Lorenzo")); 

// ES6+ 

const greet = (name2 = "Gast") => `Hallo ${name2}`;

console.log(greet()); 
console.log(greet("Lorenzo")); 