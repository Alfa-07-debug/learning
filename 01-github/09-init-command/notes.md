## 🆕 **Git `init` Command**

### 🔹 What is `git init`?

`git init` is used to **create a new Git repository** in your project folder. It’s the first command you run when you start tracking a project with Git.

---

### 📦 What it does:

When you run:

```bash
git init
```

Git will:

- Create a hidden folder named `.git` inside your project directory.
- That `.git` folder holds **all the configuration, history, and tracking info** for your repository.
- After this, your project becomes a **local Git repository**.

---

### 🧪 Example:

```bash
mkdir my-awesome-project
cd my-awesome-project
git init
```

Now `my-awesome-project` is a Git repo! You can start tracking files with `git add`, `git commit`, etc.

---

### 📁 After `git init`, you’ll see:

```bash
Initialized empty Git repository in /your/path/my-awesome-project/.git/
```

---

### ✅ Summary

| Command      | What it Does                          |
|--------------|----------------------------------------|
| `git init`   | Initializes a new local Git repository |

