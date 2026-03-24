function solution(s) {
  let answer = '';
  const splitS = s.split(' ');

  splitS.forEach((item, idx) => {
    for (let i = 0; i < splitS[idx].length; i++) {
      const letter = splitS[idx][i];
      answer += i % 2 === 0 ? letter.toUpperCase() : letter.toLowerCase();
    }

    answer += idx !== splitS.length - 1 ? ' ' : '';
  });

  return answer;
}
