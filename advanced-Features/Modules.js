function sub(a, b) {return a - b}
const a = 3.14159;

export function add(a, b) {return a + b}
export { sub, a as PI };
export { divide as div } from "./math.js";

import { add as sum } from "./math.js";