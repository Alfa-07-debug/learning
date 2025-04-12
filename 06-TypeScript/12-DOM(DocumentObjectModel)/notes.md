# 🧠 DOM in TypeScript

DOM is just a fancy name for **all the stuff inside a webpage** like:

- buttons 🟦  
- headings 📝  
- inputs ✏️  
- images 🖼️  
- paragraphs 📃

When you write code like:

```ts
document.getElementById("myButton")
```

You're saying:  
> “Hey browser! Give me that button so I can do something with it!”

---

## ✅ Why use TypeScript with the DOM?

Because it helps you **know the type** of element you’re working with.

So you don’t make silly mistakes like trying to `.click()` a paragraph or `.value` a button.

---

## 📌 Common Subtopics

---

### 1️⃣ **Getting Elements**

```ts
const heading = document.getElementById("main-heading");
```

But TypeScript says:
> “Hey! I’m not sure what kind of element this is. I need more info!”

So we **cast** it:

```ts
const heading = document.getElementById("main-heading") as HTMLHeadingElement;
heading.innerText = "Hello Arif!";
```

---

### 2️⃣ **Working with Input Elements**

```ts
const input = document.getElementById("username") as HTMLInputElement;
console.log(input.value);
```

Without casting, `.value` would throw an error in TypeScript.

---

### 3️⃣ **Event Listeners**

```ts
const button = document.getElementById("submit") as HTMLButtonElement;

button.addEventListener("click", () => {
  alert("Button clicked!");
});
```

---

### 4️⃣ **Optional Chaining (Safe Access)**

If you're not sure an element exists:

```ts
const box = document.getElementById("box") as HTMLDivElement | null;

box?.classList.add("highlight");
```

If `box` doesn't exist, this won't crash the program 🚀

---

### 5️⃣ **Creating Elements**

```ts
const newPara = document.createElement("p");
newPara.innerText = "Hey there!";
document.body.appendChild(newPara);
```

You can also type it:

```ts
const newPara: HTMLParagraphElement = document.createElement("p");
```

---

## 🧪 Small Practice Task

Try creating a file:

```html
<!-- index.html -->
<input id="name" />
<button id="btn">Click me</button>
<p id="output"></p>

<script src="index.js"></script>
```

```ts
// index.ts
const input = document.getElementById("name") as HTMLInputElement;
const button = document.getElementById("btn") as HTMLButtonElement;
const output = document.getElementById("output") as HTMLParagraphElement;

button.addEventListener("click", () => {
  output.innerText = `Hello, ${input.value}`;
});
```

Then compile with `tsc index.ts`

