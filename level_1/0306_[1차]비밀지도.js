function solution(n, arr1, arr2) {
  let answer = [];

  for (let i = 0; i < n; i++) {
    let sumArr = [];
    let arr1iNum = arr1[i];
    let arr2iNum = arr2[i];
    let arrIndex = 0;

    for (let j = 0; j < n; j++) {
      if (arr1iNum % 2 === 1 || arr2iNum % 2 === 1) {
        sumArr[arrIndex++] = '#';
      } else if (arr1iNum === 0) {
        sumArr[arrIndex++] = ' ';
      } else {
        sumArr[arrIndex++] = ' ';
      }
      arr1iNum = parseInt(arr1iNum / 2);
      arr2iNum = parseInt(arr2iNum / 2);
    }
    answer.push(sumArr.reverse().join(''));
  }

  return answer;
}
