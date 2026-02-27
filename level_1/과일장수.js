function solution(k, m, score) {
  let result = 0;
  const sortScore = score.sort((a, b) => b - a);
  let currentIndex = m;

  while (true) {
    const cutMSize = score.slice(currentIndex - m, currentIndex);

    const isPossible = cutMSize.length < m;

    if (isPossible) {
      break;
    }

    result += cutMSize[m - 1] * m;
    currentIndex += m;

    if (score.length < currentIndex) {
      break;
    }
  }

  return result || 0;
}
