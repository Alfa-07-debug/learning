## 🎯 What is a Selector?

A **selector** in CSS is used to **target an HTML element** so you can apply styles (like color, size, background, etc.) to it.

Imagine your HTML is like a room full of toys, and the selector is how you pick which toy to decorate! 🧸✨

---

## 🧒 Basic Types of Selectors

### 1. **Element Selector**
🎯 Targets **HTML tags** directly.

```css
p {
  color: red;
}
```
➡️ This will make **all `<p>` paragraphs** red.

---

### 2. **Class Selector**
🎯 Targets elements with a **class**.

```css
.myClass {
  color: green;
}
```

HTML:
```html
<p class="myClass">Hello!</p>
```
➡️ Styles only the elements with `class="myClass"`

---

### 3. **ID Selector**
🎯 Targets **one special element** with an ID.

```css
#myId {
  font-size: 24px;
}
```

HTML:
```html
<p id="myId">I am big!</p>
```
➡️ Only this paragraph is styled, because IDs are **unique**.

---

### 4. **Universal Selector**
🎯 Targets **everything** on the page.

```css
* {
  margin: 0;
  padding: 0;
}
```
➡️ Resets default space for **all elements**.

---

### 5. **Group Selector**
🎯 Styles **many elements at once**.

```css
h1, h2, p {
  font-family: Arial;
}
```

➡️ All the `h1`, `h2`, and `p` will have the same font.

