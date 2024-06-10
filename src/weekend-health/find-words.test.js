import { findWords } from "./find-words.js";

test('valid use cases', () => {
    expect(findWords("ate", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual(["ate", "eat", "tea"])
    expect(findWords("oogd", ["ate", "eat", "tea", "dog", "do", "god", "goo", "go", "good"])).toStrictEqual(["dog", "do", "god", "goo", "go", "good"])
})

test('empty inputString or empty dictionary', () => {
    expect(findWords('', ['test'])).toStrictEqual([])
    expect(findWords('test', [])).toStrictEqual([])
})

test('edge case with empty string within dictionary', () => {
    expect(findWords('test', [''])).toStrictEqual([])
    expect(findWords('test', ['', 'set'])).toStrictEqual(['set'])
})

test('single char input string', () => {
    expect(findWords('a', ['bad', 'at'])).toStrictEqual([])
})

test('single string dictionary', () => {
    expect(findWords('a', ['bad'])).toStrictEqual([])
})

test('char count of dictionary string is higher than count of inputString for specific letter', () => {
    expect(findWords('a', ['aa'])).toStrictEqual([])
})