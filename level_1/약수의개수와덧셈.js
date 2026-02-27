function solution(left, right) {
  let result = 0;

  for (let i = left; i <= right; i++) {
    if (i === 1) {
      result -= 1;
      continue;
    }
    let divisorCount = 2;

    for (let j = 2; j <= i / 2; j++) {
      if (i % j === 0) divisorCount++;
    }

    if (divisorCount % 2 === 0) {
      result += i;
    } else {
      result -= i;
    }
  }

  return result;
}
