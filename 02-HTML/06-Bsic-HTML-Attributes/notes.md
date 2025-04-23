## 📌 Topic: **Basic HTML Attributes**  
*(Explained like you're 10!)*

---

### 🧠 What are HTML Attributes?

Attributes are **extra information** you give to HTML tags to **change how they behave** or **describe them better**.

They always go **inside the opening tag**, like this:

```html
<tagname attribute="value">Content</tagname>
```

Example:
```html
<a href="https://google.com">Go to Google</a>
```

Here, `href` is an attribute that tells the link where to go!

---

### 📋 Some Common Basic Attributes:

| Attribute      | Used With        | What It Does 🧠                                                |
|----------------|------------------|---------------------------------------------------------------|
| `href`         | `<a>` (anchor)   | Tells the **link** where to go                               |
| `src`          | `<img>`          | Tells the **image** where the picture file is                |
| `alt`          | `<img>`          | Tells what the image is about if it doesn’t load             |
| `title`        | Any tag          | Shows a **tooltip** when you hover on it                     |
| `style`        | Any tag          | Adds **inline CSS styles** directly to the tag               |
| `id`           | Any tag          | Gives the tag a **unique name** (for CSS or JS targeting)    |
| `class`        | Any tag          | Groups tags together for **styling**                         |
| `target="_blank"` | `<a>`         | Opens the link in a **new tab**                              |
| `width`, `height` | `<img>`, `<video>`, etc. | Sets the **size**                          |
| `value`        | `<input>`, `<button>` | Sets the default or current value                       |
| `placeholder`  | `<input>`        | Shows gray text hint before user types                      |
| `disabled`     | `<input>`, `<button>` | Makes the element unclickable and grayed out            |
| `readonly`     | `<input>`        | Prevents editing the input, but shows it                    |

---

### ✨ Example Using Multiple Attributes:

```html
<img src="cat.jpg" alt="Cute cat" width="200" height="150" title="This is a cat!">
```

This means:
- Show an image from `cat.jpg`
- If image doesn't load, show "Cute cat"
- Make the image 200px wide and 150px tall
- Show "This is a cat!" when you hover

---

### 🛑 Rules to Remember:

- Attributes go **inside the opening tag**
- Always written as: `name="value"`
- Separate multiple attributes with **spaces**

---

🎯 **In Short**:
> Attributes give HTML tags **superpowers** 🦸‍♂️ — they add extra info and make your webpage more useful!

