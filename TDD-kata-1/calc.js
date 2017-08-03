function calc(str) {
  if (!str) return 0;

  const nums = str.split(',').map((num) => +num);
  const sum = nums.reduce((a, b) => a + b);

  return sum;
}

module.exports = calc;