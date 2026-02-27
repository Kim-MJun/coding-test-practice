function solution(answers) {
  const firstAnswers = [1, 2, 3, 4, 5];
  const secondAnswers = [2, 1, 2, 3, 2, 4, 2, 5];
  const thirdAnswers = [3, 3, 1, 1, 2, 2, 4, 4, 5, 5];

  let correctAnswers = [0, 0, 0];

  answers.forEach((item, index) => {
    if (answers[index] === firstAnswers[index % 5]) {
      correctAnswers[0]++;
    }
    if (answers[index] === secondAnswers[index % 8]) {
      correctAnswers[1]++;
    }
    if (answers[index] === thirdAnswers[index % 10]) {
      correctAnswers[2]++;
    }
  });

  const maxResult = Math.max(...correctAnswers);

  const answer = [];
  correctAnswers.forEach((item, index) => {
    if (item === maxResult) {
      answer.push(index + 1);
    }
  });

  return answer;
}
