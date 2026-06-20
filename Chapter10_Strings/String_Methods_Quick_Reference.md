# String Methods Quick Reference

Strings are **immutable** in JavaScript — every method returns a *new* string and never mutates the original.

| Method | What it does | Example |
|---|---|---|
| `str.length` | returns the length of the string | `'hello'.length // 5` |
| `str.charAt(i)` | returns the character at index `i` | `'hello'.charAt(1) // 'e'` |
| `str.concat(other)` | joins strings and returns a new string | `'hello'.concat(' world') // 'hello world'` |
| `str.includes(substr)` | checks whether `substr` exists in the string | `'hello'.includes('ll') // true` |
| `str.indexOf(substr)` | returns the first index of `substr`, or `-1` if missing | `'hello'.indexOf('l') // 2` |
| `str.lastIndexOf(substr)` | returns the last index of `substr` | `'hello'.lastIndexOf('l') // 3` |
| `str.startsWith(prefix)` | checks if string starts with `prefix` | `'hello'.startsWith('he') // true` |
| `str.endsWith(suffix)` | checks if string ends with `suffix` | `'hello'.endsWith('lo') // true` |
| `str.slice(start, end)` | extracts a substring from `start` to `end` | `'hello'.slice(1, 4) // 'ell'` |
| `str.substring(start, end)` | extracts characters between `start` and `end` | `'hello'.substring(1, 4) // 'ell'` |
| `str.substr(start, length)` | returns a substring from `start` with `length` | `'hello'.substr(1, 3) // 'ell'` |
| `str.toLowerCase()` | returns a lowercase version | `'Hello'.toLowerCase() // 'hello'` |
| `str.toUpperCase()` | returns an uppercase version | `'Hello'.toUpperCase() // 'HELLO'` |
| `str.trim()` | removes whitespace from both ends | `'  hi  '.trim() // 'hi'` |
| `str.trimStart()` | removes leading whitespace | `'  hi'.trimStart() // 'hi'` |
| `str.trimEnd()` | removes trailing whitespace | `'hi  '.trimEnd() // 'hi'` |
| `str.replace(searchValue, newValue)` | returns a new string with the first match replaced | `'hello'.replace('l', 'r') // 'herlo'` |
| `str.replaceAll(searchValue, newValue)` | replaces all matches | `'hello'.replaceAll('l', 'r') // 'herro'` |
| `str.split(separator)` | splits the string into an array | `'a,b,c'.split(',') // ['a', 'b', 'c']` |
| `str.repeat(count)` | repeats the string `count` times | `'ha'.repeat(3) // 'hahaha'` |
| `str.padStart(targetLength, padString)` | pads the start to reach `targetLength` | `'5'.padStart(3, '0') // '005'` |
| `str.padEnd(targetLength, padString)` | pads the end to reach `targetLength` | `'5'.padEnd(3, '0') // '500'` |
| `str.match(regex)` | returns matches for a regular expression | `'abc123'.match(/\d+/) // ['123']` |
| `str.matchAll(regex)` | returns all match objects for a global regex | `Array.from('a1b2'.matchAll(/\d/g)) // ['1','2']` |
| `str.normalize(form)` | returns the Unicode normalized form | `'e\u0301'.normalize('NFC')` |
| `str.localeCompare(other)` | compares strings according to locale | `'a'.localeCompare('b') // -1` |
