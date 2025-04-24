### 1. **`text-align`**  
👉 Controls how the text is aligned.

```css
p {
  text-align: center; /* can be left, right, center, justify */
}
```

| Value     | What It Does                          |
|-----------|----------------------------------------|
| `left`    | Text aligns to the left (default).     |
| `right`   | Text aligns to the right.              |
| `center`  | Text appears in the center.            |
| `justify` | Spaces the text to line up both sides. |

---

### 2. **`text-decoration`**  
👉 Adds lines to the text.

```css
a {
  text-decoration: none; /* can be underline, overline, line-through */
}
```

| Value         | What It Does                      |
|---------------|------------------------------------|
| `none`        | Removes any decoration.            |
| `underline`   | Adds a line below the text.        |
| `overline`    | Adds a line above the text.        |
| `line-through`| Adds a line through the text.      |

---

### 3. **`font-weight`**  
👉 Changes how **bold** the text is.

```css
h1 {
  font-weight: bold; /* or 100 to 900 */
}
```

| Value    | What It Means    |
|----------|------------------|
| `normal` | Regular weight   |
| `bold`   | Bold             |
| `lighter`, `bolder` | Relative weight |
| `100` to `900` | Numeric weight (e.g., `400` = normal, `700` = bold) |

---

### 4. **`font-family`**  
👉 Changes the style of the font.

```css
body {
  font-family: Arial, sans-serif;
}
```

You can use:
- Default fonts like `Arial`, `Verdana`, `Times New Roman`
- Web-safe combinations like `Georgia, serif`
- Custom fonts with `@font-face` or Google Fonts

---

### 5. **`line-height`**  
👉 Controls the vertical spacing between lines of text.

```css
p {
  line-height: 1.5; /* or 20px */
}
```

Bigger value = more space between lines 📏

---

### 6. **`text-transform`**  
👉 Changes the case (uppercase/lowercase) of letters.

```css
h2 {
  text-transform: uppercase;
}
```

| Value        | What It Does                          |
|--------------|----------------------------------------|
| `uppercase`  | Makes all letters BIG                  |
| `lowercase`  | Makes all letters small                |
| `capitalize` | Capitalizes the first letter of each word |

