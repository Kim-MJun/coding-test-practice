function solution(n) {
  let num = n;
  const answer = [];
  while (num / 10 != 0) {
    answer.push(num % 10);
    num = Math.floor(num / 10);
  }
  return answer;
}
