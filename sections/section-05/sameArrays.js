// create a function to compare 2 arrays 
// return ture if both arrays have the same length 
// AND
// array2 has square values of all values in array1


// solution 1 ---> nested loop ---> O(n2)

function same(arr1, arr2) {
  // check if both length are equals
  if (!(arr1.length === arr2.length)) {
    return false;
  }

  for (let i = 0; i < arr1.length; i++) {
    const correctIndex = arr2.indexOf(arr1[i] ** 2);
    if (correctIndex === -1) {
      return false;
    }
    console.log(arr2);
    arr2.splice(correctIndex, 1);
  }
  return true;
}

// console.log(same([1, 2, 3, 2], [4, 9, 1, 4]));



// solution 2 >> using frequancy counter pattern ---> O(n)
function same2(arr1, arr2) {
  // check if both length are equals
  if (!(arr1.length === arr2.length)) {
    return false;
  }

  const frequencyCounter1 = {};
  const frequencyCounter2 = {};

  for (const val of arr1) {
    frequencyCounter1[val] = (frequencyCounter1[val] || 0) + 1;
  }
  for (const val of arr2) {
    frequencyCounter2[val] = (frequencyCounter2[val] || 0) + 1;
  }

  console.log({ frequencyCounter1 });
  console.log({ frequencyCounter2 });

  for (const key in frequencyCounter1) {
    if (!(key ** 2 in frequencyCounter2)) {
      return false;
    }

    if (frequencyCounter2[key ** 2] !== frequencyCounter1[key]) {
      return false;
    }
  }

  return true;
}

console.log(same2([1, 2, 6, 2], [4, 36, 1, 4]));
