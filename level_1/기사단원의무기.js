function solution(number, limit, power) {
  let answer = 0;
  const divisorArr = [1];

  for (let i = 1; i <= number; i++) {
    if (i === 1) continue;

    let divisorCount = 0;
    for (let j = 1; j <= i / 2; j++) {
      if (i % j === 0) {
        divisorCount++;
      }
    }

    divisorArr.push(divisorCount + 1);
  }

  for (let i = 0; i < divisorArr.length; i++) {
    if (divisorArr[i] <= limit) {
      answer += divisorArr[i];
    } else {
      answer += power;
    }
  }

  return answer;
}
