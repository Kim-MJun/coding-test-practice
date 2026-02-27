function solution(n) {
  const transformBaseThree = [];

  while (true) {
    if (n >= 3) {
      transformBaseThree.push(n % 3);
      n = Math.floor(n / 3);
    } else {
      transformBaseThree.push(Number(n));
      break;
    }
  }

  const result = transformBaseThree.reverse().reduce((acc, cur, curIndex) => {
    if (curIndex === 0) {
      return acc + cur;
    } else {
      return acc + cur * 3 ** curIndex;
    }
  }, 0);

  return result;
}
