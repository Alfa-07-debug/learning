## 🖼️ **Topic: `iframe` in HTML**  
An **`iframe`** is used to **show another website or webpage inside your current page** — kind of like watching a YouTube video inside your own site!

It’s short for "**inline frame**".

---

### 🚀 Example of `iframe`:

```html
<iframe src="https://www.example.com" width="500" height="300"></iframe>
```

This will show **example.com** inside your page like a mini window!

---

## 🛠️ Useful Attributes of `<iframe>`

Let’s check out the cool tools (attributes) you can use with `iframe`:

---

### 1. **`src`** – Source of the content  
👉 Tells which webpage to show inside the iframe.

```html
<iframe src="https://example.com"></iframe>
```

---

### 2. **`width` & `height`** – Size of the frame  
👉 You can control how wide and tall your iframe is.

```html
<iframe src="..." width="600" height="400"></iframe>
```

---

### 3. **`title`** – For accessibility  
👉 Gives a name to the frame so screen readers can understand it.

```html
<iframe src="..." title="Map of the world"></iframe>
```

---

### 4. **`frameborder`** – Show or hide the border (old, but still used)  
```html
<iframe src="..." frameborder="0"></iframe> <!-- No border -->
```

---

### 5. **`allowfullscreen`** – Allow fullscreen mode (like for YouTube)  
```html
<iframe src="..." allowfullscreen></iframe>
```

---

### 6. **`loading`** – Control how it loads  
👉 You can make it lazy-load (load only when needed) for speed!

```html
<iframe src="..." loading="lazy"></iframe>
```

---

### 7. **`sandbox`** – Add security rules  
👉 You can stop the iframe from doing dangerous things (like running scripts).

```html
<iframe src="..." sandbox></iframe>
```

---

## 🧠 Fun Use Cases of `iframe`:
- Embedding a **YouTube video**
- Showing a **Google Map**
- Showing another **website** inside yours
- Embedding **forms**, **games**, or **PDFs**

---

### 🎥 Example: Embedding a YouTube Video

```html
<iframe 
  width="560" 
  height="315" 
  src="https://www.youtube.com/embed/dQw4w9WgXcQ" 
  title="YouTube video" 
  frameborder="0" 
  allowfullscreen>
</iframe>
```


