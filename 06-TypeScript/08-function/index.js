//function
var greet;
greet = function (name) {
    console.log("Hello", name);
};
greet("Arif"); // Hello Arif
//Optional and Default Parameters
function greetUser(name, age) {
    console.log("Hi", name);
    if (age) {
        console.log("You are", age, "years old.");
    }
}
greetUser("Arif");
greetUser("Ali", 25);
// ✅ Default
function sayHello(name) {
    if (name === void 0) { name = "Guest"; }
    console.log("Hello", name);
}
sayHello(); // Hello Guest
sayHello("Arif"); // Hello Arif
//Rest Parameters
function sumAll() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    return numbers.reduce(function (total, num) { return total + num; }, 0);
}
console.log(sumAll(1, 2, 3)); // 6
console.log(sumAll(10, 20, 30, 40)); // 100
function greetPerson(input) {
    if (typeof input === "string") {
        return "Hello ".concat(input);
    }
    else {
        return "You are ".concat(input, " years old");
    }
}
console.log(greetPerson("Arif")); // Hello Arif
console.log(greetPerson(25)); // You are 25 years old
//Real World Project Use
function calculateTotal(price, quantity) {
    if (quantity === void 0) { quantity = 1; }
    return price * quantity;
}
function checkout(user) {
    var items = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        items[_i - 1] = arguments[_i];
    }
    console.log("Checking out for ".concat(user, ":"));
    console.log("Items:", items.join(", "));
}
checkout("Arif", "Shirt", "Jeans", "Shoes");
