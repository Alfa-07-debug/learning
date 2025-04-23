## 🎯 **Topic: `<video>` tag**

The **`<video>`** tag is used to **embed video files** right into your webpage so people can watch them just like on YouTube.

---

### 🌟 Basic Example:

```html
<video src="movie.mp4" controls></video>
```

This shows a little video player on your site. Let's now learn about the **cool buttons and tools** (we call them *attributes*) you can use!

---

## 🛠️ Subtopics / Attributes:

---

### 1. 🎮 **controls**  
👉 Shows the play, pause, volume, and fullscreen buttons.

```html
<video src="movie.mp4" controls></video>
```

🗣️ *"Hey browser! Show the video buttons!"*

---

### 2. 📏 **height** & **width**  
👉 Sets how tall and wide your video player is.

```html
<video src="movie.mp4" controls width="400" height="300"></video>
```

📐 Like setting the size of a TV screen on your page!

---

### 3. 🔁 **loop**  
👉 Makes the video play again and again forever (like magic!).

```html
<video src="movie.mp4" controls loop></video>
```

♻️ Loopy fun!

---

### 4. ⚡ **autoplay**  
👉 Starts playing the video **as soon as** the page loads (no clicking).

```html
<video src="movie.mp4" autoplay></video>
```

⚠️ Sometimes, autoplay might not work unless the video is **muted**!

---

### 🧠 Bonus tip: Use multiple sources!

Different browsers like different video types (like `.mp4`, `.webm`, `.ogg`). You can provide all of them using `<source>`:

```html
<video width="400" height="300" controls>
  <source src="video.mp4" type="video/mp4">
  <source src="video.webm" type="video/webm">
  Your browser does not support the video tag.
</video>
```

