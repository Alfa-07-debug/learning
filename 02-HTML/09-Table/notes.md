## 📘 Topic: **Table in HTML**

### 🍽️ What is a table?

A table in HTML is like a grid — **rows and columns** to organize data neatly, just like in your school timetable or a game score chart! 🎮📅

---

## 🔤 Basic Table Structure

```html
<table>
  <tr>
    <th>Name</th>
    <th>Score</th>
  </tr>
  <tr>
    <td>Arif</td>
    <td>100</td>
  </tr>
</table>
```

🖥️ Output:

| Name | Score |
|------|-------|
| Arif | 100   |

---

## ✏️ Subtopics

---

### 🏷️ 1. **Caption in Table**

The `<caption>` tag adds a **title** to your table — like giving it a name!

```html
<table>
  <caption>Game Scores</caption>
  <tr>
    <th>Player</th>
    <th>Points</th>
  </tr>
  <tr>
    <td>Arif</td>
    <td>100</td>
  </tr>
</table>
```

🖥️ Output:
> 🏆 *Game Scores*  
> (Above the table)

---

### 🧠 2. **`<thead>` and `<tbody>` in Table**

- `<thead>` = Header part of the table (the titles).
- `<tbody>` = Body part where the real data goes.

```html
<table>
  <caption>Student Grades</caption>

  <thead>
    <tr>
      <th>Name</th>
      <th>Grade</th>
    </tr>
  </thead>

  <tbody>
    <tr>
      <td>Ali</td>
      <td>A+</td>
    </tr>
    <tr>
      <td>Fatima</td>
      <td>B</td>
    </tr>
  </tbody>
</table>
```

🖥️ Output:

| Name   | Grade |
|--------|--------|
| Ali    | A+     |
| Fatima | B      |

This helps to **organize large tables** and makes it easier to style or sort with CSS/JS later!

---

### ✅ Quick Summary:

| Tag       | What it does                         |
|-----------|--------------------------------------|
| `<table>` | Starts the table                     |
| `<tr>`    | Table row                            |
| `<th>`    | Table header (bold + centered)       |
| `<td>`    | Table data (normal cell)             |
| `<caption>` | Title for your table              |
| `<thead>` | Group of header rows                 |
| `<tbody>` | Group of body rows (data)            |

