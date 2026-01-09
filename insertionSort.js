const array = [5, 8, 16, 10, 3, 14];
let comparisons = 0;

function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      comparisons++;
      arr[j + 1] = arr[j];
      j--;
    }

    // Count the final comparison when while loop breaks
    if (j >= 0) comparisons++;

    arr[j + 1] = key;
  }

  return arr;
}

const sorted = insertionSort([...array]);
console.log('Sorted Array:', sorted);
console.log('Total Comparisons:', comparisons);
