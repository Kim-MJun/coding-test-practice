function solution(name, yearning, photo) {
  let obj = {};
  let answer = [];
  for (let i = 0; i < name.length; i++) {
    obj[name[i]] = yearning[i];
  }

  for (let i = 0; i < photo.length; i++) {
    let sum = 0;
    for (let j = 0; j < photo[i].length; j++) {
      if (obj[photo[i][j]]) {
        sum += obj[photo[i][j]];
      }
    }
    answer.push(sum);
  }

  return answer;
}
