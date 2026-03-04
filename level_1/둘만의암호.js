function solution(s, skip, index) {
  const answer = '';
  const result = [];

  const charToAscii = (char) => {
    return char.charCodeAt();
  };

  const AsciiToChar = (number) => {
    return String.fromCharCode(number);
  };

  for (let i = 0; i < s.length; i++) {
    let compareIndex = 0;
    let number = 1;

    while (true) {
      let nextAlphabetAscii = charToAscii(s[i]) + number;
      let nextAlphabet = '';

      if (nextAlphabetAscii > 122) {
        nextAlphabet = AsciiToChar(96 + ((nextAlphabetAscii % 122) % 26));
        if (nextAlphabet === '`') {
          nextAlphabet = 'z';
        }
      } else {
        nextAlphabet = AsciiToChar(nextAlphabetAscii);
      }

      if (skip.includes(nextAlphabet)) {
        number++;
        continue;
      } else {
        compareIndex++;
        number++;
        if (compareIndex >= index) {
          result.push(nextAlphabet);
          break;
        }
      }
    }
  }
  return result.join('');
}
