function solution(a, b, n) {
  let spare = n,
    total = 0,
    i = 0;
  while (true) {
    if (spare < a) break;
    total += Math.floor(spare / a) * b;
    spare = Math.floor(spare / a) * b + (spare % a);
  }

  return total;
}
