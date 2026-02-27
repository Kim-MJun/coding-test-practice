function solution(k, score) {
  const saveResultArr = [];
  var answer = [];

  const findMin = (arr) => {
    return Math.min(...arr);
  };

  for (let i = 0; i < score.length; i++) {
    if (i < k) {
      saveResultArr.push(score[i]);
      const minValue = findMin(saveResultArr);
      answer.push(minValue);
    } else {
      const minValue = findMin(saveResultArr);
      if (score[i] > minValue) {
        const minIndex = saveResultArr.indexOf(minValue);
        saveResultArr.splice(minIndex, 1);
        saveResultArr.push(score[i]);
        const newMinValue = findMin(saveResultArr);
        answer.push(newMinValue);
      } else {
        answer.push(minValue);
      }
    }
  }

  return answer;
}
