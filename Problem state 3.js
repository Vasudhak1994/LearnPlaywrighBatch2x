/* Problem: Given a bug's impact score (1–10), classify the severity.
9–10 → Critical (block release)
7–8 → High
4–6 → Medium
1–3 → Low

Anything else → Invalid score

Sample Input/Output:

Input: 9
Output: Severity: Critical — Block release

Input: 5
Output: Severity: Medium */

let impactScore = 5;
let severity;

if (impactScore >= 9 && impactScore <= 10) {
    severity = "Critical — Block release";
} else if (impactScore >= 7 && impactScore <= 8) {
    severity = "High";
} else if (impactScore >= 4 && impactScore <= 6) {
    severity = "Medium";
} else if (impactScore >= 1 && impactScore <= 3) {
    severity = "Low";
} else {
    severity = "Invalid score";
}

console.log("Severity: " + severity);