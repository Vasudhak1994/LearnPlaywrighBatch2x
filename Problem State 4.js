/* Problem: Given the percentage of test cases passed in a CI build, report build health.

100% → Green Build
90–99% → Stable (investigate failures)
70–89% → Unstable
Below 70% → Broken Build (block deployment)

Sample Input/Output:
Input: 95
Output: 🟡 Stable — Investigate failures

Input: 65
Output: 🔴 Broken Build — Block deployment */

let percentagePassed = 65;
let buildHealth;

if (percentagePassed === 100) {
    buildHealth = "🟢 Green Build";
} else if (percentagePassed >= 90 && percentagePassed <= 99) {
    buildHealth = "🟡 Stable — Investigate failures";
} else if (percentagePassed >= 70 && percentagePassed <= 89) {
    buildHealth = "🟠 Unstable";
} else {
    buildHealth = "🔴 Broken Build — Block deployment";
}

console.log(buildHealth); 