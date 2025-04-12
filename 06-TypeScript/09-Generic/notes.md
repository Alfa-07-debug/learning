## 🧃 What is a Generic?

Think of **Generics** like a **magic lunchbox 🧺** that can carry *anything* — cookies, sandwiches, juice — but keeps everything **safe and organized**. It doesn’t care what’s inside, as long as you **tell it what’s inside** when you use it.

In TypeScript, **Generics** help write **flexible and reusable** code that works with any type, while keeping type safety.

---

## 🎯 Why Use Generics?

Without generics, you'd have to repeat the same logic for every type.

```ts
function printString(item: string) {
  console.log(item);
}

function printNumber(item: number) {
  console.log(item);
}
```

Too much code! 😤

**With generics**, you write it once:

```ts
function printItem<T>(item: T) {
  console.log(item);
}
```

🧠 `T` can be anything — a placeholder for the real type you’ll give later.

---

## 🧩 Subtopics of Generics:

---

### 1️⃣ Generic Function

```ts
function echo<T>(value: T): T {
  return value;
}

console.log(echo("Arif"));      // Arif (string)
console.log(echo(123));         // 123 (number)
console.log(echo(true));        // true (boolean)
```

🧒🏻 Imagine a machine that copies anything you put in, but still knows what it copied.

---

### 2️⃣ Generic Interface

You can create interfaces that work with **any type** too:

```ts
interface Box<T> {
  content: T;
}

let stringBox: Box<string> = { content: "TypeScript" };
let numberBox: Box<number> = { content: 100 };
```

🧺 Like a magic box that knows it’s holding a string or number — and won’t let you mix them up.

---

### 3️⃣ Generic Class

Generics work in classes too, so they can be flexible!

```ts
class Storage<T> {
  private items: T[] = [];

  add(item: T): void {
    this.items.push(item);
  }

  getAll(): T[] {
    return this.items;
  }
}

const stringStorage = new Storage<string>();
stringStorage.add("Arif");
stringStorage.add("Ali");
console.log(stringStorage.getAll()); // [ 'Arif', 'Ali' ]

const numberStorage = new Storage<number>();
numberStorage.add(10);
numberStorage.add(20);
console.log(numberStorage.getAll()); // [ 10, 20 ]
```

🚀 The class works with strings or numbers without rewriting it twice!

---

## 🧠 Summary Table

| Topic              | Meaning                                                                 |
|--------------------|-------------------------------------------------------------------------|
| Generic Function    | Works with any type (`<T>`) but still type-safe                        |
| Generic Interface   | Interfaces that accept a type parameter                                |
| Generic Class       | Reusable class that works with different types                         |

---

## 💻 Real Example (Mini Project)

Let’s build a reusable function to wrap any data:

```ts
function wrapInArray<T>(value: T): T[] {
  return [value];
}

console.log(wrapInArray("Arif")); // ['Arif']
console.log(wrapInArray(123));    // [123]
```

✨ Works with string, number, anything — and TypeScript knows the type inside.

