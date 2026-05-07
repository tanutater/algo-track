export const getCyclicSortAnimations = (array) => {
  const animations = [];
  const arr = [...array];

  let i = 0;
    while (i < arr.length) {
    const correct = arr[i] - 1;

    // 🟡 compare
    animations.push({ type: "compare", indices: [i, correct] });

    if (arr[i] !== arr[correct]) {
        // 🔵 swap
        animations.push({ type: "swap", indices: [i, correct] });

        [arr[i], arr[correct]] = [arr[correct], arr[i]];
        } else {
        i++;
        }
    }

  return animations;
};