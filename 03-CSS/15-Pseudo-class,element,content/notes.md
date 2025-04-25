### 🔹 Pseudo-Classes

#### ✅ Definition:
A **pseudo-class** is used to define a special state of an HTML element. It can style elements when they are in a certain state (like hovered, focused, first-child, etc.).

#### ✅ Syntax:
```css
selector:pseudo-class {
  property: value;
}
```

#### ✅ Common Pseudo-Classes:

| Pseudo-Class        | Description                                 |
|---------------------|---------------------------------------------|
| `:hover`            | Applies when mouse hovers over the element  |
| `:focus`            | Applies when element (like input) is focused |
| `:active`           | Applies when an element is being clicked    |
| `:nth-child(n)`     | Targets the nth child of its parent         |
| `:first-child`      | Targets the first child of its parent       |
| `:last-child`       | Targets the last child                      |
| `:checked`          | Targets checked checkboxes/radio buttons    |

#### ✅ Example:
```html
<button>Hover Me</button>

<style>
  button:hover {
    background-color: blue;
    color: white;
  }
</style>
```

---

### 🔹 Pseudo-Elements

#### ✅ Definition:
A **pseudo-element** allows you to style specific parts of an element. For example, the first letter, first line, or to insert content.

#### ✅ Syntax:
```css
selector::pseudo-element {
  property: value;
}
```

#### ✅ Common Pseudo-Elements:

| Pseudo-Element   | Description                                     |
|------------------|-------------------------------------------------|
| `::before`       | Inserts content before an element               |
| `::after`        | Inserts content after an element                |
| `::first-letter` | Targets the first letter of text in an element |
| `::first-line`   | Targets the first line of text in an element   |
| `::selection`    | Styles text when selected                      |

#### ✅ Example:
```html
<p>Hello world!</p>

<style>
  p::first-letter {
    font-size: 200%;
    color: red;
  }
</style>
```

---

### 🔹 Pseudo-Content (`::before` and `::after`)

#### ✅ What is it?
This refers to using the `content` property with `::before` and `::after` to add decorative content.

#### ✅ Example:
```html
<p class="quote">This is a quote</p>

<style>
  .quote::before {
    content: "❝";
    color: gray;
    font-size: 24px;
  }

  .quote::after {
    content: "❞";
    color: gray;
    font-size: 24px;
  }
</style>
```

This will visually add quote marks around the text using only CSS.

---

### ✅ Summary:

| Type             | Symbol     | Purpose                                           |
|------------------|------------|---------------------------------------------------|
| Pseudo-class     | `:`        | Style based on element state (hover, focus, etc.) |
| Pseudo-element   | `::`       | Style parts of an element (first letter, line)    |
| Pseudo-content   | `::before/after + content` | Add virtual content via CSS       |

