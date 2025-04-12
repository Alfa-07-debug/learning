//Generics
//without Generic
function printString(item) {
    console.log(item);
}
function printNumber(item) {
    console.log(item);
}
printString("9");
printNumber(8);
//with generic 
function printItemM(item) {
    console.log(typeof (item));
}
printItemM(9);
//generic Function
function echo(value) {
    return value;
}
console.log(echo("Arif"));
console.log(echo(typeof ("Arif")));
console.log(echo(9));
console.log(echo(typeof (9)));
var stringBox = { content: "TypeScript" };
var numberBox = { content: 100 };
console.log(stringBox);
console.log(numberBox);
//Generic Class
var Storage = /** @class */ (function () {
    function Storage() {
        this.items = [];
    }
    Storage.prototype.add = function (item) {
        this.items.push(item);
    };
    Storage.prototype.getAll = function () {
        return this.items;
    };
    return Storage;
}());
var stringStorage = new Storage();
stringStorage.add("Arif");
stringStorage.add("Ali");
console.log(stringStorage.getAll()); // [ 'Arif', 'Ali' ]
var numberStorage = new Storage();
numberStorage.add(10);
numberStorage.add(20);
console.log(numberStorage.getAll()); // [ 10, 20 ]
