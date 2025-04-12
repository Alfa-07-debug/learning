## 📦 What are Modules?

Imagine each file in TypeScript as a **box of toys**. Sometimes, you want to **share** your toys with others (export), or **borrow** some toys from another box (import).

Modules help us do that!

---

## 🎯 Why Use Modules?

- Keep your code **clean and organized**
- Reuse code from other files
- Avoid repeating the same logic

---

## 🧩 Subtopics of Modules

---

### 1️⃣ Exporting from a Module

Let’s say you have a file `mathUtils.ts`:

```ts
// mathUtils.ts
export function add(a: number, b: number): number {
  return a + b;
}

export const PI = 3.14;
```

- The `export` keyword lets others **access** what's inside.
- You can export **functions**, **variables**, **classes**, etc.

---

### 2️⃣ Importing from a Module

Now let’s use the exported stuff in another file called `app.ts`:

```ts
// app.ts
import { add, PI } from "./mathUtils";

console.log(add(5, 3)); // 8
console.log(PI);        // 3.14
```

- Use `import { } from "file"` to grab the exports.
- Use `./` to import from the same folder.

---

### 3️⃣ Default Export

Sometimes, you only want to export **one main thing** from a file.

```ts
// logger.ts
export default function logMessage(message: string): void {
  console.log("Log:", message);
}
```

Then import it **without curly braces**:

```ts
// app.ts
import logMessage from "./logger";

logMessage("Arif is learning modules!");
```

---

## 🔁 Summary

| Concept            | Example                        | Notes                                 |
|--------------------|--------------------------------|----------------------------------------|
| `export`           | `export function hello() {}`   | Export multiple items from a file     |
| `import`           | `import { hello } from "./x"`  | Import specific items from a file     |
| `default export`   | `export default something`     | Only one default allowed per file     |
| `default import`   | `import something from "./x"`  | No `{}` needed                        |

---

## 🧪 Mini Example Folder Structure

```
/modules-demo
│
├── app.ts
├── mathUtils.ts
└── logger.ts
```

**mathUtils.ts**  
```ts
export function add(a: number, b: number): number {
  return a + b;
}
```

**logger.ts**  
```ts
export default function log(message: string): void {
  console.log("Log:", message);
}
```

**app.ts**  
```ts
import { add } from "./mathUtils";
import log from "./logger";

log("Result: " + add(2, 3)); // Log: Result: 5
```

