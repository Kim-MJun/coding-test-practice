function solution(a, b) {
  const minNum = Math.min(a, b);
  const maxNum = Math.max(a, b);
  const minSum = ((minNum - 1) * minNum) / 2;
  const maxSum = (maxNum * (maxNum + 1)) / 2;
  return maxSum - minSum;
}
