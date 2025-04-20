## 🔗 1. Anchor Tag (`<a href="">`)
This tag is like a **magic portal** to another webpage!

```html
<a href="https://www.google.com">Go to Google</a>
```

👉 This will be a **clickable link** that opens Google.

You can also open the link in a **new tab**:

```html
<a href="https://www.google.com" target="_blank">Open Google in new tab</a>
```

---

## 🖼️ 2. Image Tag (`<img src="" alt="">`)
The `<img>` tag is used to show **pictures**.

```html
<img src="cat.jpg" alt="A cute cat">
```

- `src`: the **link or path** to the image
- `alt`: shows **text if image can’t load**, also good for blind users

You can even use an online image:

```html
<img src="https://placekitten.com/200/300" alt="Kitten">
```

---

## 📧 3. Linking to Email, Phone, File, or Sections

### ✉️ Email link:

```html
<a href="mailto:someone@example.com">Send Email</a>
```

### 📞 Phone link:

```html
<a href="tel:+1234567890">Call Me</a>
```

### 📁 Link to a file:

```html
<a href="myfile.pdf" download>Download PDF</a>
```

### 🔗 Jump to a section:

```html
<a href="#about">Go to About Section</a>

<!-- somewhere down the page -->
<h2 id="about">About Me</h2>
```

---

## 🌟 4. Adding a Favicon
A **favicon** is that tiny image on the browser tab.

```html
<!-- Inside <head> -->
<link rel="icon" href="favicon.ico" type="image/x-icon">
```

🧠 Tip: You can use `.ico`, `.png`, or `.svg` files.

---

## 🎁 Arif’s Magic Recap:

| Feature         | Tag                      | Purpose                     |
|----------------|--------------------------|-----------------------------|
| Link           | `<a href="">`            | Create clickable links      |
| Image          | `<img src alt>`          | Show images on your site    |
| Email/Phone    | `mailto:` / `tel:`       | Special links for contact   |
| Sections       | `#id`                    | Jump to part of the page    |
| Favicon        | `<link rel="icon" ...>`  | Icon on browser tab         |

