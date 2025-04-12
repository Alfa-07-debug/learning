//DOM

document.getElementById("myButton")

//Getting Elements

const heading = document.getElementById("main-heading");

//with typescript

const heading = document.getElementById("main-heading") as HTMLHeadingElement;
heading.innerText = "Hello Arif!";

//Working with Input Elements

const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);

//Event Listeners

const button = document.getElementById("submit") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert("Button clicked!");
});

//Optional Chaining (Safe Access)

const box = document.getElementById("box") as HTMLDivElement | null;

box?.classList.add("highlight");

//Creating Elements

const newPara = document.createElement("p");
newPara.innerText = "Hey there!";
document.body.appendChild(newPara);

//small Practice

<!-- index.html -->
<input id="name" />
<button id="btn">Click me</button>
<p id="output"></p>

<script src="index.js"></script>
