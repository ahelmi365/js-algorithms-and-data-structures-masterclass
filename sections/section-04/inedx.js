function isAlphaNumeric(ch) {
  const code = ch.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // numeric (0-9)
    !(code > 64 && code < 91) && // upper alpha (A-Z)
    !(code > 96 && code < 123) // lower alpha (a-z)
  ) {
    return false;
  } else {
    return true;
  }
}

function countChars(str) {
  const obj = {};
  if (str === "") return obj;
  for (let char of str) {
    isAlphaNumeric(char) ? (obj[char] = ++obj[char] || 1) : null;
  }
  console.log(obj);

  return obj;
}

countChars("hello hi");