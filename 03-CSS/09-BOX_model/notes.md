## 🧱 **Box Model in CSS**

### 🔹 Definition:
In CSS, **every element** (like a `<div>`, `<p>`, etc.) is like a **box**.  
This box has 4 layers:  
👉 **Content → Padding → Border → Margin**

Think of it like this:

🧠 **"Stuff inside a box, with bubble wrap (padding), a cardboard wall (border), and space outside the box (margin)."**

---

### 🔶 1. **Height & Width**
- Defines how **tall** and **wide** your content area is.
```css
.box {
  height: 200px;
  width: 300px;
}
```

---

### 🔵 2. **Padding**
- Padding is the **space inside the box**, between the content and border (like bubble wrap 📦).
```css
.box {
  padding: 20px;
}
```
🔸 You can also set it separately:
```css
padding-top: 10px;
padding-right: 15px;
padding-bottom: 10px;
padding-left: 15px;
```

---

### 🟢 3. **Border**
- The **edge** or **wall** of the box.
```css
.box {
  border: 2px solid black;
}
```
🔸 You can control:
- **Width** → `2px`
- **Style** → `solid`, `dashed`, `dotted`, etc.
- **Color** → `black`, `red`, etc.

---

### 🟠 4. **Margin**
- Margin is the **space outside the box**, like the air around your box 📦🌬️
```css
.box {
  margin: 10px;
}
```
🔸 Like padding, you can do:
```css
margin-top: 5px;
margin-right: 10px;
margin-bottom: 5px;
margin-left: 10px;
```

---

## ✍️ Shorthand to write

Instead of writing 4 lines, we can write one line using this order:  
**TOP → RIGHT → BOTTOM → LEFT**

```css
padding: 10px 20px 10px 20px;
margin: 5px 10px 5px 10px;
border: 2px dashed blue;
```

OR just two values:
```css
padding: 10px 20px;  /* Top-Bottom = 10px, Left-Right = 20px */
```

---

## 🎨 Example:

```css
.box {
  width: 300px;
  height: 200px;
  padding: 20px;
  border: 3px solid green;
  margin: 15px;
}
```

🧱 Box = Content (300×200) + Padding (20) + Border (3) + Margin (15)

