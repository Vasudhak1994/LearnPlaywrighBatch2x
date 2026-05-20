/* Problem: Track failed login attempts. Lock the account after 3 failed attempts.

Sample Input/Output:

Input: attempts = 2
Output: 1 attempt left before lockout

Input: attempts = 3
Output: 🔒 Account Locked — Contact support

Input: attempts = 0
Output: Login successful */

let failedAttempts = 6;
let message;

if (failedAttempts === 0) {
    message = "Login successful";
} else if (failedAttempts < 3) {
    message = `${3 - failedAttempts} attempt left before lockout`;
} else {
    message = "🔒 Account Locked — Contact support";
}

console.log(message);