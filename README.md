# `String.prototype.contains` proposal

## Problem

Let's say I want to check whether a string has at least one of the strings in an array.

In ES5 (Not using an array)
```JS
var str = 'Hello this is a string';

// Using regex:
/Hello|is/.test(str); // true

// Using good old indexOf
str.indexOf('Hello') > -1 || str.indexOf('is'); // true

// Using ES6 (String.prototype.includes)
str.includes('Hello') || str.includes('is'); // true
```

So what happens if I want to do this with a bunch of strings `String.prototype.contains` to the rescue:

# Solution
```JS
var str = 'Hello this is a string';

str.contains(['Hello', 'is']); // true

//Let's add a string that it's not a part of str
str.contains(['Hello', 'is', 'notInString']) // true
```
So `contains` checks if at least one of the strings in the array are a part of the string that `contains` is being called on.

```JS
var str = 'Hello this is a string';

// Passing an array of strings where none are included in string that contains is called on
str.contains(['notInString']); // false
```

`String.prototype.contains` has a second parameter which is the index from where to check if any of the strings in the array are included:

```JS
var str = 'Hello this is a string';

// As before
str.contains(['Hello']); // true
// With Index
str.contains(['Hello'], 1); // false

// Multiple strings

// As before
str.contains(['Hello', 'is']); // true
// With Index
str.contains(['Hello', 'is'], 1); // true
```

Check out [`String.prototype.containsAll`](https://github.com/eorroe/String.prototype.containsAll) proposal

Here's the former discussion on [ES-Discuss](https://esdiscuss.org/topic/accepting-an-array-as-the-first-parameter-to-string-prototype-includes)
