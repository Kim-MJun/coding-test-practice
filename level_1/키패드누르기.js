const solution = (numbers, hand) => {
  let result = '';

  let leftPosition = 10; // 키패드 '*'은 10으로 표현함
  let rightPosition = 12; // 키패드 '#'은 12으로 표현함

  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] === 1 || numbers[i] === 4 || numbers[i] === 7) {
      result += 'L';
      leftPosition = numbers[i];
    } else if (numbers[i] === 3 || numbers[i] === 6 || numbers[i] === 9) {
      result += 'R';
      rightPosition = numbers[i];
    } else {
      const number = numbers[i] === 0 ? 11 : numbers[i]; // 키패드 '0'은 11로 표현함
      const leftDiff = Math.abs(leftPosition - number);
      const rightDiff = Math.abs(rightPosition - number);

      const leftDiffCount = parseInt(leftDiff / 3) + (leftDiff % 3);
      const rightDiffCount = parseInt(rightDiff / 3) + (rightDiff % 3);

      if (leftDiffCount === rightDiffCount) {
        if (hand === 'left') {
          result += 'L';
          leftPosition = number;
        } else {
          result += 'R';
          rightPosition = number;
        }
      } else {
        if (leftDiffCount > rightDiffCount) {
          result += 'R';
          rightPosition = number;
        } else {
          result += 'L';
          leftPosition = number;
        }
      }
    }
  }

  return result;
};
