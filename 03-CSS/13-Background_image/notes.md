## 🎨 **Background Image in CSS**

### ✅ **Definition:**
The `background-image` property is used to **set an image as the background** of an element.

It’s like putting wallpaper on your website wall! 🧱🖼️

---

### 🧾 **Basic Syntax:**

```css
selector {
  background-image: url("image-link.jpg");
}
```

📌 Example:

```css
body {
  background-image: url("https://example.com/bg.jpg");
}
```

---

## 🔧 **Useful Background Attributes:**

---

### 1. **`background-repeat`**  
🎯 Controls whether the background image **repeats** or not.

```css
background-repeat: no-repeat;
```

- `repeat` (default): Repeats both horizontally and vertically.
- `no-repeat`: Shows the image **once**.
- `repeat-x`: Repeats **horizontally** only.
- `repeat-y`: Repeats **vertically** only.

---

### 2. **`background-size`**  
📐 Resizes the background image.

```css
background-size: cover;
```

- `auto`: Default, original image size.
- `cover`: Covers the whole area (may crop).
- `contain`: Fits image without cropping.
- `100px 200px`: Custom size.

---

### 3. **`background-position`**  
📍 Tells the browser **where** to place the image.

```css
background-position: center;
```

- `left top`, `right bottom`, `center`, `50% 50%`, etc.

---

### 4. **`background-attachment`**  
📌 Controls whether the background image **scrolls with the page** or stays **fixed**.

```css
background-attachment: fixed;
```

- `scroll` (default): Scrolls with content.
- `fixed`: Stays in place.
- `local`: Scrolls with the element itself.

---

### 5. **`background` (shorthand)**  
🧃 Packs all the background properties into one line!

```css
background: url("bg.jpg") no-repeat center/cover fixed;
```

---

## 💡 Example With All Properties:

```css
body {
  background-image: url("stars.jpg");
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-attachment: fixed;
}
```

🌌 This makes your background look like a full-screen starry sky that stays fixed!

