// PUSH operation
export const push = (stack, value) => {
  return [...stack, value];
};

// POP operation
export const pop = (stack) => {
  if (stack.length === 0) return stack;
  return stack.slice(0, -1);
};