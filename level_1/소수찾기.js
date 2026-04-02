function solution(n) {
  let arr = new Array(n + 1).fill(1);

  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (arr[i] === 0) {
      continue;
    }

    for (let j = i ** 2; j <= n; j += i) {
      arr[j] = 0;
    }
  }

  return arr.filter((item) => item).length - 2;
}
