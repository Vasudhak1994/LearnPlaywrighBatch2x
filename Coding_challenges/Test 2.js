function validateIdentifier(name) {
    // Step 1: Check if input is string
    if (typeof name !== "string") {
        return "Invalid: Not a string";
    }

    // Step 2: Trim spaces
    const trimmed = name.trim();

    // Step 3: Check empty
    if (trimmed.length === 0) {
        return "Invalid: Empty string";
    }

    // Step 4: Reserved words
    const reservedWords = ["let", "const", "var", "class", "fun"];
    if (reservedWo
        rds.includes(trimmed)) {
        return "Invalid: Reserved keyword";
    }

    // Step 5: Regex validation
    const identifierRegex = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

    if (!identifierRegex.test(trimmed)) {
        return "Invalid: Does not follow identifier rules";
    }

    return "Valid Identifier";
}

// Test cases
console.log(validateIdentifier("name"));       // ✅ Valid
console.log(validateIdentifier("  user1 "));   // ✅ Valid
console.log(validateIdentifier("1name"));      // ❌ Invalid
console.log(validateIdentifier("let"));        // ❌ Invalid
console.log(validateIdentifier("user@123"));   // ❌ Invalid