function solution(absolutes, signs) {
  return absolutes
    .map((item, idx) => (signs[idx] ? item : item * -1))
    .reduce((acc, cur) => (acc += cur));
}
