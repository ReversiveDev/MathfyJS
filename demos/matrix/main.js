import { Matrix } from "../../lib/Mathfy.js";


var m1 = new Matrix();
m1.set(0, 0, 3);
m1.set(1, 1, 5);
m1.set(2, 2, 2);
var m2 = new Matrix(1, 3);
m2.set(0, 0, 1);
m2.set(0, 1, 2);
m2.set(0, 2, 3);

console.log(m1.toString());
console.log("\t\tx");
console.log(m2.toString());
console.log("\t\t=");
console.log(m1.mul(m2).toString());

console.log("##################")

var m1 = new Matrix();
m1.set(0, 0, 3);
m1.set(1, 1, 5);
m1.set(2, 2, 2);
var m2 = new Matrix();
m2.set(0, 0, 1);
m2.set(1, 1, 2);
m2.set(2, 2, 3);

console.log(m1.toString());
console.log("\t\t-");
console.log(m2.toString());
console.log("\t\t=");
console.log(m1.sub(m2).toString());