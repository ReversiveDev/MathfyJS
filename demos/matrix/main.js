import { Matrix } from "../../lib/Mathfy.js";


let m1 = new Matrix();
m1.set(0, 0, 3);
m1.set(1, 1, 5);
let m2 = new Matrix();
m2.set(0, 0, 4);
m2.set(1, 1, 2);

console.log(m1.toString());
console.log("\t\t-");
console.log(m2.toString());
console.log("\t\t=");
console.log(m1.sub(m2).toString());