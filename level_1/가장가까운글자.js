function solution(s) {
  const sArr = s.split('');
  const answer = sArr.map((item, idx) => {
    let result = 0;
    let isSuccess = false;
    for (let i = idx - 1; i >= 0; i--) {
      if (sArr[idx] === sArr[i]) {
        result++;
        isSuccess = true;
        break;
      } else {
        result++;
      }
    }

    if ((result === 0 || result === idx) && !isSuccess) {
      return -1;
    }
    return result;
  });

  return answer;
}
