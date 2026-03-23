function solution(n, m) {
  let result = [];
  const min = Math.min(n, m);
  const max = Math.max(n, m);
  let count = 1;

  // 최대공약수 구하기
  while (count <= min) {
    if (min % count === 0 && max % count === 0) {
      result[0] = count;
    }
    count++;
  }

  count = 1;

  // 최소공배수 구하기
  while (true) {
    if ((max * count) % min === 0) {
      result[1] = max * count;
      break;
    }
    count++;
  }

  return result;
}
