## 🔷 **Display Property in CSS**

### ✅ **Definition**:
The `display` property in CSS decides **how an element will appear and behave** on the web page — like whether it sits in a line or takes up the whole row.

---

## 🔹 Types of Display Values (with Examples)

---

### 1. ✅ `block`

🧱 A **block element** always starts on a **new line** and takes **full width**.

📦 Examples of block elements: `<div>`, `<p>`, `<h1>`...  

```html
<div style="display: block; background: lightblue;">
  I am a block element!
</div>
```

👀 It pushes the next element to a new line.

---

### 2. ✅ `inline`

🧵 An **inline element** stays **in the same line** and only takes **as much space as needed**.  
It does **not** accept width or height.

📦 Examples: `<span>`, `<a>`, `<strong>`...

```html
<span style="display: inline; background: yellow;">
  I am inline!
</span>
```

👀 It sits with other elements like words in a sentence.

---

### 3. ✅ `inline-block`

🧲 A mix of **inline + block**!

- It stays **in line** with other content  
- **BUT** you can give it **width and height** like a block

```html
<div style="display: inline-block; width: 100px; height: 100px; background: coral;">
  Inline-Block!
</div>
```

👀 It behaves like a tiny block that stays in line.

---

### 4. 🚫 `none`

This hides the element completely from the page. It’s like it’s not there.

```html
<p style="display: none;">You can't see me!</p>
```

👀 Nothing will be shown on the page. It’s invisible and removed from layout.

---

## 💡 Summary Table

| Display Type   | Starts New Line? | Accepts Width/Height? | Visible? |
|----------------|------------------|------------------------|----------|
| `block`        | ✅ Yes           | ✅ Yes                 | ✅ Yes   |
| `inline`       | ❌ No            | ❌ No                  | ✅ Yes   |
| `inline-block` | ❌ No            | ✅ Yes                 | ✅ Yes   |
| `none`         | ❌ No            | ❌ No                  | ❌ No    |

