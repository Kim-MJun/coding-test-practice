function solution(arr, divisor) {
  var resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % divisor === 0) {
      resultArr.push(arr[i]);
    }
  }

  return resultArr.length !== 0 ? resultArr.sort((a, b) => a - b) : [-1];
}
