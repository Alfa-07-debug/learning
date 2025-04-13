## 🔼 **Git Push**

### 🔹 What is `git push`?

`git push` is the command you use to **upload your local commits** to a **remote repository** like GitHub, GitLab, or Bitbucket. It transfers the commits you made using `git commit` to the server so others can access your changes.

---

### 🔧 Basic Syntax:

```bash
git push <remote> <branch>
```

Most of the time, you’ll push like this:

```bash
git push origin main
```

- `origin` → the default name for your remote repository (GitHub, GitLab, etc.)
- `main` → the branch you're pushing to (used to be `master` in older Git versions)

---

### 🧪 Example:

1. You made changes to your project.
2. You added and committed your changes:

```bash
git add .
git commit -m "Add responsive navbar"
```

3. You push your commits to GitHub:

```bash
git push origin main
```

---

### ⚠️ Common Situations:

- **Pushing for the first time after cloning:**

```bash
git push -u origin main
```

The `-u` flag sets the upstream branch so future pushes can just be:

```bash
git push
```

- **Error: `rejected` (non-fast-forward)**  
  This means someone else pushed before you. You need to pull their changes first:

```bash
git pull origin main
```

Resolve any conflicts, commit them, and then push again.

---

### 🌍 How Git Push Works Behind the Scenes:

1. Git checks which commits are in your local repo but not in the remote.
2. Git uploads those commits.
3. The remote branch (like `main`) is updated with your new commits.

---

### ✅ Summary

| Command | What It Does |
|--------|----------------|
| `git push` | Pushes to the tracked upstream branch |
| `git push origin main` | Pushes local `main` to remote `main` |
| `git push -u origin main` | Pushes and sets upstream branch |

