function solution(t, p) {
  let answer = 0;
  const pLen = p.length;
  const tLen = t.length;
  const numberP = Number(p);

  for (let i = 0; i < tLen - pLen + 1; i++) {
    const subStringT = Number(t.substring(i, pLen + i));
    if (subStringT <= numberP) {
      answer++;
    }
  }

  return answer;
}
