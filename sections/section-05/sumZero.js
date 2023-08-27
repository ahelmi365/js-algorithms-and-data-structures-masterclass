function sumZero(arr) {
  // return the first pair where the sum is =0
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex < rightIndex) {
    const sum = arr[leftIndex] + arr[rightIndex];
    if (sum === 0) {
      return [arr[leftIndex], arr[rightIndex]];
    } else if (sum > 0) {
      rightIndex--;
    } else {
      leftIndex++;
    }
  }
}

const res = sumZero([-3, -2, -1, 1, 4, 4]);
console.log({ res });
