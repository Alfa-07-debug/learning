## 🎨 What is CSS?

**CSS** stands for **Cascading Style Sheets**.

It’s like giving your boring HTML a **fancy outfit** 👕👗  
HTML is the skeleton 🦴, and CSS is the clothes, colors, and cool styles you put on it!

### 🎯 Example:

```html
<p>This is normal text</p>

<style>
  p {
    color: red;
    font-size: 20px;
  }
</style>
```

✅ This changes the `<p>` text to **red** and makes it **bigger**.

---

## 🛠️ Basic CSS Syntax

```css
selector {
  property: value;
}
```

Let’s break it down like a superhero team:

| Part        | Meaning                               |
|-------------|----------------------------------------|
| **Selector** | Who are we styling? (e.g., `p`, `h1`) |
| **Property** | What do we want to change? (e.g., `color`) |
| **Value**    | What should it be? (e.g., `blue`)     |

---

### 🌈 Example 1:

```css
h1 {
  color: blue;
}
```

This turns every `<h1>` into a **blue title**! 💙

---

### ✨ Example 2:

```css
body {
  background-color: lightyellow;
}
```

This changes the whole page’s background to **light yellow** 🟨

---

### 🎨 Common Properties You’ll Love:

| Property        | What It Does                        |
|-----------------|--------------------------------------|
| `color`         | Text color                           |
| `background-color` | Background color                   |
| `font-size`     | Text size                            |
| `font-family`   | Text style (like Arial, Comic Sans)  |
| `text-align`    | Aligns text (left, center, right)    |
| `margin`        | Space outside the element            |
| `padding`       | Space inside the element             |
| `border`        | Adds a border (line) around it       |

---

## 🎁 Quick Practice:

```html
<h2>Hello Arif!</h2>

<style>
  h2 {
    color: green;
    font-size: 30px;
    text-align: center;
  }
</style>
```

👀 This makes your heading:
- Green 💚
- Big 📏
- Centered 🧭

