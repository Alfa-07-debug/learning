let username : string = "Arif";
let age:number = 25;
let isStudent1:boolean = true;

console.log(`${username} is ${age} years old. student : ${isStudent1}`);

//Primitive Type :- Number,String,boolean,undefine,symbol,bigint
let userName1 : string = "Arif";
let age1:number = 25;
let isStudent:boolean = true;

console.log(`${userName1} is ${age1} years old. student : ${isStudent}`);

//Arrays

let skills :string[]=["HTML","CSS","JavaScript"];
console.log(skills);

//Tuples

let userData :[string,number]=["Arif",25];
console.log(userData);

//Enums

enum userRole {
    ADMIN,
    EDITOR,
    VIEWER
}
let myRole:userRole=userRole.EDITOR;
console.log(myRole);

//Any

let randomValue:any=9;
console.log(randomValue);

//Unknown

let userInput :unknown="TypeScript";

if(typeof userInput ==="string"){
    console.log(userInput.toUpperCase());
}

//void

function greetUser():void{
    console.log("Welcome to TypeScript");
}
greetUser();

//Null

let middleName: null = null;

//Undefined

let jobTitle: undefined = undefined;

//Never

function throwError(): never {
    throw new Error("Something went wrong!");
  }
  