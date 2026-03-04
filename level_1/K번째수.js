function solution(array, commands) {
  const answer = [];

  commands.forEach((item) => {
    const firstNum = item[0];
    const lastNum = item[1];
    const resultNum = item[2];

    const sliceAndSortArr = array
      .slice(firstNum - 1, lastNum)
      .sort((a, b) => a - b);

    answer.push(sliceAndSortArr[resultNum - 1]);
  });

  return answer;
}
