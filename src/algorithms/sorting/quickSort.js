export const getQuickSortAnimations = (array) => {
  const animations = [];
  const arr = [...array];

  const quickSort = (low, high) => {
    if (low >= high) return;

    let pivot = arr[high];
    let i = low;

    animations.push({ type: "pivot", index: high });

    for (let j = low; j < high; j++) {

    animations.push({ type: "compare", indices: [j, high] });

    if (arr[j] < pivot)
        {
        animations.push({ type: "swap", indices: [i, j] });

        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
        }
    }
    animations.push({ type: "swap", indices: [i, high] });
    [arr[i], arr[high]] = [arr[high], arr[i]];

    quickSort(low, i - 1);
    quickSort(i + 1, high);
  };

  quickSort(0, arr.length - 1);
  return animations;
};