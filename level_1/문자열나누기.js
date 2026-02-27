function solution(s) {
  var answer = 0,
    i;
  var criStr = s[0],
    criNum = 1,
    otherNum = 0;
  for (i = 1; i < s.length; i++) {
    if (criNum === otherNum) {
      answer++;
      criNum = 1;
      otherNum = 0;
      criStr = s[i];
      continue;
    }

    if (criStr === s[i]) {
      criNum++;
    } else {
      otherNum++;
    }
  }
  answer++;
  return answer;
}
