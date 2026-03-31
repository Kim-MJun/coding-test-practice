function solution(nums) {
  const pick = nums.length / 2;
  const uniqueArrLen = [...new Set(nums)].length;

  return pick <= uniqueArrLen ? pick : uniqueArrLen;
}
