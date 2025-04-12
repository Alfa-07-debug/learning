//Type Casting / Assertion

// Using as keyword (most common):

let someValue: any = "Arif";
let strLength: number = (someValue as string).length;

console.log(strLength); // 4

//Using angle brackets < > (only outside JSX files):

let someValue: any = "Hello";
let length: number = (<string>someValue).length;

console.log(length); // 5

//Null Assertion Operator (!)

let myName: string | null = "Arif";

// ❌ TypeScript says: "myName might be null!"
console.log(myName.length); // error

// ✅ Tell TS it's safe:
console.log(myName!.length); // 4

//Example

function getLength(value: any) {
    // Tell TypeScript: "this is a string"
    return (value as string).length;
  }
  
  let username: string | null = "Arif";
  
  // Tell TypeScript "it's not null"
  console.log(username!.toUpperCase()); // ARIF
  