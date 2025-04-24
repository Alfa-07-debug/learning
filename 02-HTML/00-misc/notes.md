### ❓ **q: Why do we use `name` and `value` in HTML forms? What's their purpose?**

Imagine you’re sending a letter to a friend 📨.

- The **`name`** is like the **label** on the envelope saying **what's inside** (like “Your favorite candy”).
- The **`value`** is the **actual candy** inside the envelope (like “chocolate”).

Now, let’s say you have a form like this:

```html
<form>
  <input type="text" name="username" value="Arif">
</form>
```

---

### ✅ **So why do we need `name` and `value`?**

1. **`name`** tells the server:  
   ➜ "Hey, this is what the data is about!"  
   ➜ Example: `"username"`

2. **`value`** is the **real answer** the user gives.  
   ➜ Example: `"Arif"`

---

### 🎯 What happens when you submit a form?

It sends data like this:

```
username=Arif
```

So if you had more inputs:

```html
<input type="text" name="email" value="hello@email.com">
<input type="password" name="password" value="1234">
```

The server gets this:

```
email=hello@email.com
password=1234
```

---

### 🚀 Summary:

| Attribute | What it does                         | Example       |
|-----------|--------------------------------------|---------------|
| `name`    | Tells the server what the data is    | `name="email"` |
| `value`   | Holds the user’s input (the answer)  | `value="hi@example.com"` |

So in short:  
🧠 **Name = Question**  
📝 **Value = Answer**

