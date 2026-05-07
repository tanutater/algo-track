export const getMergeSortAnimations = (array) => {
  const animations = [];
  const arr = [...array];

  mergeSort(arr, 0, arr.length - 1, animations);

  return animations;
};

function mergeSort(arr, left, right, animations) {
  if (left >= right) return;

  const mid = Math.floor((left + right) / 2);

  // DIVIDE STEP
  animations.push({
    type: "divide",
    left,
    mid,
    right,
  });

  mergeSort(arr, left, mid, animations);
  mergeSort(arr, mid + 1, right, animations);

  merge(arr, left, mid, right, animations);
}

function merge(arr, left, mid, right, animations) {
  const temp = [];

  let i = left;
  let j = mid + 1;

  // MERGING STEP
  animations.push({
    type: "merge",
    left,
    mid,
    right,
  });

  while (i <= mid && j <= right) {
    animations.push({
      type: "compare",
      indices: [i, j],
    });

    if (arr[i] <= arr[j]) {
      temp.push(arr[i]);
      i++;
    } else {
      temp.push(arr[j]);
      j++;
    }
  }

  while (i <= mid) {
    temp.push(arr[i]);
    i++;
  }

  while (j <= right) {
    temp.push(arr[j]);
    j++;
  }

  for (let k = left; k <= right; k++) {
    arr[k] = temp[k - left];

    animations.push({
      type: "overwrite",
      index: k,
      value: arr[k],
    });
  }
}