function solution(nums) {
  let count = 0;

  const isPrime = (n) => {
    let result = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) {
        result = false;
        break;
      }
    }
    return result;
  };

  for (let i = 0; i < nums.length - 2; i++) {
    for (let j = i + 1; j < nums.length - 1; j++) {
      for (let k = j + 1; k < nums.length; k++) {
        const num = nums[i] + nums[j] + nums[k];
        if (isPrime(num)) {
          count++;
        }
      }
    }
  }

  return count;
}
