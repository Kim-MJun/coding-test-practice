function solution(n) {
  let result = 0;

  for (let i = n - 1; i > 0; i--) {
    if (n % i === 1) {
      result = i;
    }
  }

  return result;
}
