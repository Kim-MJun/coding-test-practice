function solution(food) {
  let answer = '';

  for (let i = 1; i < food.length; i++) {
    const half = Math.floor(food[i] / 2);
    if (half > 0) {
      answer += String(i).repeat(half);
    }
  }

  return answer + '0' + answer.split('').reverse().join('');
}
