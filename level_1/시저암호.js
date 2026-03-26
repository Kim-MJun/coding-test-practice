function solution(s, n) {
  let result = '';

  for (const letter of s) {
    if (letter === ' ') {
      result += ' ';
    } else {
      const toASCII = letter.codePointAt();
      let changeLetter = '';

      if (toASCII >= 65 && toASCII <= 90) {
        changeLetter = String.fromCodePoint(((toASCII + n - 65) % 26) + 65);
      } else {
        changeLetter = String.fromCodePoint(((toASCII + n - 97) % 26) + 97);
      }

      result += changeLetter;
    }
  }

  return result;
}
