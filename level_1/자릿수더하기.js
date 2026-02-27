function solution(n) {
  var answer = 0;

  const stringN = String(n);
  // [실행] 버튼을 누르면 출력 값을 볼 수 있습니다.
  for (let i = 0; i < stringN.length; i++) {
    answer += Number(stringN[i]);
  }

  return answer;
}
