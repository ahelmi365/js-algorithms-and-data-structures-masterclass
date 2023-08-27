// given 2 strings
// write a function to determine if the 2nd string is an anagram of the 1st string
// an anagram is a waord. prrase, or name formed by rearranging the letters of another
// examples:
// validAnagram('', '') // true
// validAnagram('aaz', 'zza') // false
// validAnagram('aaz', 'zza') // false
// validAnagram('anagram', 'nagaram') // true

function validAnagram(str1, str2) {
  if (str1.length !== str2.length || str1 === "" || str2 === "") {
    return false;
  }
  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const char of str1) {
    frequencyCounter1[char]
      ? (frequencyCounter1[char] += 1)
      : (frequencyCounter1[char] = 1);
  }

  for (const char of str2) {
    frequencyCounter2[char]
      ? (frequencyCounter2[char] += 1)
      : (frequencyCounter2[char] = 1);
  }
    console.log({ frequencyCounter1 });
    console.log({ frequencyCounter2 });
  for (const key in frequencyCounter1) {
    if (!(key in frequencyCounter2)) {
      //   console.log(`${key} is not in frequencyCounter2`);
      return false;
    }
    if (frequencyCounter2[key] !== frequencyCounter1[key]) {
      //   console.log(`${key} is not the same requency`);
      return false;
    }
  }
  return true;
}

console.log(validAnagram("anagram", "nagaram")); // true
// console.log(validAnagram("", "")); // true
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("aaz", "zza")); // false
// console.log(validAnagram("anagramx", "nagaramx")); // true

const assert = require("assert");
// assert.strictEqual(validAnagram("anagram", "nagaram"), true);
// assert.strictEqual(validAnagram("", ""), false);
// assert.strictEqual(validAnagram("aaz", "zza"), false);
// assert.strictEqual(validAnagram("anagramx", "xanagram"), true);
