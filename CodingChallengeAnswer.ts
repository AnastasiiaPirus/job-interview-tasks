function firstNonRepeatedCharacter(s: string) {
    s = s.toLowerCase();

    const charCount: { [key: string]: number } = {};

    for (const char of s) {
        charCount[char] = (charCount[char] || 0) + 1;
    }

    for (const char of s) {
        if (charCount[char] === 1) {
            return char;
        }
    }
    return '';
}
console.log(firstNonRepeatedCharacter("hello"));
console.log(firstNonRepeatedCharacter("aabcc"));
console.log(firstNonRepeatedCharacter("aabbcc"));

