# findWords overview

**Objective:**

Implement a function named **`findWords`** that accepts two arguments: 1) an input string and 2) a dictionary. This function should return an array of words from the dictionary that can be formed by rearranging some or all of the letters in the input string. Each letter in the input string may be used up to once per word.

**Function Signature:**
```
function findWords(inputString: string, dictionary:string[]): string[]
```

**Input:**

- **`inputString`** (type: **`string`**): A string consisting of lowercase English letters. The string may contain repeated letters.
- **`dictionary`** (type: **`string[]`**): An array that specifies the universe of valid output words. You can assume all words will consist of lowercase English letters.

## First Approach

* First approach that comes to mind
    1. loop through dictionary strings
    2. For each dictionary string, I loop through each string character
    3. Then for each dictionary string character, I must loop through inputString characters to check if dictionary string character is included in inputString.
    4. If all dictionary string characters are included inputString then include this string in return array.

* This approach will come out with a time complexity of O(m*n). Probably not the ideal solution we would want in extreme cases.

## Second Approach

1. loop through inputString characters
2. For each input string character, add that string character as a key into an object with value as 1. If Object already has char as a key, then increase value by 1. We will call this object inputStrCharCount
3. Now loop through dictionary string.
4. For each dictionary string, I create a clone of inputStrCharCount object and  I loop through each string character.
5. Then for each dictionary string character, I check if inputStrCharCount object has an entry. If cloned inputStrCharCount has an entry then decrement the count of respected value. Also check if either inputStrCharCount has no entry or decrementing values reaches below 0, then mark word as invalid and do not add to return array.
6. If all dictionary string characters has a valid key/value entry and count within inputStringChars object, then include dictionary string in return array.

* This approach is better since we only need to loop through inputString once. The time complexity is O(m + n)
