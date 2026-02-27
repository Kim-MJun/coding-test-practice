function solution(cards1, cards2, goal) {
  let answer = 'Yes';
  let cards1Num = 0,
    cards2Num = 0;

  for (const item of goal) {
    if (item === cards1[cards1Num]) {
      cards1Num++;
    } else if (item === cards2[cards2Num]) {
      cards2Num++;
    } else {
      answer = 'No';
      break;
    }
  }

  return answer;
}
