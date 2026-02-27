function solution(numbers) {
  var answer = 0;
  const numberObject = {};

  Array.from({ length: 10 }).forEach((_, index) => {
    numberObject[index] = 0;
  });

  for (const value of numbers) {
    numberObject[value]++;
  }

  for (const [key, value] of Object.entries(numberObject)) {
    if (!value) {
      answer += Number(key);
    }
  }

  return answer;
}
