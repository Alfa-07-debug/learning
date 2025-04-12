//Type Casting / Assertion
// Using as keyword (most common):
var someValue = "Arif";
var strLength = someValue.length;
console.log(strLength); // 4
//Using angle brackets < > (only outside JSX files):
var someValue = "Hello";
var length = someValue.length;
console.log(length); // 5
//Null Assertion Operator (!)
var myName = "Arif";
// ❌ TypeScript says: "myName might be null!"
console.log(myName.length); // error
// ✅ Tell TS it's safe:
console.log(myName.length); // 4
//Example
function getLength(value) {
    // Tell TypeScript: "this is a string"
    return value.length;
}
var username = "Arif";
// Tell TypeScript "it's not null"
console.log(username.toUpperCase()); // ARIF
