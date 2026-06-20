/* <!-- ## JavaScript Variable Creation Rules

### **1. Variable Declaration Methods**

```javascript
// var (function-scoped, hoisted)
var name = "John";

// let (block-scoped, modern choice)
let age = 25;

// const (block-scoped, cannot be reassigned)
const email = "john@example.com";
```

---

### **2. Naming Rules**

**Must follow:**
- Start with letter, underscore `_`, or dollar sign `$`
- Can contain letters, numbers, underscores, dollar signs
- Case-sensitive: `name` ≠ `Name`
- No spaces or special characters (except `_` and `$`)

**Examples:**
```javascript
// ✅ Valid
let firstName = "Alice";
let _age = 30;
let $price = 100;
let user123 = "Bob";

// ❌ Invalid
let 123user = "invalid";      // Cannot start with number
let first-name = "invalid";   // Cannot use hyphen
let first name = "invalid";   // Cannot use space
let let = "invalid";          // Cannot use reserved keywords
```

---

### **3. Key Differences**

| Feature | `var` | `let` | `const` |
|---------|-------|-------|--------|
| Scope | Function | Block | Block |
| Reassign | Yes | Yes | No |
| Redeclare | Yes | No | No |
| Hoisting | Yes (undefined) | Yes (error) | Yes (error) |

```javascript
// var example
function test() {
  if (true) {
    var x = 10;
  }
  console.log(x); // 10 (accessible outside if block)
}

// let example
function test2() {
  if (true) {
    let y = 20;
  }
  console.log(y); // ReferenceError (block-scoped)
}

// const example
const PI = 3.14;
PI = 3.15; // ❌ TypeError: Assignment to constant variable

// const for objects - can modify properties, not reassign
const user = { name: "Alice" };
user.name = "Bob"; // ✅ OK
user = {}; // ❌ Error
```

---

### **4. Best Practices**

```javascript
// ✅ Use const by default
const greeting = "Hello";

// ✅ Use let when you need to reassign
let count = 0;
count++;

// ❌ Avoid var (legacy)
// var oldStyle = "outdated";
```

**Quick Tip:** Use `const` for everything, switch to `let` only when you need to reassign a variable. --> */