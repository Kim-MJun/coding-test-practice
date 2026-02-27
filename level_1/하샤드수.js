function solution(x) {
  let xNum = x;
  let numArr = [];

  while (true) {
    if (Number(xNum / 10) < 1) {
      numArr.push(xNum % 10);
      break;
    } else {
      numArr.push(xNum % 10);
      xNum = Math.floor(xNum / 10);
    }
  }

  const numArrSum = numArr.reduce((acc, cur) => acc + cur, 0);
  return Number.isInteger(x / numArrSum);
}
