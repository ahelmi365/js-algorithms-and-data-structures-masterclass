function countUniqueValues(arr) {
  // const unqValues = Array.from(new Set(arr))
  // or
  if (arr.length == 0) return 0;
  let i = 0;

  for (let j = 1; j < arr.length; j++) {
    if (arr[i] !== arr[j]) {
      i++;
      arr[i] = arr[j];
    }
  }

  return i + 1;
}

const res1 = countUniqueValues([1, 1, 1, 2, 2, 3, 4, 5, 5, 7]);
const res2 = countUniqueValues([]);

console.log(res1);
console.log(res2);
