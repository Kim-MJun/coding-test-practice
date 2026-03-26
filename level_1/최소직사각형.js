function solution(sizes) {
  const minArr = [];
  const maxArr = [];

  for (const values of sizes) {
    if (values[0] >= values[1]) {
      maxArr.push(values[0]);
      minArr.push(values[1]);
    } else {
      maxArr.push(values[1]);
      minArr.push(values[0]);
    }
  }

  return Math.max(...maxArr) * Math.max(...minArr);
}
