## 🎬 **CSS Animations** (Creating Smooth Motion on Your Webpage)

### 🧠 What is CSS Animation?

**CSS Animations** allow you to make things move, change, and grow on your webpage over time! Instead of just static content, you can animate elements like buttons, text, images, and much more.

With CSS animations, you define keyframes (steps of the animation) and how it should change over time. This makes it feel like your webpage is alive! 🕺💃

---

## 🧩 **Subtopics:**

---

### 1. **Animation Properties**

There are a few important properties you need to know when working with animations.

- **`animation-name`**: The name of the animation (this will match the name you give to your keyframes).
- **`animation-duration`**: How long the animation takes to complete.
- **`animation-timing-function`**: The speed curve of the animation (e.g., how fast it starts and ends).
- **`animation-delay`**: How long to wait before the animation starts.
- **`animation-iteration-count`**: How many times the animation should run.
- **`animation-direction`**: Defines whether the animation should play in reverse or alternate between normal and reverse.
- **`animation-fill-mode`**: Specifies how styles are applied before and after the animation runs.
- **`animation-play-state`**: Controls whether the animation is running or paused.

---

### 2. **CSS Keyframes**

You can use **`@keyframes`** to define your animation. The **keyframes** are the specific points in the animation where you can define how the element will look at different times.

- **Example:**

```css
@keyframes example {
  from {
    background-color: red;
  }
  to {
    background-color: yellow;
  }
}
```

---

### 3. **Animation Shorthand**

To make things simpler, you can combine all the animation properties into one shorthand declaration.

- **Shorthand Example:**

```css
animation: move 2s ease-in-out 1s infinite alternate;
```

This is the shorthand for:
```css
animation-name: move;
animation-duration: 2s;
animation-timing-function: ease-in-out;
animation-delay: 1s;
animation-iteration-count: infinite;
animation-direction: alternate;
```

---

### 4. **Percentage in Animation (For Control)**

You can use percentages inside `@keyframes` to control the exact behavior of the animation at different points in time.

- **Example:**

```css
@keyframes slide {
  0% {
    transform: translateX(0);
  }
  50% {
    transform: translateX(100px);
  }
  100% {
    transform: translateX(0);
  }
}
```

Here:
- At **0%**, the element starts at its original position.
- At **50%**, it moves **100px** to the right.
- At **100%**, it returns back to the original position.

---

## 🧪 **Example: CSS Animation in Action**

Here’s an example of a simple animation using the properties we just learned!

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>CSS Animation Example</title>
  <style>
    @keyframes moveBox {
      0% {
        background-color: red;
        transform: translateX(0);
      }
      50% {
        background-color: yellow;
        transform: translateX(200px);
      }
      100% {
        background-color: green;
        transform: translateX(0);
      }
    }

    .box {
      width: 100px;
      height: 100px;
      background-color: red;
      animation: moveBox 3s ease-in-out infinite;
    }
  </style>
</head>
<body>
  <div class="box"></div>
</body>
</html>
```

---

### 💡 What happens here?
- The **box** moves from its starting position to the right and back to the left.
- It changes color from **red** to **yellow** and then to **green**.
- The animation lasts **3 seconds** and repeats **infinite times**.

---

