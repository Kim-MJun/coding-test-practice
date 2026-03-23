function solution(arr) {
  const answer = [];
  let prev = -1;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== prev) {
      answer.push(arr[i]);
      prev = arr[i];
    }
  }

  return answer;
}
