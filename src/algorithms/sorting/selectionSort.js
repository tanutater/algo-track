export const getSelectionSortAnimations = (array) => {
  const animations = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    let minIdx = i;

    for (let j = i + 1; j < arr.length; j++) {
      animations.push({ type: "compare", indices: [j, minIdx] });

      if (arr[j] < arr[minIdx]) {
        minIdx = j;
        animations.push({ type: "newMin", index: minIdx });
      }
    }

    if (minIdx !== i) {
      animations.push({ type: "swap", indices: [i, minIdx] });
      [arr[i], arr[minIdx]] = [arr[minIdx], arr[i]];
    }
  }

  return animations;
};