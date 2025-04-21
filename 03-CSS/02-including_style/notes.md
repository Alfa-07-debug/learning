## 🌟 1. **Inline CSS** (Quick Fix Style 🎯)

You write CSS **directly inside the tag** using the `style` attribute.

### Example:

```html
<p style="color: red;">I am red!</p>
```

🎒 Good for small, quick styles.  
🚫 Not great for big websites.

---

## 🧠 2. **Internal CSS** (Style Inside HTML 🏠)

You put CSS inside a `<style>` tag in the `<head>` section.

### Example:

```html
<!DOCTYPE html>
<html>
<head>
  <style>
    h1 {
      color: blue;
      text-align: center;
    }
  </style>
</head>
<body>
  <h1>Hello Arif!</h1>
</body>
</html>
```

✅ Great for small pages or testing.

---

## 🌍 3. **External CSS** (Best Practice for Big Projects 🏗️)

You create a **separate CSS file**, like `style.css`, and **link** it in your HTML.

### `index.html`

```html
<head>
  <link rel="stylesheet" href="style.css">
</head>
```

### `style.css`

```css
h1 {
  color: green;
  font-size: 40px;
}
```

🎉 This keeps HTML clean and makes it easy to reuse styles.

---

### 🧪 Summary Chart:

| Type         | Where to Write    | Good For          |
|--------------|-------------------|-------------------|
| Inline       | Inside tag        | Small quick styles |
| Internal     | Inside `<style>`  | Single page apps  |
| External     | In `.css` file    | Big projects 💪   |

