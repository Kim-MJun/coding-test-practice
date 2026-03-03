function solution(n, m, section) {
  let answer = 1;
  let acc = section[0];
  for (let i = 0; i < section.length; i++) {
    if (section[i + 1] - acc >= m) {
      answer++;
      acc = section[i + 1];
    }
  }

  return answer;
}
