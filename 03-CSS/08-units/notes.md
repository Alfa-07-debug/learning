## 🧱 **Units in CSS**

### 🔹 Definition:
**Units** in CSS tell the browser how big something should be — like how wide a box is, or how tall text should be.  
There are two main types of units: **Absolute** and **Relative**.

---

### 🔵 1. **Absolute Units**

These are **fixed sizes**. They stay the same no matter what screen size or settings you have. Think of them like real-world rulers 🧍📏

| Unit | What it means     | Example |
|------|-------------------|---------|
| px   | Pixels             | `font-size: 20px;` → Text is exactly 20 pixels tall |
| pt   | Points (used in printing) | `font-size: 12pt;` |
| in   | Inches            | `width: 1in;` → Box will be 1 inch wide |
| cm   | Centimeters       | `width: 5cm;` |
| mm   | Millimeters       | `height: 10mm;` |

> 🧠 **Tip:** Use `px` for screen stuff, and others (like `cm`, `in`) for printing.

---

### 🟢 2. **Relative Units**

These **change depending on** the screen size or other elements. Great for making websites that work on phones, tablets, and computers.

| Unit | Based on...                | Example |
|------|----------------------------|---------|
| %    | A percentage of the parent | `width: 50%;` → Half the size of the container |
| em   | The size of current text   | `padding: 2em;` → Twice the font size |
| rem  | The root (`html`) font size| `font-size: 1.5rem;` |
| vw   | Viewport width (browser window) | `width: 100vw;` → Full screen width |
| vh   | Viewport height            | `height: 100vh;` → Full screen height |

> 🧠 **Tip:** Use `rem`, `em`, `%`, `vw`, and `vh` for flexible, responsive layouts.

---

### 🔚 Example Time!

```css
.box1 {
  width: 300px;     /* absolute */
  height: 200px;    
}

.box2 {
  width: 50%;       /* relative to parent */
  font-size: 2em;   /* relative to text size */
}
```

