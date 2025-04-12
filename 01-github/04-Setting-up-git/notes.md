### 🧰 **What is Git Setup?**
Setting up Git means preparing your computer to **track** and **manage** your code projects.  
You need to install Git on your computer, so it can save versions of your projects (like saving different drafts of your homework 📝).

---

### 🛠️ **How to Set Up Git on Your Computer**

#### 1. **Download and Install Git**
   - Go to the official Git website: [Git Downloads](https://git-scm.com/)
   - Choose the right version for your operating system (Windows, macOS, Linux).
   - Download and follow the installation steps. Keep the default options during installation (they're good for beginners).

#### 2. **Check if Git is Installed**
   Once Git is installed, open **Command Prompt** (on Windows) or **Terminal** (on macOS/Linux) and type:

   ```bash
   git --version
   ```

   You should see something like:

   ```bash
   git version 2.x.x
   ```

   This means Git is successfully installed ✅

#### 3. **Configure Your Git Identity**
   Now, tell Git who you are, so it can track your changes. This step is like writing your name on your homework!

   In **Command Prompt** or **Terminal**, type these commands (replace the placeholders with your details):

   ```bash
   git config --global user.name "Your Name"
   git config --global user.email "your-email@example.com"
   ```

   This will set your **username** and **email** so Git can label your changes correctly.

#### 4. **Check Your Configuration**
   To confirm everything is set up properly, type this command:

   ```bash
   git config --list
   ```

   It should show your **username** and **email** settings.

---

### 🚀 **Now You’re Ready to Use Git!**
- You can now create **Git repositories**, track your code, and upload it to **GitHub**.
- Git will track all your changes, like keeping different versions of your homework 📚.

