### 🌿 What’s a Branch?

Imagine you’re building a LEGO tower 🧱 with your friend.  
Now, you want to **try building a slide** for it... but you **don’t want to break the tower**.

So, you take **a copy of the tower** and play with that.

That’s what a **branch** is — a safe place to try new things!

---

### 🧠 Why Use Branches?

- You can **work on new features** without messing up the main code.
- If things go wrong, your main code is still safe! 🛡️

---

### 🛠️ Important Branch Commands:

| Command | What It Does (10-year-old style) |
|--------|-----------------------------|
| `git branch` | Shows your current branches — like checking your toy collection! 🎒 |
| `git branch branch-name` | Makes a new branch — like starting a new LEGO project! 🧱 |
| `git checkout branch-name` | Switch to another branch — like changing to another drawing page! 📄 |
| `git checkout -b branch-name` | Creates **and** switches to a new branch (shortcut!) 🚀 |
| `git branch -d branch-name` | Deletes a branch — like cleaning up old drawings 🧽 |
| `git merge branch-name` | Combines another branch into the one you’re in — like adding your slide to the tower! 🏗️ |

---

### 💡 Example Time!

Let’s say you want to make a “login” feature:

```bash
git branch login-feature     # 🎨 Make a new drawing page
git checkout login-feature   # 🖍️ Go to that page
```

Now you work on it... and when it’s done:

```bash
git checkout main            # 📄 Go back to main page
git merge login-feature      # 🔗 Add your drawing to the main story
```

