## 🧭 **Position in CSS**

### ✅ **Definition:**
The `position` property tells the browser **how to place an element** on the page.

Think of it like this:  
"Where should I sit on the screen?"

---

## 🎯 **Types of Position Values:**

---

### 1. `static` (👶 Default)

- This is the **default** position.
- Elements appear **in the normal flow** of the document.

```css
position: static;
```

➡️ You can’t move it using `top`, `left`, `bottom`, or `right`.

---

### 2. `relative` (🧍 Slightly Movable)

- Keeps the element in its **normal place**, **but** you can **move it a bit** using `top`, `left`, etc.

```css
position: relative;
top: 10px;
left: 20px;
```

📦 It moves 10px down and 20px to the right from where it was.

---

### 3. `absolute` (🕴 Floats Away from the Flow)

- **Removes** the element from the normal flow.
- Positions the element **relative to the nearest positioned parent** (not `static`).

```css
position: absolute;
top: 0;
left: 0;
```

👀 Use this for dropdowns, popups, or placing things *exactly* where you want.

---

### 4. `fixed` (📌 Stays on the Screen)

- Sticks the element to the **browser window**.
- Even if you scroll, it **doesn’t move**.

```css
position: fixed;
top: 0;
right: 0;
```

📌 Great for sticky navbars or floating buttons.

---

### 5. `z-index` (🧱 Layer Order)

- Decides what element appears **on top** of what.
- Higher number = **closer to you** (on top).

```css
z-index: 10;
```

🧇 It’s like stacking pancakes. Higher `z-index` pancakes go on top!

---

## 🧪 Example

```html
<div style="position: relative; top: 20px; left: 30px; background: lightblue;">
  I'm moved using relative!
</div>
```

