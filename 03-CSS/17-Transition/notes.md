## 🎨 Transition in CSS (like magic for smooth changes)

### 🧠 What is a transition?

**A transition makes changes (like color or size) happen slowly and smoothly — not suddenly.**  
It’s like when a robot slowly moves its arm instead of snapping instantly. 🦾✨

---

## 🧩 Subtopics (with super easy examples):

---

### 1. **`transition-property`**  
👉 Tells *what* you want to animate (like `background-color`, `width`, etc.)

```css
transition-property: background-color;
```

---

### 2. **`transition-duration`**  
👉 Tells *how long* the animation takes.

```css
transition-duration: 0.5s; /* half a second */
```

---

### 3. **`transition-timing-function`**  
👉 Tells *how* the speed changes over time.  
Like going slow at start, then fast, or smooth all the way.

```css
transition-timing-function: ease; /* or linear, ease-in, ease-out, ease-in-out */
```

---

### 4. **`transition-delay`**  
👉 Waits *before* starting the animation.

```css
transition-delay: 0.3s;
```

---

### 5. **Shorthand** (All in one line!)

```css
transition: background-color 0.5s ease 0.3s;
```

---

## 🧪 HTML + CSS Example (Try it!)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CSS Transition Example</title>
  <style>
    .box {
      width: 200px;
      height: 200px;
      background-color: tomato;
      transition: background-color 0.5s ease-in-out, transform 0.5s ease;
    }

    .box:hover {
      background-color: lightgreen;
      transform: scale(1.1);
    }
  </style>
</head>
<body>
  <h2>Hover over the box 👇</h2>
  <div class="box"></div>
</body>
</html>
```

