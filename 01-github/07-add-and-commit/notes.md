### 1️⃣ **Git Add**  
Before committing changes to your repository, you need to **stage** them using `git add`. This command tells Git which changes you want to include in your next commit.

#### How to Use Git Add:

- **To add a specific file**:
  
  ```bash
  git add <filename>
  ```

  Example:

  ```bash
  git add index.html
  ```

- **To add all files** (both modified and new ones):

  ```bash
  git add .
  ```

  This will add **all** the changes in your current directory and subdirectories.

- **To add specific types of files** (e.g., all `.css` files):

  ```bash
  git add *.css
  ```

#### Example of Git Add:
Let’s say you modified two files, `index.html` and `style.css`, and you want to stage them both.

```bash
git add index.html
git add style.css
```

You can also add them all at once:

```bash
git add .
```

---

### 2️⃣ **Git Commit**  
After staging your changes with `git add`, the next step is to **commit** those changes. A commit is like a snapshot of your project at a certain point in time. It includes a message describing what changes you made.

#### How to Use Git Commit:

- **Basic commit with a message**:

  ```bash
  git commit -m "Your commit message"
  ```

  Example:

  ```bash
  git commit -m "Fix layout issue in homepage"
  ```

  This will commit all staged changes and save them to your local repository.

- **Committing multiple files with a message**:
  
  If you’ve staged multiple files and want to commit them all together:

  ```bash
  git commit -m "Add new features and fix bugs"
  ```

- **Committing with a detailed message**:
  
  If you need to add a more detailed message (useful for complex changes), you can run `git commit` without the `-m` flag:

  ```bash
  git commit
  ```

  This will open your default text editor (like Vim or Nano) where you can write a detailed commit message.

---

### 🛠️ **How to Combine Add and Commit**:

You can combine both `git add` and `git commit` into one line by using `git commit -a`, but remember, this only works for files that have already been tracked by Git (i.e., files you’ve already committed before). It won’t add new untracked files.

Example:

```bash
git commit -a -m "Fix typo in README"
```

---

### Example Workflow:  
1. **Modify your files**:  
   You make changes to `index.html` and `style.css`.

2. **Stage the changes**:

   ```bash
   git add index.html style.css
   ```

3. **Commit the changes**:

   ```bash
   git commit -m "Update layout and styling"
   ```

---

### 🚀 **Git Commit Message Best Practices**:
- **Use clear, concise messages**: Describe what you’ve done in a way that’s understandable later on.
- **Use the imperative mood**: Write the message like a command. For example, "Fix bug in login" instead of "Fixed bug in login".
- **Be consistent**: Follow the same pattern for every commit message.

---

### 🎉 **Recap:**
- **`git add`** stages your changes, preparing them for the next commit.
- **`git commit`** saves the staged changes with a descriptive message.

These commands are your bread and butter for managing changes locally in Git.
